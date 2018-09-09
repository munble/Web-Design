(function () {
	var num1 = document.getElementById('num1');
	var num2 = document.getElementById('num2');
	var result = document.getElementById('result');
	var worker = new Worker('js/worker.js');
    
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
   
    var submit = document.getElementById("submit");
    
    var flowers = document.getElementById("Flowers");
    var fruit = document.getElementById("Fruit");
    var macaron = document.getElementById("Macaron");
    var marshmallow = document.getElementById("Marshmallow");
    var meringue = document.getElementById("Meringue");
    
    var request = indexedDB.open('comeon',1);
    var db;   
    
    request.onsuccess = function(){
        db = this.result;
        var transaction = db.transaction(['ben'], 'readwrite');
        var store = transaction.objectStore('ben');
        var index = store.index('type');
        var rq = index.openCursor(); 
        rq.onsuccess = function(){
            var cursor = this.result;
            if(cursor){
                if(cursor.value.type == "FLOWERS")
                    {
                        flowers.innerHTML =  cursor.value.type + ' - ' +cursor.value.price + 'CNY';
                        flowers.value = cursor.value.price;
                    }
                   if(cursor.value.type == "FRUIT")
                    {
                        fruit.innerHTML =  cursor.value.type + ' - ' +cursor.value.price + 'CNY';
                        fruit.value = cursor.value.price;
                    }
                   if(cursor.value.type == "MACARON")
                    {
                        macaron.innerHTML =  cursor.value.type + ' - ' +cursor.value.price + 'CNY';
                        macaron.value = cursor.value.price;
                    }
                   if(cursor.value.type == "MARSHMALLOW")
                    {
                        marshmallow.innerHTML =  cursor.value.type + ' - ' +cursor.value.price + 'CNY';
                        marshmallow.value = cursor.value.price;
                    }
                   if(cursor.value.type == "MERINGUE")
                    {
                        meringue.innerHTML =  cursor.value.type + ' - ' +cursor.value.price + 'CNY';
                        meringue.value = cursor.value.price;
                    }
                 cursor.continue();
            }
        }
    };
    
    if(localStorage.getItem("name")){
        name.value = localStorage.getItem("name");
   }
    if(localStorage.getItem("phone")){
        phone.value = localStorage.getItem("phone");
    }
     if(localStorage.getItem("email")){
        email.value = localStorage.getItem("email");
    }
    
    submit.onclick = function(){
        localStorage.setItem("name",name.value);
        localStorage.setItem("phone",phone.value);
        localStorage.setItem("email",email.value);
        alert("Your cake is on the way!");
    }

	num1.onchange = function() {
		var x = {one: parseInt(num1.value), two: parseInt(num2.value)};
        console.log(x);
		worker.postMessage(x);
		worker.onmessage = function(e) {
            console.log(e.data);
			result.value = e.data;
		};
	};
	num2.onchange = function() {
		var x = {one: parseInt(num1.value), two: parseInt(num2.value)};
        console.log(x);
		worker.postMessage(x);
		worker.onmessage = function(e) {
			result.value = e.data;
		};
	};
    

})(); 