const ATTRIBUTE_MAP = { 'main-link': 'mainLink', mainlink: 'mainLink' };
const DEFAULT_SELECTOR = 'a';
const LINK_REGEX = /^(block-link|a)$/i;

/**
 * A simple and super lightweight web component to create block links.
 * @attr {string} main-link - Selector that identifies the main link
 * @attr {string} mainlink - Selector that identifies the main link
 * @slot - The default slot for this component's content
 */
export class BlockLink extends HTMLElement {
  constructor() {
    super();
    /**
     * Selector that identifies the main link
     * @type {string}
     * @attr main-link
     */
    this.mainLink = DEFAULT_SELECTOR;
    const css = `:host { display: block; }`;
    const html = `<slot></slot>`;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>${css}</style>
    ${html}
    `;
  }

  static get observedAttributes() {
    return ['main-link', 'mainlink'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[ATTRIBUTE_MAP[attr]] = newVal;
    }
  }

  connectedCallback() {
    this.addEventListener('click', this._clicked);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._clicked);
  }

  get _mainLinkNode() {
    const custom = this.querySelector(this.mainLink);
    const fallback = this.querySelector(DEFAULT_SELECTOR);
    return custom && LINK_REGEX.test(custom.tagName) ? custom : fallback;
  }

  /**
   * Triggers a click on this component's main link.
   */
  click() {
    if (!this._mainLinkNode) {
      return;
    }
    this._mainLinkNode.click();
  }

  _clicked(e) {
    e.stopPropagation();
    const selection = window.getSelection();
    const textSelected =
      selection.containsNode(this, true) && !!selection.toString();
    const innerLinkClicked =
      e.target !== this && LINK_REGEX.test(e.target.tagName);
    if (innerLinkClicked || textSelected) {
      return;
    }
    this.click();
  }
}
