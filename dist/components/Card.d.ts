import BasicView from './BasicView';
export default class Card extends BasicView<ICardData> {
    render(): void;
}
export interface ICardData {
    header?: string;
    headerStyles?: string;
    main?: string;
}
