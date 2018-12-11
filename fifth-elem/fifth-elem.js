import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `fifth-elem`
 * My fifth test element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FifthElem extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'fifth-elem',
      },
    };
  }
}

window.customElements.define('fifth-elem', FifthElem);
