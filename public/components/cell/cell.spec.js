import CellModule from './cell';
import CellController from './cell.controller';
import CellComponent from './cell.component';
import CellTemplate from './cell.html';

describe('Cell', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CellModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CellController();
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
    let component = CellComponent;
    it('includes the intended template', () => {
      expect(component.template).toEqual(CellTemplate);
    });
    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CellController);
    });
  });
});