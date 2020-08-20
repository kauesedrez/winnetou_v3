import { Constructos, Winnetou } from "../winnetou.js";

let div = Constructos.divSimples({ texto: "Olá Ícones" }).create(
  "#app",
  {
    clear: true,
  }
);

Constructos.coloredIcons_tropical().create("#app");

// new divSimples()
//   .divSimples({ texto: "teste div simples" })
//   .create("#app");

// setTimeout(() => {
//   import("./class1.js").then(({ default: Texto }) => {
//     let texto = new Texto().print();
//     Constructos.divSimples({ texto }).create("#app");
//   });
// }, 5000);

const loadModule = async () => {
  // let class1 = await import("./class1.js");
  // let texto = new class1.Texto();

  // Constructos.divSimples({ texto: texto.print() }).create("#app");

  // let divSimples = new (await import("../divsimples.js")).divSimples()
  //   .constructo;

  let divs = await import("../constructos/output/divsimples.js");

  divs.divSimples({ texto: "ola mundo" }).create("#app");

  divs.bt({ text: "ola", action: "" }).create("#app");
};

const loadModule2 = async () => {
  let ss = await import("../constructos/output/slideScreen.js");
  ss.slideScreen().create("#app");
};

//@ts-ignore
window.loadModule = loadModule;
//@ts-ignore
window.loadModule2 = loadModule2;

Constructos.bt({
  text: "Load module",
  action: "loadModule()",
}).create("#app");

Constructos.bt({
  text: "Load module 2",
  action: "loadModule2()",
}).create("#app");
