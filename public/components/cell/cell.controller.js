/**
 * Cell Controller does some stuff
 */
class CellController {
  
  constructor( $scope, $element, $compile ) {
    this._scope = $scope;
    this._element = $element;
    this._compile = $compile;
    this.initialChanges = true;
    this.activated = false;
  }
  
  $onInit() {}

  $onChanges() {
    console.log(this.cellColor, this.cellActive, this.activated)
    if (!this.initialChanges) {
      if ( this.cellActive ) {
        if ( !this.activated ) {
          angular.element(this._element[0]).append(this.generateTemplate());
          this.activated = true;
          return;
        }
        angular.element(angular.element(this._element[0]).children()[1])[0].style.background = this.cellColor
      } else {
        if (this.cellColor == '#fff' && this.activated) {
          var el = angular.element(angular.element(angular.element(this._element[0]).children()[1])[0]);
          console.log('here', el)
          el.remove()
          return;
        }
        angular.element(this._element[0]).append(this.generateTemplate());
        this.activated = true;
      }
    }
    this.initialChanges = false;
  }

  generateTemplate() {
    let generatedTemplate = `
      <div id="drag_${(this.cellId)}" 
        drag-me 
        class="box" style="background:${this.cellColor}"
        cell-row="${ this._element[0].attributes['cell-row'].nodeValue }"
        cell-column="${ this._element[0].attributes['cell-column'].nodeValue }">
      </div>`
    return this._compile(generatedTemplate)(this._scope)
  }

}

CellController.$inject = ['$scope', '$element', '$compile'];

export default CellController

