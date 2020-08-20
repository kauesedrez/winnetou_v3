import {
  WinnetouBase
} from "../../node_modules/winnetoujs/src/_winnetouBase.js";

/**@private */
class slideScreen_ extends WinnetouBase {

  // ========================================




  /**
   * 
   * @param {object} [elements]
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  constructo = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'slideScreen', `slideScreen-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <div class="slideScreen" id="slideScreen-win-${identifier}"></div>
`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            slideScreen: `slideScreen-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }
} /**@private */
class screen_ extends WinnetouBase {

  // ========================================




  /**
   * 
   * @param {object} [elements]
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  constructo = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'screen', `screen-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <div class="screen" id="screen-win-${identifier}"></div>
`
      },

      /**
       * Create Winnetou Constructo        
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      "create": (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            screen: `screen-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }
}

export const slideScreen = new slideScreen_().constructo;
export const screen = new screen_().constructo;