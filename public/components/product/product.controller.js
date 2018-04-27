import angular from 'angular';

/**
 * Product Controller does some stuff
 */
class ProductController {
  
  constructor( SfService, $scope ) {
    this._SfService = SfService;
    this._scope = $scope;
    this.cellArr = [];
    this.palette = [];
    this.gridJson = '';
  }

  /**
   * Product Controller initialization util method
   */
  $onInit() {
    const ARR_SIZE = 5;
    const DEFAULT_COLOR = '#666666'
    for ( let i = 0; i < ARR_SIZE; i++ ) {
      var row = [];
      for ( let j = 0; j < ARR_SIZE; j++ ) row.push({active:false, color: '#fff'});
      this.cellArr.push(row);
    }
    this.gridJson = JSON.stringify(this.cellArr);
    for ( let i = 0; i < ARR_SIZE; i++ ) {
      this.palette.push(DEFAULT_COLOR);
    }
    this._scope.$on('dropColor', (target, data) => {
      this.onDropColor(target, data);
    } )
  }

  onDropColor(target, data) {
    this.cellArr[data.row][data.col].color = data.color;
    this.cellArr[data.row][data.col].id = data.id;
    let copy = angular.copy(this.cellArr);
    copy[data.row][data.col].active = true;
    this.gridJson = JSON.stringify(copy);
    this._scope.$digest();
    this.cellArr[data.row][data.col].active = true;
  }
  
  loadGrid(payload) {
    payload = JSON.parse(payload)
    payload.forEach((row, i) => {
      row.forEach((cell,j) => {
        this.cellArr [i][j].color = cell.color;
        this.cellArr [i][j].active = cell.active;
        this.cellArr [i][j].id = cell.id;
      })
    });
    this.gridJson = JSON.stringify(this.cellArr);
  }

}

ProductController.$inject = ['SfService', '$scope'];

export default ProductController

