import PaletteLoaderModule from './palette-loader';
import PaletteLoaderController from './palette-loader.controller';
import PaletteLoaderComponent from './palette-loader.component';
import PaletteLoaderTemplate from './palette-loader.html';

describe('Palette-loader', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Palette-loaderModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Palette-loaderController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    it('invokes init method [REMOVE]', () => {
      let controller = makeController();
    });
  });

  describe('Component', () => {
    let component = Palette-loaderComponent;
    it('includes the intended template', () => {
      expect(component.template).toEqual(Palette-loaderTemplate);
    });
    it('invokes the right controller', () => {
      expect(component.controller).toEqual(Palette-loaderController);
    });
  });
});