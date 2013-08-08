var xmpp = require('../lib/simple-xmpp');
var argv = process.argv;

xmpp.on('online', function() {
	console.log('Yes, I\'m connected!');
});

xmpp.on('chat', function(from, message) {
//	xmpp.send(from, 'echo: ' + message);
	
        console.log(new Date()+" >>("+from+')<<  |  message ' + message);

});

xmpp.on('error', function(err) {
	console.error(err);
});

xmpp.on('buddy', function(jid, state, statusText) {
	if(jid == argv[4])
		console.log(new Date()+"---------------%s is now '%s' (%s)", jid, state, statusText);
});

 function remover_espacos(str){
    r = "";
    for(i = 0; i < str.length; i++){
      if(str.charAt(i) != ' ')
        r += str.charAt(i);
   }
  return r;
  }


xmpp.connect({
    jid         : argv[2],
    password    : argv[3],
    host        : 'talk.google.com',
    host        : 'talk.google.com',
    port        : 5222
});


var msgs = [
	'cueki', 
	'Te amo tanto, preciso de vc pra sempre', 
	'Quero sempre estar bem com vc diulli',
	':)',
	'eu sei que vc vai ser a mulher que sempre sonhei',
	':( ... ESTOU COM SAUDADES',
	'preciso que seje você a pessoa que vai me fazer feliz', 
	'Nossa que saudades diulli, te amo',
	'cueki cueki cueki cueki',
	'Nossa como é bom lembrar de coisas nossa, memories, santa paulina, perna dormindo, celular debaixo do banco (caiu kkk), MacDonald batata, agora o parque, nossa é muito bom ter você diulli, fazer história, coisas lindas, TE AMO MUITO',
	'MIMIMIMIMI, PRECISO MUITO, NÃO CONSIGO FICAR SEM, SOU VICIADO ME VC, ESTOU COM MUITA VONTADE',
	':)', 
	'Vc é tudo pra mim', 
	'te amo muito ... vc é a mulher da minha vida'
	];

var cronJob = require('cron').CronJob;
new cronJob('5 5,8,12,17,30,32,44,51,55 * * * *', function(){
	var msg = msgs[Math.floor(Math.random()*msgs.length)];
	console.log(argv[4], msg);
	xmpp.send(argv[4], msg)
}, null, true, "America/Los_Angeles");


