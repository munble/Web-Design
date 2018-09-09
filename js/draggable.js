$(function() {
    var homedrag = document.getElementsByClassName("homedrag");
    var target = document.getElementById("kek");
    var homekek = document.getElementsByClassName("homekek");
    var net250gr = document.getElementById("net250gr");
    var lastkek = 0;
    for (var i = 0; i < homedrag.length; i++) {
		homedrag[i].ondragstart = function(e) {
			e.dataTransfer.setData('id', this.id);
		};
        target.ondragover = function(e) {
            e.preventDefault();
        };
        target.ondrop = function(e) {
            e.preventDefault();
            $(".net250gr").fadeOut("slow");
            $("#homekek"+lastkek).fadeOut("fast");
            $("#home .container").prepend('<div class="bulut"></div>');
            var id = (e.dataTransfer.getData('id')).substr(8);
            $("#homedrag"+id).css({opacity:0});
            lastkek = id;
            openKek(id);
            /*$("#siparis-ver").css({zIndex:-10});
            $(".preload").animate({
                opacity:200,zIndex:10000},1000,"swing",function(){
                    $(this).css({opacity:0,zIndex:0});
                });*/
        };
	}
    
});
function openKek(id){
    setTimeout("openKekDelay('"+id+"')","1000");
}
function openKekDelay(id){
    $("#homedrag"+id).animate({opacity:1});
    $("#homekek"+id).fadeIn("slow");
    $("#siparis-ver").css({zIndex:1000});
}


