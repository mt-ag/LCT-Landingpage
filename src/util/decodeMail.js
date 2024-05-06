const encodedMail =
  '97|50|70|112|76|109|82|118|98|109|70|48|98|48|66|111|101|87|70|117|90|67|53|106|98|50|48|61';


function decodeMail() {
  const ascii = encodedMail.split('|');
  const intermediate = String.fromCharCode(...ascii);
  return atob(intermediate);
}

export default decodeMail;
