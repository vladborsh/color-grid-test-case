/**
 * Product Controller does some stuff
 */
class ProductController {
  
  constructor( SfService, $scope ) {
    this._SfService = SfService;
    this._scope = $scope;
  }

  /**
   * Product Controller initialization util method
   */
  $onInit() {
    const ARR_SIZE = 5;
    this.cellArr = [];
    for ( let i = 0; i < 5; i++ ) {
      var row = [];
      for ( let j = 0; j < 5; j++ ) row.push({active:false, color: '#fff'});
      this.cellArr.push(row);
    }
    this._scope.$on('dropColor', (target, data) => {
      this.cellArr[data.row][data.col].color = data.color;
      this.cellArr[data.row][data.col].id = data.id;
      this._scope.$digest();
      this.cellArr[data.row][data.col].active = true;
    })
  }

}

ProductController.$inject = ['SfService', '$scope'];

export default ProductController

