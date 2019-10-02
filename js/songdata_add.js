var table = document.getElementById('songTable');

for (var i=0;i < data.length; i++){
	var NewRow = table.insertRow(-1);
	var newcell0 = NewRow.insertCell(0);
	var newcell1 = NewRow.insertCell(1);
	var newcell2 = NewRow.insertCell(2);
	var newcell3 = NewRow.insertCell(3);
	if ("title_ko" in data[i]){
		newcell0.innerHTML = data[i]["title_ko"] + data[i]["title"]
	}
	else newcell0.innerHTML = data[i]["title"];
	newcell1.innerHTML = data[i]["artist"];
	if ("num_ky" in data[i]) newcell2.innerHTML = data[i]["num_ky"];
	if ("num_tj" in data[i]) newcell3.innerHTML = data[i]["num_tj"];
}
