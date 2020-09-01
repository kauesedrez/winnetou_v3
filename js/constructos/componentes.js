import {
  Winnetou
} from "../../node_modules/winnetoujs/src/winnetou.js";

/**@private */
class divSimples_ extends Winnetou {

  // ========================================




  /**
   * 
   * @param {object} elements
   * @param {any} elements.texto 
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  constructo = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'divSimples', `divSimples-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <div id="divSimples-win-${identifier}">
    <h1 style="color: red">It Works! 10</h1>
    ${(elements?.texto)}
  </div>
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
            divSimples: `divSimples-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }
} /**@private */
class bt_ extends Winnetou {

  // ========================================




  /**
   * 
   * @param {object} elements
   * @param {any} elements.action 
   * @param {any} elements.text 
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  constructo = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'bt', `bt-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <button onclick="${(elements?.action)}" id="bt-win-${identifier}">${(elements?.text)}</button>
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
            bt: `bt-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }
}

export const divSimples = new divSimples_().constructo;
export const bt = new bt_().constructo;