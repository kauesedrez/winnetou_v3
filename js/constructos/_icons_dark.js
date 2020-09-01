import {
  Winnetou
} from "../../node_modules/winnetoujs/src/winnetou.js";

/**@private */
class icons_dark_delete_ extends Winnetou {

  // ========================================




  /**
   * Create an icon **icons_dark_delete**
   * @param {object} [elements]
   * @param {any=} elements.class Class for the icon
   * @param {object} [options]
   * @param {any=} options.identifier
   */
  constructo = (elements, options) => {

    let identifier = this._getIdentifier(options ? options.identifier || 'notSet' : 'notSet');

    elements = this._test(identifier, 'icons_dark_delete', `icons_dark_delete-win-${identifier}`, elements);
    let component;
    let obj = {
      code(elements) {
        return `
  <svg viewBox="0 0 448 512" id="icons_dark_delete-win-${identifier}" class="winIcons ${(elements?.class || "")}">
  <path data-fill="currentColor" d="M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z" class=""></path>
</svg>`
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
            icons_dark_delete: `icons_dark_delete-win-${identifier}`,
          },
        }
      }
    }
    component = obj.code(elements);
    return obj;
  }
}

export const icons_dark_delete = new icons_dark_delete_().constructo;