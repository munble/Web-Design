(function() {
    
    var axis = document.getElementById("time-axis");
    var ctx = axis.getContext("2d");
        
        ctx.strokeStyle = "#9f857c";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(400,100);
        ctx.lineTo(1350,100);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(20,100);
        ctx.quadraticCurveTo(20,135,400,100);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(20,100);
        ctx.quadraticCurveTo(20,180,400,100);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(20,100);
        ctx.quadraticCurveTo(20,65,400,100);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(20,100);
        ctx.quadraticCurveTo(20,20,400,100);
        ctx.stroke();
 
})();