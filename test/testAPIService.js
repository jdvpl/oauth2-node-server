module.exports = {
  helloWorld: helloWorld,
  saitama: saitama,
};

function helloWorld(req, res) {
  res.send("Hello World OAuth2!");
}
function saitama(req, res) {
  res.send("Hello saitama OAuth2!");
}