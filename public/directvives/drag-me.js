const convertHex = (hex) => {
  hex = hex.replace('#','');
  let r = parseInt(hex.substring(0,2), 16);
  let g = parseInt(hex.substring(2,4), 16);
  let b = parseInt(hex.substring(4,6), 16);
  let result = 'rgb('+r+','+g+','+b+')';
  return result;
}

const dragMe = () => {
  const DDO = {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.prop('draggable', true);
      element.on('dragstart', (event) => {
        let value = {}
        if (event.target.localName == 'input') {
          value = {
            id : event.target.id,
            color: convertHex(event.target.value)
          }
        }
        if (event.target.localName == 'div') {
          value = {
            id : event.target.id,
            color: event.target.style.backgroundColor
          }
        }
        event.dataTransfer.setData('text', JSON.stringify(value) )
      });
    },
  };
  return DDO;
}

export default dragMe