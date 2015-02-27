use dbgame;
var changes = cat("/tmp/rdev1").split("\n")
var regexp  = new RegExp("<style .*type.*=.*\"text/css\".*>")
var replaceString = "<style type=\"text/css\">\r\ntable,p,div{margin-left:auto;margin-right:auto;}\r\n"
for (var i in changes) {
	var change = changes[i]
	if (change != "") {
		print (change)
		var splits = change.split(":")
		var collectionName = splits[0]
		var id = parseInt(splits[1])
		var key = splits[2]
		var collection = db.getCollection(collectionName)
		var row = collection.findOne({"_id":id})
		row[key] = row[key].replace(regexp,replaceString);
		collection.save(row)	
	}
}