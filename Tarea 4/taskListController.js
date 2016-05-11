taskManager.controller('taskListController', function($scope, getTasks){
	$scope.tasks=[];
	//Getting mock data
	getTasks.mock().then(function(response){
		$scope.tasks = response.data;
		$scope.$apply();
	});
	
	$scope.activeTask = null;
	
	$scope.setTaskActive = function(t){
		if($scope.activeTask == t){
			$scope.activeTask = null;
		}
		else $scope.activeTask = t;
	}
	
	$scope.completeActiveTask = function(){
		$scope.activeTask.done = true;
	}
	
	$scope.removeActiveTask = function(){
		var index = $scope.tasks.indexOf($scope.activeTask);
		if(index != -1){
			$scope.tasks.splice(index, 1);
		}
	}
	
	$scope.createNewTask = function(){
		var newTask = {name: 'Nueva Tarea', comment: ''};
		$scope.tasks.push(newTask);
		$scope.activeTask = newTask;
	}
	
	$scope.removeCompletedTasks = function(){
		$scope.tasks = $scope.tasks.filter(function(value){
			return !value.done;
		});
	}
});