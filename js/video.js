(function(){
    var a = document.getElementById("a");
    var video = document.getElementById("brownie");
    var button = document.getElementsByClassName("button");
    var myFunc = [];
    myFunc[0] = function() {
		video.play();
	};
	myFunc[1] = function() {
		video.pause();
		clearInterval(Interval);
	};
	myFunc[2] = function() {
		video.currentTime = 0;
		clearInterval(Interval);
	};
	myFunc[3] = function() {
		video.currentTime += 2;
	};
	myFunc[4] = function() {
		video.currentTime -= 2;
	};
    
    for(var i = 0;i<button.length;i++){
        button[i].addEventListener('click', myFunc[i]);
    }
})();