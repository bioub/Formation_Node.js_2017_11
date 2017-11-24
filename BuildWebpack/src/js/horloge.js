import format from 'date-fns/format'
export const myFormat = 'HH:mm:ss';

export class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} container
   */
  constructor(container) {
    this._container = container;
  }

  _render() {
    const now = new Date();
    this._container.innerText = format(new Date(), myFormat);
  }

  start() {
    this._render();
    setInterval(this._render.bind(this), 1000);
  }
}
