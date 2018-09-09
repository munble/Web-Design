(function(){
    var comeon = document.getElementById("showlist");
    var choose= document.getElementById("select");
    var price = document.getElementById("price");

    var add = document.getElementById("modify");
    var show = document.getElementById("query");
    
    var request = indexedDB.open('comeon',1);
    var db;

    var flowers = document.getElementById("FLOWERS");
    var fruit = document.getElementById("FRUIT");
    var macaron = document.getElementById("MACARON");
    var marshmallow = document.getElementById("MARSHMALLOW");
    var meringue = document.getElementById("MERINGUE");
    
  
    request.onsuccess = function(){
        db = this.result;
        var transaction = db.transaction(['ben'], 'readwrite');
        var store = transaction.objectStore('ben');
        var index = store.index('type');
        var rq = index.openCursor(); 
        rq.onsuccess = function(){
            var cursor = this.result;
            if(cursor){
            /*    if(cursor.value.type == "FLOWERS")
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
                    }   */
                if(cursor.value.type == choose.value)
                {
               list.innerHTML = cursor.value.type + ' - ' +cursor.value.price + 'CNY';
				}
                 cursor.continue();
            }
        }
    };
    
    request.onupgradeneeded = function() {
		db = this.result;
		var store = db.createObjectStore('ben', {keyPath: 'type'});
		store.createIndex('type', 'type', {unique: true});
		store.createIndex('price', 'price', {unqiue: false});
       
	};
    
    request.onsuccess = function(){
        db = this.result;
        
        add.onclick = function(){
        var transaction = db.transaction(['ben'], 'readwrite');
        var store = transaction.objectStore('ben');
        var list = document.getElementById(choose.value); 
        store.put({type: choose.value,price:price.value});    
            
        var index = store.index('type');
        var rq = index.openCursor(); 
           
            rq.onsuccess = function(){
            var cursor = this.result;
            if(cursor){
                if(cursor.value.type == choose.value)
                {
               list.innerHTML = cursor.value.type + ' - ' +cursor.value.price + 'CNY';
				}
                cursor.continue();
            }
        }   
                
        };
        

    };
    
})();