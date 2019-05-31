
//Selecciones

//Ejercicio 1
    $("div.module");

//Ejercicio 2 
    $(":hidden").length;

//Ejericicio 3
    $("table tr:odd");
//Recorrer el DOM

//Ejercicio 1
    $("input").closest("form").addClass("nuevaclase");

//Ejercicio 2
    $("#myList li.current").removeClass("current").next("#myList li").addClass("current");

//Ejercicio 3
    $("#slideshow li").first().addClass("current").nextAll().addClass("disabled");

//Manipulación  
var nuevos = [''], $myList = $("#myList");
for (var i = 8; i < 13; i++){
nuevos.push('<li>List item ' + i + '</li>');
}
$myList.append(nuevos.join(''));
//Ejercicio 2
    $("#myList li:even").remove();

//Ejercicio 3
    $("div.module:last").append($("<h2>Jonathan Rajo</h2>")).append($("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"));
//Ejercicio 4
    $("select [name= dia]").append("<option value = 'wednesday'>Wednesday</option>");
//Ejercicio 5
    $("div.module:last").append("div.module").append("img").clone().appendTo("div.module");
