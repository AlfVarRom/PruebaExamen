angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newLibro = {};
	$scope.libros = {};
	$scope.selected = false;


	//GET LISTA
	$http.get('http://localhost:3000/libros/').success(function(data) {
		$scope.libros = data;
		$scope.bloquear=false;
		console.log(data);
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	//DELETE element
	$scope.borrar = function(newLibro) {
		$http.delete('http://localhost:3000/libro/' + $scope.newLibro._id)
			.success(function(data) {
				//Borramos los datos añadidos en los imput boxes
				$scope.newLibro = {};
				$scope.selected = false;
				$scope.libros = null;
				$scope.bloquear=false;

				$http.get('http://localhost:3000/libros/').success(function(data) {
					$scope.libros = data;
				})
					.error(function(data) {
						console.log('Error: ' + data);
					});

			})
			.error(function(data) {
				console.log('Error: ' + data);
				window.alert('Error:' + data);
			});
	};


	//POST LISTA
	$scope.registrar = function() {
		$http.post('http://localhost:3000/libro/', $scope.newLibro)
		.success(function(data) {
				$scope.newLibro = {};
				$scope.libros.push(data);
				console.log(data);
				$scope.bloquear=false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
			window.alert('Error: ' + data);
		});
	};

	//modificar
	$scope.modificar = function(newLibro) {
		$http.put('http://localhost:3000/libro/' + $scope.newLibro._id, $scope.newLibro)
		.success(function(data) {
				$scope.newLibro = {}; // Borramos los datos del formulario
				$scope.libros = data;
				$scope.selected = false;
				$scope.bloquear=false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
			window.alert('Error:' + data);
		});
	};



	// Función para coger el objeto seleccionado en la tabla
	$scope.selectLibro = function(libro) {
		$scope.newLibro = libro;
		$scope.selected = true;
		$scope.bloquear=true;
		console.log($scope.newLibro, $scope.selected);
	};
}