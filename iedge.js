if (!('open' in document.createElement('details'))) {
  var detailsTags = document.getElementsByTagName('summary');
  for (var i = 0; i < detailsTags.length; i++) {
    detailsTags[i].setAttribute('onclick', (detailsTags[i].getAttribute('onclick') ? detailsTags[i].getAttribute('onclick') + ';' : '') + "toggleDetails(this);");
  }
}
function toggleDetails(element) {
  if(element.parentElement.hasAttribute('open')) {
    element.parentElement.removeAttribute('open');
  }
  else {
    element.parentElement.setAttribute('open', '');
  }
}