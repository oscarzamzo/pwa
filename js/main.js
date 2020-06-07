//Service Worker 

//if("serviceWorker" in navigator){
if("serviceWorker" in navigator){
	console.log("Puedes usar Service Worker");

	//navigator.serviceWorker.register("./js/ServicioWorker.js")
	navigator.serviceWorker.register("./js/sw.js")
	.then(res=> console.log("ServiceWorker cargado correctamente",res))
	.catch(err=> console.log("No se pudo cargar el ServiceWorker",err))
}else{
	console.log("No puedes usar Service Worker")

}

$(".abrir").on("dblclick", function() {

  $(".modal").modal("show");

});

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


});

$(document).ready(function(e) {
    var mozillaPresente = false,
        mozilla = (function detectarNavegador(navegador) {
        if(navegador.indexOf("Firefox") != -1 ) {
            mozillaPresente = true;
        }   
    })(navigator.userAgent);
    function darEfecto(efecto) {
        el = $('.cajainterna');
        el.addClass(efecto);
        el.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
            el.removeClass(efecto);
        });
    }
    function mostrar(e) {
        $(".cajaexterna").show();
        darEfecto("bounceIn");      
    }
    function ocultar() {
        $(".cajaexterna").fadeOut("fast", function() {
            if(mozillaPresente) {
            setTimeout(function() {
                $(".cajainterna").removeClass("bounceIn");
            }, 5);
        }
        });         
    }
    $("a.mostrarmodal").click(mostrar);
    $("a.cerrarmodal").click(ocultar);
}); 