import { Winnetou } from "../winnetou.js";

export function colore(id) {
  Winnetou.select(id).css("color", "red");
}
