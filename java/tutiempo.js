//USAMOS EL JSON DE LA API https://api.tutiempo.net/json/?lan=es&apid=z5G4zqqXzz4r3vS&lid=42833


function DrawWeatherTutiempo(data){
var htmld="",htmlh="",dhcach="",meses = new Array('-','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
htmld += '<div class="header"><h2>El tiempo en '+data.locality.name+'</h2><p>Pronóstico 7 días | El tiempo por Tutiempo.net</p></div>';
	
for(var k in data){
	if(k.indexOf("day")>-1){
	    var res = data[k].date.split("-");
		htmld += '<div class="daydata">';
		htmld += '<h3 class="date">'+res[2]+' de '+meses[res[1]]+' de '+res[0]+'</h3>';
		htmld += '<p class="it"><img alt="'+data[k].text+'" title="'+data[k].text+'" height="50" src="https://v5i.tutiempo.net/wi/01/50/'+data[k].icon+'.png" width="50" />'+data[k].temperature_max+'&deg;C<br />'+data[k].temperature_min+'&deg;C</p>';
		htmld += '<p class="oc">Humedad: '+data[k].humidity+'%<br /></p>';
		htmld += '</div>';
	}
}

document.getElementById("WidgetTutiempo").innerHTML = htmld;
}

function LoadJSONTuTiempo(){

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){

	if(this.readyState == 4 && this.status == 200)
	{var data = JSON.parse(this.responseText); 
	DrawWeatherTutiempo(data);
}};

xhttp.open("GET","https://api.tutiempo.net/json/?lan=es&apid=z5G4zqqXzz4r3vS&lid=42833",true);
xhttp.send();
}
LoadJSONTuTiempo();