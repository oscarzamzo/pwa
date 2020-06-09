//Service Worker 

//if("serviceWorker" in navigator){
if("serviceWorker" in navigator){
	console.log("Puedes usar Service Worker");

	//navigator.serviceWorker.register("./js/ServicioWorker.js")
	navigator.serviceWorker.register("sw.js")
	.then(res=> console.log("ServiceWorker cargado correctamente",res))
	.catch(err=> console.log("No se pudo cargar el ServiceWorker",err))
}else{
	console.log("No puedes usar Service Worker")

}


$(document).ready(function(){
	/*alert("Hola Mundo...!!");*/
	$("#menu a").click(function(e){
		e.preventDefault();

		//console.log($("#servicios").offset().top);
		//Suabizar Scroll
		$("html, body").animate({
			scrollTop:$($(this).attr("href")).offset().top
		});

		return false;
	});


//*******   MODAL  ********
function showModal() {
	console.log("ShowModal 1");
  document.getElementById('openModal').style.display = 'block';
  console.log("ShowModal 2");
}

function CloseModal() {
	console.log("CloseModal 1");
  document.getElementById('openModal').style.display = 'none';
  console.log("CloseModal 2");
}

});


