[![edit-in-WebComponents.dev](https://webcomponents.dev/assets/ext/edit_in_wcd.svg)](https://webcomponents.dev/edit/dyflJofod72crJWUDyyo)
[![npm](https://img.shields.io/npm/v/@alangdm/block-link)](https://www.npmjs.com/package/@alangdm/block-link)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/@alangdm/block-link)](https://bundlephobia.com/result?p=@alangdm/block-link)

# `<block-link>`

A simple and super lightweight web component to create block links.

```html
<script
  src="https://unpkg.com/@alangdm/block-link?module"
  type="module"
></script>

<block-link main-link="h2 a">
  <small><a href="#date">Date: 2020/01/01</a></small>
  <h2><a href="#header">Header</a></h2>
  <p>Some content</p>
  <footer><a href="#footer">Footer link</a></footer>
</block-link>
```

## Why Should You Use This?

Have you ever set a link on a whole section of your web app like this?

```html
<a href="/some-link">
  <div>
    Some content maybe with an image
    <img src="/some-image.png" />
  </div>
</a>
```

If you have, you probably have noticed that while this is super simple, it has a couple of issues:

1. You can't select the text inside this div
2. The accessibility is bad, keyboard navigation and screen readers don't work well with this

And even if you want to solve this either with pure HTML/CSS or adding some JS you might new problems like:

1. Links added to children of the section might not work
2. Using this for many parts of your app might get confusing and hard to maintain

This component solves all those problems
and you can use it like you would use a plain old `<div>`.

## How it Works

This component's code is mostly an adapted version of the code in
the article ["Block Links: The Search for a Perfect Solution"](https://css-tricks.com/block-links-the-search-for-a-perfect-solution/)
by Vikas Parashar ([@vicode_in](https://twitter.com/vicode_in)).

There are only slight differences in the core behavior of
both implementations so if you want more insight on the
thought that went into this code to prevent the problems
mentioned above please give Vikas's article a read.

## Getting Started

### Install from npm

```bash
npm i @alangdm/block-link
```

Import the component in your JS files

```js
import "@alangdm/block-link";
```

### Add from a CDN

You can use a CDN like unpkg or Pika CDN too

In your HTML files

```html
<!-- example from unpkg -->
<script
  src="https://unpkg.com/@alangdm/block-link?module"
  type="module"
></script>
```

Or in your JS files

```js
import "https://unpkg.com/@alangdm/block-link?module";
```

### Use in Your Code

Basically, just use it as if it was a `<div>`, all the magic will happen automatically! 🎉

```html
<block-link>
  <h2><a href="#header">Main Link</a></h2>
  <p>
    Some Text
  </p>
  <footer><a href="#footer">Footer link</a></footer>
</block-link>
```

By default, the first `<a>` element inside the block-link component will be used as
the link that gets triggered when a user clicks on any place that's not another link.

### Customizing the Main Link

You can add the `main-link` (or `mainlink`) attribute to customize which element is used as the main link.

The value has to be a selector relative to the parent `<block-link>` that can be used to identify the `<a>` that will be your main link.

```html
<block-link main-link=".main-link">
  <h2><a href="#header">This won't be the main link</a></h2>
  <p>
    Some text
  </p>
  <footer>
    <a class=".main-link" href="#footer">This will be the main link</a>
  </footer>
</block-link>
```

In this case we used the `.main-link` class selector to identify our main link,
but we could have also used `footer>a` or even `a[href="#footer"]`.
Any selector works as long as it serves as a unique identifier for the link.

### Nested `<block-link>`s

You can use `<block-link>`s inside of other `<block-link>`s, they can even be the main link.

```html
<block-link main-link=".child">
  <block-link class="child" main-link="#link">
    <img src="/some_image.png" />
    <a href="#main_link" id="link">This will end up being the main link</a>
  </block-link>
  <p>Some other content. It might have <a href="#other">other links</a></p>
</block-link>
```

### Styling

This component's only style is `display: block;` but you can customize both
the component and its children behave with plain CSS.

```css
block-link {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}

block-link h2,
block-link a {
  color: purple;
}

block-link a {
  text-decoration: none;
}
```

This would look something like this in action
(Go [here](https://webcomponents.dev/preview/dyflJofod72crJWUDyyo) if you can't see this properly ):

```js script
import "./index.js";
```

<style>
block-link {
  width: 200px;
  height: 200px;
  border: 1px solid black;
	padding: 1rem;
}

block-link h2,
block-link a{
  color: purple!important;
	text-decoration: none;
}
</style>
<block-link>
  <h2><a href="#header">Interactive Demo</a></h2>
  <p>
    This will only work if you're viewing it at 
		<a href="https://webcomponents.dev/preview/dyflJofod72crJWUDyyo">the demo/docs site.</a>
  </p>
  <footer>
    <a class=".main-link" href="#footer">Footer Data</a>
  </footer>
</block-link>

## Browser Support

This component works as-is on all evergreen browsers (Chrome, Safari, Edge, Firefox). 💪

This component doesn't support any IE variation, however, due to it's nature, it's possible that
it will degrade gracefully on IE so that the markup and styles display properly just without the
block link behavior. (⚠️ Warning ⚠️ this hasn't been tested yet)

## Great Articles on This Topic

- ["Block Links: The Search for a Perfect Solution"](https://css-tricks.com/block-links-the-search-for-a-perfect-solution/) by Vikas Parashar ([@vicode_in](https://twitter.com/vicode_in))
- ["Block Links are a Pain and Maybe just a Bad Idea"](https://css-tricks.com/block-links-are-a-pain-and-maybe-just-a-bad-idea/) by Chris Coyier
- ["Cards"](https://inclusive-components.design/cards/) by Heydon Pickering
- ["Block Links, Cards, Clickable Regions, Rows, Etc."](https://adrianroselli.com/2020/02/block-links-cards-clickable-regions-etc.html) by Adrian Roselli
- ["Pitfalls of Card UIs"](https://daverupert.com/2018/04/pitfalls-of-card-uis/) by Dave Rupert

> Created with [WebComponents.dev](https://webcomponents.dev)
