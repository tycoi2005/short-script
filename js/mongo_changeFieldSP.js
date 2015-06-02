var rows = db.SpecialAttack.find();
while(rows.hasNext()){
	var row = rows.next();
	var change = true;
	
	row.atkUpFrom = row.atkUp;
	row.atkUpTo = row.atkUp;
	print(tojson(row));
	if (change){
		db.SpecialAttack.save(row);
	}
}