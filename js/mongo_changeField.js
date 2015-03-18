var collectionNames = ["RewardByDamage","CompositeSuperQueen","RewardTeamSuperQueenEvent","SuperQueenEventRank"];
var rewardFields = ["rewardItems","rewardCards"]

collectionNames.forEach(function(collectionName){
	var collection = db.getCollection(collectionName);
	var rows = collection.find();
	var colChange = false;
	while(rows.hasNext()){
		var row = rows.next();
		var change = false;
		
		rewardFields.forEach(function(rewardField){
			if (row[rewardField]==null || row[rewardField].length<=0) {
				return;
			}
			var rewards = row[rewardField];
			for (idx in rewards){
				rewards[idx].num = rewards[idx].probability
				change = true;
			}
			if (change) {
				print (rewards);
			}
		});

		if (change){
			//collection.save(row);
		}
	}
});