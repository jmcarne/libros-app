angular.module('app', []).

  //definimos las rutas de la 'app'
  config(['$routeProvider', function($routes) {
  
  $routes.
      when('/albums', {
		  templateUrl: 'src/views/albums-list.html',
		  controller: AlbumsListController
		  }).
	  
	  //mediante dos puntos (:) definimos un parámetro
      when('/album/:albumId', {
		  templateUrl: 'src/views/album.html',
		  controller: AlbumDetailController
		  }).
	 
	 
	  //CRUD
	  when('/add_album', {
		  templateUrl: 'src/views/add_album.html',
		  controller: AlbumAddController
		  }).
	  when('/mod_album/:albumId', {
		  templateUrl: 'src/views/mod_album.html',
		  controller: AlbumModController
		  }).
	 
	  //cualquier ruta no definida  
      otherwise({
		  redirectTo: '/albums'});

}]);