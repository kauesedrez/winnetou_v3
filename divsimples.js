import { WinnetouBase } from "./node_modules/winnetoujs/src/_winnetouBase.js";

export class divSimples extends WinnetouBase {
  /**
   *
   * @param {object} elements
   * @param {any} elements.texto
   * @param {object} [options]
   * @param {any=} options.identifier
   *
   */
  constructo = (elements, options) => {
    let identifier = this._getIdentifier(
      options ? options.identifier || "notSet" : "notSet"
    );

    elements = this._test(
      identifier,
      "divSimples",
      `divSimples-win-${identifier}`,
      elements
    );
    let component;
    let obj = {
      code(elements) {
        return `
            <div id="divSimples-win-${identifier}">
                ${elements?.texto}
            </div>
            `;
      },

      /**
       * Create Winnetou Constructo
       * @param  {string} output The node or list of nodes where the component will be created
       * @param  {object} [options] Options to control how the construct is inserted. Optional.
       * @param  {boolean} [options.clear] Clean the node before inserting the construct
       * @param  {boolean} [options.reverse] Place the construct in front of other constructs
       */

      create: (output, options) => {
        this.create(component, output, options);
        return {
          ids: {
            divSimples: `divSimples-win-${identifier}`,
          },
        };
      },
    };
    component = obj.code(elements);
    return obj;
  };
}

export const divSimples_ = new divSimples().constructo;

export default new divSimples().constructo;
