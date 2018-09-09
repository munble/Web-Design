(function() {
    var canvas1 = document.getElementById("canvas1");
    var canvas2 = document.getElementById("canvas2");
    var ctx1 = canvas1.getContext("2d");
    var ctx2 = canvas2.getContext("2d");
    var img1 = new Image();
    img1.src = "images/ikon1.png";
    img1.onload = function(){
        ctx1.drawImage(img1,0,0);
    }
    var img2 = new Image();
    img2.src = "images/ikon2.png";
    img2.onload = function(){
        ctx2.drawImage(img2,0,0);
    }
    
    var smile = document.getElementById("smile");
    var ctx3 = smile.getContext('2d');
    var img3 = new Image();
    img3.src = "images/kimPointer.png";
    img3.onload = function() {
        ctx3.drawImage(img3,0,0);
    }
 
})();