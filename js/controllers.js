app.controller("appController", function appController($scope){
	//añadimos estudiantes por defecto
	$scope.estudiantes = [
    {
      ide: "12345",
      nombre: "Luis",
      apellidos: "martinez",
      genero: "masculino"
    },
    {
      ide: "1234",
      nombre: "Pepito",
      apellidos: "topipe",
      genero: "masculino"
    }
  ]

  $scope.cursos = [
    {
      codigo: "001",
      nombre: "Desarrollo web",
      observaciones: "Angularjs"
    },
    {
      codigo: "002",
      nombre: "Api restfull",
      observaciones: "http codes"
    }

  ]

  $scope.docentes = [
    {
      ide: "0010",
      nombre: "Luis",
      apellidos: "Murillo",
      genero: "masculino"
    },
    {
      ide: "0020",
      nombre: "Alberto",
      apellidos: "Martinez",
      genero: "masculino"
    }
  ]

})

//---------------------------------Controllers estudiantes------------------------
//route params es para identificar los segmentos de la url
app.controller("infoController", function infoController($scope,$routeParams){
	$scope.estudiante = $scope.estudiantes[$routeParams.id];
});

//creamos el controlador addController para guardar estudiantes nuevos con push
app.controller("addController", function addController($scope,$location){
	$scope.textButton = "Añadir un nuevo estudiante";
	$scope.estudiante = {};
	$scope.newUser = function(){
		$scope.estudiantes.push($scope.estudiante);
		$location.url("/");
	}
});

app.controller("editController", function editController($scope,$routeParams,$location){
	//obtenemos el estudiante a editar con routeParams
	$scope.textButton = "Editar estudiante";
	$scope.estudiante = $scope.estudiantes[$routeParams.id];
	$scope.editUser = function(){
		//actualizamos la información del estudiante con la id que lleva $routeParams
		$scope.estudiantes[$routeParams.id] = $scope.estudiante;
		$location.url("/");
	}
});

//eliminamos el estudiante dependiendo de su id
app.controller("removeController", function removeController($scope,$routeParams,$location){
	$scope.estudiante = $scope.estudiantes[$routeParams.id];
	$scope.removeUser = function(){
		//con splice  eliminamos un estudiante del array estudiantes, en este caso le decimos que debe eliminar 
		//el que tenga el id que le pasamos con $routeParams, y con el 1, le decimos que sólo 
		//debe eliminar 1, la función splice, como primer parámetro necesita la posición, que en este caso
		//es la id, y el segundo debe ser el número de elementos a eliminar, cabe decir que splice tiene
		//más variantes, y que sirve para añadir y eliminar elementos en un array, pero eso para otro momento
		$scope.estudiantes.splice($routeParams.id, 1);
		$location.url("/");
	}
});

//------------------------------------- controllers Cursos ----------------------//

app.controller("courseInfoController", function courseInfoController($scope,$routeParams){
  $scope.curso = $scope.cursos[$routeParams.id];
});

app.controller("courseAddController", function courseAddController($scope,$location){
  $scope.textButton = "Añadir un nuevo curso";
  $scope.curso = {};
  $scope.newCourse = function(){
    $scope.cursos.push($scope.curso);
    $location.url("/courses/index");
  }
});

app.controller("courseEditController", function courseEditController($scope,$routeParams,$location){
  $scope.textButton = "Editar Curso";
  $scope.curso = $scope.cursos[$routeParams.id];
  $scope.editCourse = function(){
    $scope.cursos[$routeParams.id] = $scope.curso;
    $location.url("/courses/index");
  }
});

app.controller("courseRemoveController", function courseRemoveController($scope,$routeParams,$location){
  $scope.curso = $scope.cursos[$routeParams.id];
  $scope.removeCourse = function(){
    $scope.cursos.splice($routeParams.id, 1);
    $location.url("/courses/index");
  }
});

//----------------------------- controllers Docentes --------------------------

app.controller("teacherInfoController", function teacherInfoController($scope,$routeParams){
  $scope.docente = $scope.docentes[$routeParams.id];
});

app.controller("teacherAddController", function teacherAddController($scope,$location){
  $scope.textButton = "Añadir un nuevo docente";
  $scope.docente = {};
  $scope.newTeacher = function(){
    $scope.docentes.push($scope.docente);
    $location.url("/teachers/index");
  }
});

app.controller("teacherEditController", function teacherEditController($scope,$routeParams,$location){
  $scope.textButton = "Editar Docente";
  $scope.docente = $scope.docentes[$routeParams.id];
  $scope.editTeacher = function(){
    $scope.docentes[$routeParams.id] = $scope.docente;
    $location.url("/teachers/index");
  }
});

app.controller("teacherRemoveController", function teacherRemoveController($scope,$routeParams,$location){
  $scope.docente = $scope.docentes[$routeParams.id];
  $scope.removeTeacher = function(){
    $scope.docentes.splice($routeParams.id, 1);
    $location.url("/tearchers/index");
  }
});

