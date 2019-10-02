function search(){
	var input = document.getElementById('searchInput').value;
	var table = document.getElementById('songTable');
	var tr = table.getElementsByTagName('tr');
	
	for (var i=0;i<tr.length;i++){
		var td = tr[i].getElementsByTagName('td')[0];
		if (td){
			var txtValue = td.textContent || td.innerText;
			txtValue = txtValue.replace(/\s+/g, '').toLowerCase();
			if ((txtValue.includes(input.replace(/\s+/g, '').toLowerCase()))){
				tr[i].style.display="";
			}
			else{
				tr[i].style.display="none";
			}
		}
	}

}
