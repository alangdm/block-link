var require = () => {};

var e="closed",n="top-only",t="full";class r extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"});this._value={},this.open=e;}set value(e){this._value=e,this.render();}get value(){return this._value}connectedCallback(){this.render();}render(){this.shadowRoot.innerHTML=`\n    <style>\n      ${r.styles}\n    </style>\n    ${this.renderNode(void 0,this._value,0)}`;}renderNode(e,n,t){const a=r.objType(n);switch(a){case"Object":case"Array":return this.renderParent(a,e,n,t);default:return this.renderKeyValue(e,this.renderValue(a,n))}}renderValue(e,n){switch(e){case"Boolean":return ""+(n?"true":"false");case"String":return `"${n}"`;case"Number":return ""+n;case"Date":return ""+n.toISOString();case"Null":return "null";case"Undefined":return "undefined";case"Function":case"Symbol":return ""+n.toString();default:return "###unsupported yet###"}}renderParent(e,r,a,s){const o=this.open===t||this.open===n&&0==s,i=`<summary>${this.renderSummaryObject(e,r,a)}</summary>`;let c="";const l=Reflect.ownKeys(a),u=s+1;l.forEach(e=>{c+=this.renderNode(e,a[e],u);});return `<details${o?" open":""}>${i}<div>${c}</div></details>`}renderKeyValue(e,n){return `<div>${this.renderSpanKey(e)}${this.renderSpanValue(n)}</div>`}renderSpanKey(e){return e?`<span class="key">${e}: </span>`:""}renderSpanValue(e){return e?`<pre class="value">${e}</pre>`:""}renderSpanLessImportant(e){return e?`<span class="less">${e}</span>`:""}renderSummaryObject(e,n,t){const r=this.renderSpanKey(n);let a="",s="",o="";switch(e){case"Object":a="Object {",s="}";const e=Reflect.ownKeys(t);o=e.reduce((e,n,r)=>{if(r>5)return !1;if(5==r)return e+" "+this.renderSpanLessImportant("...");const a=t[n];return e+` ${this.renderSpanKey(n)}${this.renderSummaryValue(a)}`},"");break;case"Array":a=`Array(${t.length}) [`,s=" ]";const n=t.slice(0,5);n.forEach((e,n)=>{o+=` ${this.renderSpanKey(""+n)}${this.renderSummaryValue(e)}`;}),n.length<t.length&&(o+=" "+this.renderSpanLessImportant("..."));}return `${r}${a} <span class="show-when-closed">${o}</span> ${s}`}renderSummaryValue(e){const n=r.objType(e);switch(n){case"Object":return this.renderSpanLessImportant("{...}");case"Array":return this.renderSpanLessImportant("[...]");default:return this.renderSpanValue(this.renderValue(n,e))}}static objType(e){const n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n?"function"==typeof e[Symbol.iterator]?"Iterable":e.constructor.name:n}static get styles(){return '\n      :host {\n        font-family: monospace;\n      }\n\n      pre {\n        display: inline;\n      }\n\n      details > summary:focus {\n        outline: none;\n      }\n      \n      details > div {\n        padding-left: 15px;\n      }\n\n      details[open=""] > summary > .show-when-closed {\n        display : none;\n      }\n\n      .key {\n        color: purple;\n      }\n\n      .value {\n        color: green;\n      }\n\n      .less {\n        color: grey;\n      }\n\n    '}}async function a(e,n,t){const r=function e(n){const t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t)return "function"==typeof n[Symbol.iterator]?"Iterable":"Symbol(react.element)"===String(n.$$typeof)?"React":void 0!==n.$flags$?"Stencil":void 0===n.constructor?"Preact":"nodeName"in n&&"children"in n?"Omi":"css"in n&&"template"in n&&"exports"in n&&"name"in n?"Riot":"Component"in n&&"Riot"===e(n.Component)?"RiotStory":"Component"in n&&"Svelte"===e(n.Component)?"SvelteStory":"components"in n&&("template"in n||"render"in n)?"Vue":n.constructor.name;if("Array"===t){let t=!1;for(const r of n)if(null===r||"boolean"==typeof r||"string"==typeof r||"number"==typeof r);else {if("Omi"!==e(r)){t=!1;break}t=!0;}if(t)return "Omi"}else if("Function"===t){const e=n.toString();if("CustomElementConstructor"in n)return "Lwc";if(e.includes("extends SvelteComponent"))return "Svelte";if(e.includes("_tmpl$.cloneNode(true)")||e.includes("_$createComponent("))return "Solid"}else if(n instanceof Element&&1===n.nodeType)return "Element";return t}(n);if(!await async function(e,n,t,r){switch(t){case"Lwc":return r.appendChild((await e("lwc")).createElement("c-story",{is:n})),!0;case"TemplateResult":return (await e("lit-html")).render(n,r),!0;case"Hole":return (await e("uhtml")).render(r,n),!0;case"LighterHole":return (await e("lighterhtml")).render(r,n),!0;case"Stencil":{const t=await e("@stencil/core/internal/client");return "BUILD"in t?t.renderVdom({$hostElement$:r,$cmpMeta$:{}},n):t.renderVdom(r,{},{},n),!0}case"React":return (await e("react-dom")).render(n,r),!0;case"Preact":return (await e("preact")).render(n,r),!0;case"Omi":return (await e("omi")).render(n,r),!0;case"Riot":return (await e("riot")).component(n)(document.getElementById("root"),{}),!0;case"RiotStory":{const{Component:t,props:r,options:a}=n;return (await e("riot")).component(t)(document.getElementById("root"),r,a),!0}case"Solid":return (await e("solid-js/dom")).render(n,r),!0;case"Svelte":return new n({target:r}),!0;case"SvelteStory":{const{Component:e,...t}=n;return new e({target:r,...t}),!0}case"Vue":return (await e("vue")).createApp(n).mount(r),!0;case"Element":case"DocumentFragment":return r.appendChild(n),!0}return !1}(e,n,r,t))switch(r){case"String":{const e=n.trim();if(e.match(/^<[^>]*>[\s\S]*<\/[^>]*>$/g)){t.innerHTML=e;break}}default:{const e=document.createElement("json-element");e.value=n,e.open="full",t.insertAdjacentElement("beforeend",e);break}}}customElements.define("json-element",r);

const ATTRIBUTE_MAP = {
  "main-link": "mainLink",
  mainlink: "mainLink"
};
const DEFAULT_SELECTOR = "a";
const LINK_REGEX = /^(block-link|a)$/i;
/**
 * A simple and super lightweight web component to create block links.
 * @attr {string} main-link - Selector that identifies the main link
 * @attr {string} mainlink - Selector that identifies the main link
 * @slot - The default slot for this component's content
 */

class BlockLink extends HTMLElement {
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
    this.attachShadow({
      mode: "open"
    });
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
    const textSelected = selection.containsNode(this, true) && !!selection.toString();
    const innerLinkClicked = e.target !== this && LINK_REGEX.test(e.target.tagName);

    if (innerLinkClicked || textSelected) {
      return;
    }

    this.click();
  }

}

customElements.define("block-link", BlockLink);

try {
  customElements.define('mdjs-story', class extends HTMLElement {
    constructor(){
      super();
      this.style.display = 'block';
      this.innerHTML = '<p>Loading...</p>';
    }
    set story(story){
      a(require,story(),this);
    }
  });
} catch (e) {}

try {
  customElements.define('mdjs-preview', class extends HTMLElement {
    connectedCallback(){
      this.style.display = 'block';
      this.style.position = 'relative';
      this.innerHTML = `
      <mdjs-story></mdjs-story>
      <details>
        <summary style="text-align: center;user-select: none;">
          show code
        </summary>
        <pre><code class="hljs"></code></pre>
      </details>`;
    }
    set story(story){
      this.querySelector('mdjs-story').story = story;
    }
    set code(code){
      this.querySelector('code').textContent = code;
    }
  });
} catch (e) {}


const stories = [];
for (const story of stories) {
  // eslint-disable-next-line no-template-curly-in-string
  const storyEl = document.querySelector(`[mdjs-story-name="${story.key}"]`);
  storyEl.story = story.story;
  storyEl.code = story.code;
}
