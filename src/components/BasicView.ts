import {TCallback} from '../@types/basicView';

export default class BasicView<Data extends object> {
	protected tagName: string = 'div';
	public readonly $el: HTMLElement;
	protected listeners: {type: string, listener: (e: Event) => void}[] = [];
	public readonly data: Data = {} as Data;

	constructor(data?: Data) {
		this.$el = document.createElement(this.tagName);
		this.data = this.makeDataProxy(data);
	}

	on(type: string, selector: TCallback|string, callback: TCallback|null = null) {
		let resolvedSelector: string|null;

		if (typeof(selector) === 'function') {
			callback = selector;
			resolvedSelector = null;
		} else {
			resolvedSelector = selector;
		}

		if (callback) {
			const listener = this.matchSelector.bind(this, callback, resolvedSelector);
			this.listeners.push({type, listener});
			this.$el.addEventListener(type, listener);
		}

		return this;
	}

	render() {
	}

	appendTo(parent: HTMLElement) {
		this.render();
		parent.appendChild(this.$el);

		return this;
	}

	remove() {
		this.clearListeners();
		this.$el.remove();

		return this;
	}

	matchSelector(callback: TCallback, selector: string|null, e: Event) {
		if (selector === null) {
			callback.call(this, e);
		} else {
			const target = e.target as unknown as HTMLElement;
			if (target && target.matches(selector)) {
				callback.call(this, e);
			}
		}
	}

	clearListeners() {
		for (const {type, listener} of this.listeners) {
			this.$el.removeEventListener(type,listener);
		}
		this.listeners = [];

		return this;
	}

	protected makeDataProxy(data?: Data) {
		const that = this;

		return new Proxy(data || this.data, {
			get(target, key, receiver) {
				return Reflect.get(target, key, receiver);
			},
			set(target, key, val, receiver) {
				const result = Reflect.set(target, key, val, receiver);
				that.render();
				return result;
			}
		}) as Data;
	}
}