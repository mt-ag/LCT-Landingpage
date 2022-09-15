const encodedMail =
  '83|50|70|112|76|107|82|118|98|109|70|48|98|48|66|116|100|67|49|104|90|121|53|106|98|50|48|61';

function decodeMail() {
  const ascii = encodedMail.split('|');
  const intermediate = String.fromCharCode(...ascii);
  return atob(intermediate);
}

export default decodeMail;
