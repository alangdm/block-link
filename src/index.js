const ATTRIBUTE_MAP = { "main-link": "mainLink", mainlink: "mainLink" };
const DEFAULT_SELECTOR = "a";
const ANCHOR_REGEX = /^a$/i;

class BlockLink extends HTMLElement {
  constructor() {
    super();
    this.mainLink = DEFAULT_SELECTOR;
    const css = `:host { display: block; }`;
    const html = `<slot></slot>`;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>${css}</style>
    ${html}
    `;
  }

  static get observedAttributes() {
    return ["main-link", "mainlink"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (oldVal !== newVal) {
      this[ATTRIBUTE_MAP[attr]] = newVal;
    }
  }

  connectedCallback() {
    this.addEventListener("click", this._clicked);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._clicked);
  }

  get _mainLinkNode() {
    const custom = this.querySelector(this.mainLink);
    const fallback = this.querySelector(DEFAULT_SELECTOR);
    return custom && ANCHOR_REGEX.test(custom.tagName) ? custom : fallback;
  }

  _clicked(e) {
    const isTextSelected = !!window.getSelection().toString();
    if (
      ANCHOR_REGEX.test(e.target.tagName) ||
      isTextSelected ||
      !this._mainLinkNode
    ) {
      return;
    }
    this._mainLinkNode.click();
  }
}

customElements.define("block-link", BlockLink);
