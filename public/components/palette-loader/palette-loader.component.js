import template from './palette-loader.html';
import controller from './palette-loader.controller';
import './palette-loader.scss';

let PaletteLoaderComponent = {
  bindings: {
    onLoad : '&'
  },
  template,
  controller,
  controllerAs: 'l'
}

export default PaletteLoaderComponent;