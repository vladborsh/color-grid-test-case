import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CellComponent from './cell.component';

let CellModule = angular.module('cell', [
  uiRouter
])
.component('cell', CellComponent)
.name;

export default CellModule;