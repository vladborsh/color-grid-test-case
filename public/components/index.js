/**
 * Components exporter
 */
import Product from './product/product';
import Cell from './cell/cell';
import PaletteLoader from './palette-loader/palette-loader';
import angular from 'angular';

let componentsModule = angular.module('App.Components', [
  Product ,
  Cell ,
  PaletteLoader ,
]).name;

export default componentsModule;