/*

GEREKLİ PAKETLER YÜKLENİYOR...

*/
var http = require('http');
var express = require('express');

var app = express();

app.set('port', 8080); // GİRİŞ PORTU AYARLANDI
app.set('views', __dirname + '/app/server/views'); // VIEW KLASÖRÜ TANITILDI
app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI
app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI

require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

/*

HTTP SERVER OLUŞTURULDU

*/
http.createServer(app).listen(app.get('port'), function(){
	console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
});

require("appdynamics").profile({
  controllerHostName: '<direccion de la controladora>’, 
  controllerPort: 9080, 
  controllerSslEnabled: true, // Set to true if controllerPort is SSL 
  accountName: ‘customer1’, 
  accountAccessKey: '<llave de acceso a appdynamics>’, 
//required 
 applicationName: ‘<Openshift Project Name>’, 
 tierName: ‘<Openshift Project Application Name>’, 
 nodeName: ‘Instance-’ 
});
