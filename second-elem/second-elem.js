import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import ""

class SecondElem extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
      }
    </style>
`;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('second!');
  }

  static get properties() {
    return {}
  }

  static get observers() {
    return []
  }
}

customElements.define('second-elem', SecondElem);
