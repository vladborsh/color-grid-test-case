/**
 * Components exporter
 */
import Product from './product/product';
import Cell from './cell/cell';
import angular from 'angular';

let componentsModule = angular.module('App.Components', [
  Product ,
 Cell ,
]).name;

export default componentsModule;