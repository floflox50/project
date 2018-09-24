var httpServer = require('http');
var urlServer = require('url');


server = httpServer.createServer(function (req ,res ) {

  var page = urlServer.parse(req.url).pathname;
  var entete
  var message
  console.log(page);
  if(page !== '/' && page !== '/lien1' && page!=='/lien2'&& page!=='/lien3') {
    entete = 400
    message="Oups la page n'existe pas"
  }

    else {
      entete = 200
      message="Super la page fonctionne mieux"
    }
    let html='<!DOCTYPE html>'
    html += '<html>';
    html += '<head>';
    html += '<title>NodeJS</title>';
    html += '<meta charset="utf8"/>';
    html += '</head>';
    html += '<body>';
    html += '<h1>'+page+'</h1>';
    html += '<h1>'+message+'</h1>';
    html += '<ul>';
    html += '<li><a href="/lien1">Lien 1</a></li>';
    html += '<li><a href="/lien2">Lien 2</a></li>';
    html += '<li><a href="/lien3">Lien 3</a></li>';
    html += '</ul>';
    html += '</body>';
    html += '</html>';
    res.writeHead(entete,{'Content-Type':"text/html"});
    res.write(html);
    res.end();
});



server.listen(9999);
