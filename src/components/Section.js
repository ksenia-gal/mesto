export default class Section {
  constructor({ renderer }, cardTemplateSelector) {
    this._container = document.querySelector(cardTemplateSelector);
    this._renderer = renderer;
    
  }

  addItem = (item) => {
    this._container.prepend(item)
  }

  renderItems(items) {
    items.reverse().forEach((item) => {
      return this._renderer(item)
    })
  }
}