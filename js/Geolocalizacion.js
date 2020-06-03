function fnGeolocalizacion (){
	var output = document.getElementById('maps');
	if(navigator.geolocation)
	{
		output.innerHTML="<p> tu navegador si soporta Geolocalización</p>"
	}
	navigator.geolocation.getCurrentPosition(localizacion,error);
}
function error(){
	output.innerHTML="<p> No se pudo obtener tu  Geolocalización</p>";
}
//AIzaSyBUkAGfh2TVN211KEYq66UZBcjKhJDvtB0
//obtenemos la longitud y latitud
function localizacion(posicion){
	var output = document.getElementById('maps');
	console.log(posicion);
	var latitud = posicion.coords.latitude;
	var longitud = posicion.coords.longitude;
	var imgURL="https://maps.googleapis.com/maps/api/staticmap?center=" + latitud + ","+ longitud +
				"&size=600x300&markers=color:blue%7C" + latitud + "," +longitud +
				"&key=AIzaSyARPPKKoDn38JhLoUun5rvZwoab46jNMS0";

	output.innerHTML="<img src='" +imgURL + "'>";
//"https://maps.googleapis.com/maps/api/js?key=AIzaSyBUkAGfh2TVN211KEYq66UZBcjKhJDvtB0
	console.log(latitud,longitud)
	//output.innerHTML="<p><br>Latitud: "+ latitud + "<br> Longitud: " + longitud + "</p>"
}