//Asignan nombre y version de la cache

const CACHE_NAME="V2_cache_Rentas_y_Rentas_sw2";

// Ficheros a cachear en las aplicacion parece que este no es
var urlsToCache=[
	'../',
	'../css/estilos.css',
	'../img/favicon.png'/*,
	'./img/1.png',
	'./img/2.png',
	'./img/3.png',
	'./img/4.png',
	'./img/5.png',
	'./img/6.png',
	'./img/facebook.png',
	'./img/twitter.png',
	'./img/instagram.png',
	'./img/favicon-1024.png',
	'./img/favicon-512.png',
	'./img/favicon-384.png',
	'./img/favicon-256.png',
	'./img/favicon-192.png',
	'./img/favicon-128.png',
	'./img/favicon-96.png',
	'./img/favicon-64.png',
	'./img/favicon-32.png',
	'./img/favicon-16.png'*/
];

//Evento install
//Instalacion de ServiWorker y guardar en cache los recuroso del serviworker
self.addEventListener("install", e => {
	e.waitUntil(
			caches.open(CACHE_NAME)
				.then(cache => {					
					return cache.addAll(urlsToCache)
							.then(()=>{
								self.skipWaiting();
							})											
				})
				.catch(err => {
					console.log("No se a registrado ninguna cache",err);
				})
		);
});


//Evento activate
// Que la app funcione sin conexion
self.addEventListener("activate", e=>{
	const chachewhitelist=[CACHE_NAME];

	e.waitUntil(
			caches.keys()
			.then(cacheNames => {
				return Promise.all(
					cacheNames.map(cacheNames => {
						if (chachewhitelist.indexOf(cacheNames)=== -1){
							//Borrar elementos que no se necesitan
							return caches.delete(cacheNames);
						}
					})
					)
			})
			.then(()=>{
				// Activar cache
				self.clients.claim();
			})
		);
});

//Evento fetch
self.addEventListener("fetch", e=>{
	e.respondWith(
		caches.match(e.request)
				.then(res => {
					if(res){
						//Debuelvo los datos de la cache
						return res;
					}

					return fetch(e.request);
				})
		);
});