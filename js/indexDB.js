(function(){
    var select = document.getElementById("select");
    var option = document.getElementsByTagName("option");
    var price = document.getElementById("price");
    var modify = document.getElementById('modify');
	var query = document.getElementById('query');
    
    var request = indexedDB.open('class', 1);
	var db;
    request.onupgradeneeded = function() {
		db = this.result;
		var store = db.createObjectStore('decoration', {keyPath: 'type'});
		store.createIndex('type', 'type', {unqiue: true});
		store.createIndex('price', 'price', {unqiue: false});
	};

	request.onsuccess = function() {
		db = this.result;
        var transaction = db.transaction(['decoration'], 'readwrite');
        var store = transaction.objectStore('decoration');
        store.add({"type":"Flowers","price":"20"});
        store.add({"type":"Fruit","price":"15"});
        store.add({"type":"Macaron","price":"4"});
        store.add({"type":"Marshmallow","price":"2"});
        store.add({"type":"Meringue","price":"2"});
        modify.onclick = function() {
            var transaction = db.transaction(['decoration'], 'readwrite');
            var store = transaction.objectStore('decoration');
            store.put({ type: select.value, price: price.value});
        };
        query.onclick = function() {
            var transaction = db.transaction(['decoration'], 'readwrite');
            var store = transaction.objectStore('decoration');
            var list = document.getElementById(select.value);
            list.innerHTML = store.value.type + ' - ' +
            store.value.price + 'CNY';
        };	
	};
})();