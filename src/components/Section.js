export class Section {
  constructor({ renderer }, cardTemplateSelector) {
    this._container = document.querySelector(cardTemplateSelector);
    this._renderer = renderer;
  }

  addItem = (item) => {
    this._container.prepend(item);
  }
  renderItems(res) {
    res.forEach(this._renderer);
  }
}
