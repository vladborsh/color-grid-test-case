const colorpicker = () => {
  const DDO = {
    require: 'ngModel',
    link: (scope, element, attrs, ngModel) => {
      element.colorPicker({
        // initialize the color to the color on the scope
        pickerDefault: scope.color,
        // update the ngModel whenever we pick a new color
        onColorChange: (id, newValue) => {
          scope.$apply( () => {
            ngModel.$setViewValue(newValue);
          });
        }
      });

      // update the color picker whenever the value on the scope changes
      ngModel.$render = () => {
        element.val(ngModel.$modelValue);
        element.change();
      };
    }
  }
  return DDO;
}

export default colorpicker