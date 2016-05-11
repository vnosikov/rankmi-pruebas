taskManager.service('getTasks', function(){
	
	return {
		//One day we'll have a $http request here
		mock: function(){
			return new Promise(function(resolve, reject){
				resolve({data:[
					{
						name: 'EJERCICIO 2',
						comment: 'Usando JAVASCRIPT Crear un algoritmo que logre resolver, si se envía una coordenada de tipo "excel", ejemplo "ZA" nos devuelva el numero de columna a la que pertenece, ejemplo: Input: Z // Output: 26 Input: AA // Output: 27 Input: AB // Output: 28',
						done: false
					},
					{
						name: 'EJERCICIO 3',
						comment: 'Usando JAVASCRIPT Crear un algoritmo al cual se le deba ingresar un array de n números enteros, más un numero de resultado, ejemplo: Input: numbers={2, 7, 11, 15}, target=9 Este algoritmo debe ser capaz de encontrar dos números dentro del array que sumados sean igual al numero target, obviamente el algoritmo no puede ser un for que vaya sumando todos los números de uno en uno, debe tener mayor inteligencia. El resultado debe indicar la posición del array de los números que sumados dan el resultado esperado, ejemplo: Output: index1=1, index2=2',
						done: true
					},
					{
						name: 'Ejercicio 4',
						comment: 'Crear una aplicación sencilla en angular que permita crear una lista de tareas, agregarle comentarios y además marcar cuando las tareas estén hechas. Evitar usar "un solo script" para todo. Separar en servicios, controladores y vistas.',
						done: false
					}
				]});
			});
		}
	}
});