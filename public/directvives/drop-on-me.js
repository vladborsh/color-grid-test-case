import angular from 'angular';

const splitRgbColor = (colorString) => {
  colorString = colorString.replace('rgb(','').replace(')','');

  return colorString.split(',')
}

const blend = (color1, color2) => {
  let r = parseInt (parseInt(color1[0]) + parseInt(color2[0])/2)
  let g = parseInt (parseInt(color1[1]) + parseInt(color2[1])/2)
  let b = parseInt (parseInt(color1[2]) + parseInt(color2[2])/2)
  return `rgb(${r},${g},${b} )`
}

const dropOnMe = ( $compile ) => {
  const DDO = {
    restrict: 'A',
    link: (scope, element, attrs) => {
      element.on('dragover', (event) => {
        event.preventDefault();
      });
      element.on('drop', (event) => {
        event.preventDefault();
        const dropColorEvent = {
          row: event.target.attributes['cell-row'].nodeValue,
          col: event.target.attributes['cell-column'].nodeValue,
        }
        let data = JSON.parse( event.dataTransfer.getData("text") );
        if (event.target.attributes.draggable) {
          dropColorEvent.color = blend( splitRgbColor(event.target.style.background), splitRgbColor(data.color) );
          scope.$emit('dropColor', dropColorEvent);
        } else {
          dropColorEvent.color = data.color;
          dropColorEvent.id = parseInt(data.id.split('_')[1])+1;
          scope.$emit('dropColor', dropColorEvent);          
        }
      });
    }
  };
  return DDO;
}

dropOnMe.$inject = ['$compile']

export default dropOnMe