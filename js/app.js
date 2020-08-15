import { Constructos, Winnetou } from "../winnetou.js";

let div = Constructos.divSimples({ texto: "Olá Ícones" }).create(
  "#app",
  {
    clear: true,
  }
);

Constructos.coloredIcons_tropical().create("#app");

// setTimeout(() => {
//   import("./class1.js").then(({ default: Texto }) => {
//     let texto = new Texto().print();
//     Constructos.divSimples({ texto }).create("#app");
//   });
// }, 5000);

const loadModule = async () => {
  let class1 = await import("./class1.js");
  let texto = new class1.Texto();

  Constructos.divSimples({ texto: texto.print() }).create("#app");
};

//@ts-ignore
window.loadModule = loadModule;

Constructos.bt({
  text: "Load module",
  action: "loadModule()",
}).create("#app");
