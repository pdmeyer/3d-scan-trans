inlets = 1;
autowatch = 1;

var theRcvs = [];
var thePrepends = [];
var p = this.patcher;
var theUdpSend = p.getnamed("ctrl-out");

function makethem() {
	var a = arrayfromargs(arguments);
	var varsix = 0;
	var oscix = a.length/2;
	for (var i = 0; i < oscix; i++) {
		var j = i + oscix
		var rcv = p.newdefault(9, 23+i*23,"r", a[i]);
		theRcvs.push(rcv);
		var prepend = p.newdefault(134, 23+i*23,"prepend", a[j]);
		thePrepends.push(prepend);
		p.connect(rcv,0,prepend,0);
		p.connect(prepend,0,theUdpSend,0);
	}
}

function clear() {
	for (var i = 0; i < theRcvs.length; i++) {
		p.remove(theRcvs[i]);
		p.remove(thePrepends[i]);
	}
	thePrepends = [];
	theRcvs = [];
}