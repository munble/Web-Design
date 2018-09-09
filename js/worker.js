onmessage = function(e) {
	postMessage(e.data.one + e.data.two);
    console.log(e.data.one);
    console.log(e.data.two);
};
