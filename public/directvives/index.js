/**
 * Commons exporter
 */
import angular from 'angular';
import DragMe from './drag-me';
import DropOnMe from './drop-on-me'
import Colorpicker from './colorpicker'

let componentsModule = angular.module('App.Directives', [])
  .directive('dragMe', DragMe)
  .directive('dropOnMe', DropOnMe)
  .directive('colorpicker', Colorpicker)
  .name;

export default componentsModule;