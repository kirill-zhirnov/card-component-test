import BasicView from './BasicView';

export default class Card extends BasicView<ICardData> {
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

export interface ICardData {
	header?: string;
	headerStyles?: string;
	main?: string;
};