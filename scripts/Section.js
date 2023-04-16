export class Section {
  constructor({ items, renderer }, cardTemplateSelector) {
    this._container = document.querySelector(cardTemplateSelector);
    this._items = items;
    this._renderer = renderer;
  }

  renderItems() {
    this._items.forEach((item) => this._renderer(item));
  }

  addItem(cardElement) {
    this._container.prepend(cardElement);
  }
}
