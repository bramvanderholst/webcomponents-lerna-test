import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `fourth-elem`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FourthElem extends PolymerElement {
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
        value: 'fourth-elem',
      },
    };
  }
}

window.customElements.define('fourth-elem', FourthElem);
