/**
* AlbumDetailController
* Controlador de la ficha del album
* $scope - ámbito
* $http - 
* $routeParams - parámetros de la ruta
*/
function AlbumDetailController($scope, $http, $routeParams) {
  $scope.id = $routeParams.albumId;

  $http.get('data/album'+$scope.id+'.json').success(function(data) {
	  $scope.album = data[0];
  });
 
}