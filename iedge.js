function replaceElementType(oldType, newType) {
  var detailsTags = document.getElementsByTagName(oldType);
  for (var i = detailsTags.length; i > 0; i--) {
    console.log((detailsTags)[i - 1]);
    var divDetails = document.createElement(newType);
    var attributes = detailsTags[i - 1].attributes;
    for (var o = 0; o < attributes.length; o++) {
      divDetails.setAttribute(attributes[o].name, attributes[o].value);
    }
    divDetails.setAttribute('oldType', oldType);
    divDetails.innerHTML = detailsTags[i - 1].innerHTML;
    detailsTags[i - 1].outerHTML = divDetails.outerHTML;
  }
}
if (!('open' in document.createElement('details'))) {
  var detailsTags = document.getElementsByTagName('summary');
  for (var i = 0; i < detailsTags.length; i++) {
    detailsTags[i].setAttribute('onclick', (detailsTags[i].getAttribute('onclick') ? detailsTags[i].getAttribute('onclick') + ';' : '') + "this.parentElement.toggleAttribute('open');");
  }
  replaceElementType('details', 'div');
  replaceElementType('summary', 'div');
}