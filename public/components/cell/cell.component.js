import template from './cell.html';
import controller from './cell.controller';
import './cell.scss';

let CellComponent = {
  bindings: {
    cellActive : '<',
    cellColor : '<',
    cellId : '<',
  },
  template,
  controller,
  controllerAs: 'c'
}

export default CellComponent;