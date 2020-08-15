import { Constructos, Winnetou } from "../winnetou.js";
// import { divSimples } from "../divsimples.js";

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

  let divSimples = (await import("../divsimples.js")).default;

  divSimples({ texto: "Minha nossa!" }).create("#app");
  divSimples({ texto: "Minha nossa2!" }).create("#app");
  divSimples({ texto: "Minha nossa3!" }).create("#app");
};

//@ts-ignore
window.loadModule = loadModule;

Constructos.bt({
  text: "Load module",
  action: "loadModule()",
}).create("#app");
