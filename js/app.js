//creamos nuestro modulo llamado app
var app = angular.module("app", []);

//hacemos el ruteo de nuestra aplicación
app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "templates/home/index.html"
	})
	//esta es la forma de decirle a angular que vamos a pasar una variable por la url
	
	.when('/students/index', {
		templateUrl: "templates/estudiantes/index.html"
	})
	.when('/info/:id', {
      templateUrl : "templates/estudiantes/info.html",
     controller : "infoController"
    })
	.when("/add", {
		title: 'Añadir estudiante',
		templateUrl : "templates/estudiantes/add.html",
		controller : "addController"
	})
	.when("/edit/:id", {
		title: 'Editar estudiante',
		templateUrl : "templates/estudiantes/edit.html",
		controller : "editController"
	})
 	.when("/remove/:id", {
 		title: 'Eliminar estudiante',
 		templateUrl : "templates/estudiantes/remove.html",
 		controller : "removeController"
 	})

//-------------------- Routes Courses ----------------------
 	.when("/courses/index", {
 		title: 'lista de cursos',
 		templateUrl: "templates/cursos/index.html"
 	})

 	.when("/course/info/:id", {
 		title: 'info curso',
 		templateUrl: "templates/cursos/info.html",
 		controller: "courseInfoController"
 	})

 	.when("/course/add", {
		title: 'Añadir curso',
		templateUrl : "templates/cursos/add.html",
		controller : "courseAddController"
	})
	.when("/course/edit/:id", {
		title: 'Editar estudiante',
		templateUrl : "templates/cursos/edit.html",
		controller : "courseEditController"
	})
 	.when("/course/remove/:id", {
 		title: 'Eliminar estudiante',
 		templateUrl : "templates/cursos/remove.html",
 		controller : "courseRemoveController"
 	})


 	//--------------------------- Routes Teachers ------------------

 	.when("/teachers/index", {
 		title: 'Lista de docentes',
 		templateUrl: "templates/docentes/index.html"
 	})

 	.when("/teacher/info/:id", {
 		title: 'info docente',
 		templateUrl: "templates/docentes/info.html",
 		controller: "teacherInfoController"
 	})

 	.when("/teacher/add", {
		title: 'Añadir docente',
		templateUrl : "templates/docentes/add.html",
		controller : "teacherAddController"
	})
	.when("/teacher/edit/:id", {
		title: 'Editar docente',
		templateUrl : "templates/docentes/edit.html",
		controller : "teacherEditController"
	})
 	.when("/teacher/remove/:id", {
 		title: 'Eliminar docente',
 		templateUrl : "templates/docentes/remove.html",
 		controller : "teacherRemoveController"
 	})

 	.otherwise({ redirectTo : "/"})


})
