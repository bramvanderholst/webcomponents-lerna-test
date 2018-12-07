import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

class FirstElem extends PolymerElement {
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
    console.log('first!!');
  }

  static get properties() {
    return {}
  }

  static get observers() {
    return []
  }
}

customElements.define('first-elem', FirstElem);
