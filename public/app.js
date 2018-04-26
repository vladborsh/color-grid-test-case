import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngBootstrap from 'angular-ui-bootstrap';
import ngCookies from 'angular-cookies';
import uiRouter from 'angular-ui-router';
import Components from './components';
import Commons from './commons';
import Directives from './directvives';
import 'bootstrap/dist/css/bootstrap.min.css';
//
import AppComponent from './app.component';


angular.module('App', [
  ngAnimate,
  ngBootstrap,
  ngCookies,
  uiRouter,
  Directives,
  Components,
  Commons,
])
  .config(
    ($stateProvider, $urlRouterProvider) => {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('product', {
          url: '/',
          template: '<product></product>'
        });
    }
  )
  .component('app', AppComponent);
