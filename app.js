import { Constructos, Winnetou } from "./winnetou.js";

let div = Constructos.divSimples({ texto: "Olá Ícones" }).create(
  "#app",
  {
    clear: true,
  }
);

Constructos.coloredIcons_tropical().create("#app");
