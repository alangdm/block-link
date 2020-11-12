const hash = document.querySelector("#hash");
window.addEventListener("hashchange", () => {
  hash.textContent = location.hash;
});

const code = document.querySelector("code");
const mainDemo = document.querySelector("block-link.card");
code.textContent = mainDemo.outerHTML;
