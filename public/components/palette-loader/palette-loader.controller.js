/**
 * Palette-loader Controller does some stuff
 */
class PaletteLoaderController {
  
  constructor() {
    this.init();
    this.isShownForm = false
  }

  /**
   * Palette-loader Controller initialization util method
   */
  init() {

  }

  showForm() {
    this.isShownForm = true;
  }

  submitGrid() {
    this.onLoad({'payload' : this.payload});
    this.isShownForm = false;
    this.payload = '';
  }

}

PaletteLoaderController.$inject = [];

export default PaletteLoaderController

