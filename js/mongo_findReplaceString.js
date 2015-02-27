var regexp = new RegExp(".*table.*,.*p.*\{.*\r?\n?.*margin-left[ ]*:[ ]*auto[ ]*;.*\r?\n?.*margin-right[ ]*:[ ]*auto[ ]*;.*\r?\n?.*\}","g")
//var regexp = new RegExp("class.*boxsha","g")

var collectionNames = db.getCollectionNames();
var collPasses = ["ids", "system.indexes","uploads.chunks","uploads.files","SystemLog","SystemPushNotification"];
var cols = [];

for(var idx in collectionNames){
	var collectionName=collectionNames[idx];
	if (collPasses.indexOf(collectionName)>=0) {
		continue;
	}
	var collection = db.getCollection(collectionName);
	var rows = collection.find();
	var colChange = false;
	while(rows.hasNext()){
		var row = rows.next();
		var change = false;
		for(var key in row){
			if(typeof(row[key]) == "string"){
				if(regexp.test(row[key])) {
					print("collection: " + collection + " id: " + row._id + " field: " +key)
					//print(row[key].match(regexp))
					change = true;
					row[key] = row[key].replace(regexp,'');
				}
			}
		}
		if (change){
			//collection.save(row);
			colChange = true;
		}
	}
	if (colChange){
		cols.push(collectionName);
	}
}

print ("cols changed: " + cols);
