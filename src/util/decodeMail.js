const encodedMail =
  '97|50|70|112|76|109|82|118|98|109|70|48|98|48|66|116|100|67|49|112|100|72|78|118|98|72|86|48|97|87|57|117|99|121|53|106|98|50|48|61';

function decodeMail() {
  const ascii = encodedMail.split('|');
  const intermediate = String.fromCharCode(...ascii);
  return atob(intermediate);
}

export default decodeMail;
