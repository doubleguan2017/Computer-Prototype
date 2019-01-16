var selectPosition="Choose position";
var selectHurt="Choose ailment";
function getPositionValue()
{
	selectPosition = document.getElementById("position").value;
	console.log(selectPosition);
}

function getHurtValue(){
	selectHurt = document.getElementById("hurt").value;
	console.log(selectHurt);
}

function check(){
if(selectPosition == "Choose position" && selectHurt == "Choose ailment"){
	alert("Please Choose your Boday Position & Ailment");
}

else if(selectPosition == "Choose position"){
	alert("Please Choose Your Body Position");
}

else if(selectHurt == "Choose ailment"){
	alert("Please Choose Your Ailment");
}
else if(selectPosition=="" || selectHurt==""){
	alert("Please Make a Choose");
}
else {
	document.getElementById("findinfo").href ="first_aid_info_brokenleg.html";
}
}

