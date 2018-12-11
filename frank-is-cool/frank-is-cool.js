import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `frank-is-cool`
 * -20 degrees
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FrankIsCool extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]! Cold as ❄️</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'frank-is-cool',
      },
    };
  }
}

window.customElements.define('frank-is-cool', FrankIsCool);
