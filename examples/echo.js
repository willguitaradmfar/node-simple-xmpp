/**

	The MIT License
	
	Copyright (c) 2011 Arunoda Susiripala
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

 */

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
