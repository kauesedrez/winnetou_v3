import { divSimples, bt } from "./constructos/componentes.js";

import { bt as bt2 } from "./constructos/componentes2.js";

import { Strings } from "./_strings.js";

import { W } from "../node_modules/winnetoujs/src/winnetou.js";

W.lang(Strings, render);

function render() {
  divSimples({ texto: Strings.titulo }).create("#app");

  divSimples({ texto: "teste" }).create("#app");

  divSimples({ texto: "teste 2" }).create("#app");

  bt({ text: "Load Module", action: "loadModule()" }).create("#app");

  bt2({ text: "Trocar para portugues", action: "pt()" }).create(
    "#app"
  );

  async function loadModule() {
    let icons = await import("./constructos/_icons.js");
    icons.icons_delete().create("#app");
  }

  //@ts-ignore
  window.loadModule = loadModule;
  //@ts-ignore
  window.pt = pt;
}

function pt() {
  W.changeLang("pt-br");
}
