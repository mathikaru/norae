var data = [
{
	"title": "Lemon",
	"lang": "jp",
	"num_tj": "28822",
	"artist": "米津玄師"
}
,
{
	"title": "Ref:rain",
	"artist": "Aimer",
	"lang": "jp",
	"num_tj": "28832"
}
,
{
	"title": "Wherever You Are",
	"lang": "jp",
	"num_tj": "27675",
	"artist": "ONE OK ROCK"
}
,
{
	"title": "さよならだけが人生だ",
	"artist": "伊東歌詞太郎",
	"title_ko": "이별만이 인생이다",
	"lang": "jp",
	"num_tj": "27995"
}
,
{
	"title": "だから僕は音楽を辞めた",
	"artist": "ヨルシカ",
	"title_ko": "그래서 나는 음악을 그만두었다",
	"lang": "jp",
	"num_tj": "68049"
}
,
{
	"title": "なんでもないや",
	"artist": "REDWIMPS",
	"title_ko": "아무것도 아니야",
	"lang": "jp",
	"num_tj": "27965"
}
,
{
	"title": "カタオモイ",
	"artist": "Aimer",
	"lang": "jp",
	"title_ko": "카타오모이",
	"num_tj": "28886"
}
,
{
	"title": "僕が死のうと思ったのは",
	"artist": "Amazarashi",
	"title_ko": "내가 죽으려고 생각한 것은",
	"lang": "jp",
	"num_tj": "28688"
}
,
{
	"title": "命に嫌われている",
	"artist": "カンザキイオリ",
	"title_ko": "생명에게 미움받고 있어",
	"lang": "jp",
	"num_tj": "68051"
}
,
{
	"title": "心做し",
	"artist": "蝶々P",
	"title_ko": "마음탓",
	"lang": "jp",
	"num_tj": "27906"
}
,
{
	"title": "打上花火",
	"title_ko": "쏘아올린 불꽃",
	"lang": "jp",
	"num_tj": "28750",
	"artist" : "米津玄師"
}
,
{
	"title": "言って。",
	"title_ko": "말해줘.",
	"artist": "ヨルシカ",
	"lang": "jp",
	"num_tj": "68078"
}
,
{
	"title": "노래방에서",
	"artist": "장범준",
	"lang": "ko",
	"num_tj": "53705"
}
,
{
	"title" : "한숨",
	"artist": "이하이",
	"lang" : "ko",
	"num_tj": "46165"
}

];
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
