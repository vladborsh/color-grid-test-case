/**
 * Cell Controller does some stuff
 */
class CellController {
  
  constructor( $scope, $element, $compile ) {
    this._scope = $scope;
    this._element = $element;
    this._compile = $compile;
    this.initialChanges = true;
  }
  
  $onInit() {}

  $onChanges() {
    if (!this.initialChanges) {
      if ( this.cellActive ) {
        angular.element(angular.element(this._element[0]).children()[1])[0].style.background = this.cellColor
      } else {
        let generatedTemplate = `
          <div id="drag_${(this.cellId)}" 
            drag-me 
            class="box" style="background:${this.cellColor}"
            cell-row="${ this._element[0].attributes['cell-row'].nodeValue }"
            cell-column="${ this._element[0].attributes['cell-column'].nodeValue }">
          </div>`
        let temp = this._compile(generatedTemplate)(this._scope)
        angular.element(this._element[0]).append(temp);
      }
    }
    this.initialChanges = false;
  }
}

CellController.$inject = ['$scope', '$element', '$compile'];

export default CellController

