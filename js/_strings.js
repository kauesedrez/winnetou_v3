import {
  Winnetou
} from "../node_modules/winnetoujs/src/winnetou.js";
class Strings_ extends Winnetou {
  constructor() {
    super();


    this.strings = {
      /** @property Hello World! It works! really? And? so? Now I got it! Everything is working! */
      titulo: "Hello World! It works! really? And? so? Now I got it! Everything is working!",

    }


  }
}
const S = new Strings_();

/**
 * Object containing the strings taken from the translation file
 * @param {string} titulo Hello World! It works! really? And? so? Now I got it! Everything is working!
 */
// @ts-ignore
export const Strings = S.strings;