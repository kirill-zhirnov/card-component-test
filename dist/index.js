class BasicView {
    constructor(data) {
        this.tagName = 'div';
        this.listeners = [];
        this.data = {};
        this.$el = document.createElement(this.tagName);
        this.data = this.makeDataProxy(data);
    }
    on(type, selector, callback = null) {
        let resolvedSelector;
        if (typeof (selector) === 'function') {
            callback = selector;
            resolvedSelector = null;
        }
        else {
            resolvedSelector = selector;
        }
        if (callback) {
            const listener = this.matchSelector.bind(this, callback, resolvedSelector);
            this.listeners.push({ type, listener });
            this.$el.addEventListener(type, listener);
        }
        return this;
    }
    render() {
    }
    appendTo(parent) {
        this.render();
        parent.appendChild(this.$el);
        return this;
    }
    remove() {
        this.clearListeners();
        this.$el.remove();
        return this;
    }
    matchSelector(callback, selector, e) {
        if (selector === null) {
            callback.call(this, e);
        }
        else {
            const target = e.target;
            if (target && target.matches(selector)) {
                callback.call(this, e);
            }
        }
    }
    clearListeners() {
        for (const { type, listener } of this.listeners) {
            this.$el.removeEventListener(type, listener);
        }
        this.listeners = [];
        return this;
    }
    makeDataProxy(data) {
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
        });
    }
}

class Card extends BasicView {
    render() {
        let content = [];
        if (this.data.header) {
            content.push(`<h2 style="${this.data.headerStyles || ''}">${this.data.header}</h2>`);
        }
        if (this.data.main) {
            content.push(`<div>${this.data.main}</div>`);
        }
        this.$el.innerHTML = content.join('');
    }
}

export { BasicView, Card };
//# sourceMappingURL=index.js.map
