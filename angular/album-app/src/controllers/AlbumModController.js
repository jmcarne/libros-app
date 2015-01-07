/**
* AlbumModController
* Controlador de modificacion de album
* $http - 
* $routeParams - parámetros de la ruta
*/
function AlbumModController($scope, $http, $routeParams) {
  $scope.id = $routeParams.albumId;
  $scope.guardame = function(){
	//hacer algo para guardar en BD
	alert("Guardar");
  }
  $http.get('data/album'+$scope.id+'.json').success(function(data) {
	  $scope.album = data[0];
  });
 
}