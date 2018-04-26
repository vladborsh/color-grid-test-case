import angular from 'angular';
import uiRouter from 'angular-ui-router';
import PaletteLoaderComponent from './palette-loader.component';

let PaletteLoaderModule= angular.module('paletteLoader', [
  uiRouter
])
.component('paletteLoader', PaletteLoaderComponent )
.name;

export default PaletteLoaderModule;