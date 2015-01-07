/**
* AlbumsListController
* Controlador del listado de albums
*/
function AlbumsListController($scope, $http) {
  $http.get('data/albums.json').success(function(data) {
	$scope.albums = data;
  });
  
  //selecciona el desplegable y ordena automaticamente, variable definida en la vista con ng-model
  $scope.orderField = "titulo";
  $scope.orderReverse = "false";
}