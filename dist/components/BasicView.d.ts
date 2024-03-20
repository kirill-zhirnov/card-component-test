import { TCallback } from '../@types/basicView';
export default class BasicView<Data extends object> {
    protected tagName: string;
    readonly $el: HTMLElement;
    protected listeners: {
        type: string;
        listener: (e: Event) => void;
    }[];
    readonly data: Data;
    constructor(data?: Data);
    on(type: string, selector: TCallback | string, callback?: TCallback | null): this;
    render(): void;
    appendTo(parent: HTMLElement): this;
    remove(): this;
    matchSelector(callback: TCallback, selector: string | null, e: Event): void;
    clearListeners(): this;
    protected makeDataProxy(data?: Data): Data;
}
