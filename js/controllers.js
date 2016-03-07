espaApp.controller('mikromesaiesCtrl', function ($scope, $http,helpers) {
$scope.reverse = true;
$scope.tomeis=[];
$scope.proter=[];
$scope.epipeda=[];
$http.get('json/mikromesaies.json').success(function(data) {
 for(var key in data){
	$scope.tomeis.push(data[key].FIELD1);
	$scope.proter.push(data[key].FIELD8);
	$scope.epipeda.push(data[key].FIELD6);
	}
	
    $scope.fields = data;
  });
 helpers.sort($scope); 
 helpers.toggleActiveTab("mikromesaies");
});

espaApp.controller('neofueisCtrl', function ($scope, $http,helpers) {
$scope.reverse = true;
$scope.tomeis=[];
$scope.proter=[];
$scope.epipeda=[];
  $http.get('json/neofuhs_espa.json').success(function(data) {
 for(var key in data){
	$scope.tomeis.push(data[key].FIELD1);
	$scope.proter.push(data[key].FIELD8);
	$scope.epipeda.push(data[key].FIELD6);
	}
	
	
    $scope.fields = data;
  });
 helpers.sort($scope); 
  helpers.toggleActiveTab("neofueis");
});

espaApp.controller('ptuxiouxoiCtrl', function ($scope, $http,helpers) {
$scope.reverse = true;
$scope.tomeis=[];
$scope.proter=[];
  $http.get('json/ptuxiouxoi.json').success(function(data) {
 for(var key in data){
	$scope.tomeis.push(data[key].FIELD1);
	$scope.proter.push(data[key].FIELD8);
	}
	
	
	
    $scope.fields = data;
  });
 helpers.sort($scope); 
  helpers.toggleActiveTab("ptuxiouxoi");
});


espaApp.controller('touristikesCtrl', function ($scope, $http,helpers) {
$scope.reverse = true;
$scope.tomeis=[];
$scope.epipeda=[];
  $http.get('json/touristikes.json').success(function(data) {
  for(var key in data){
	$scope.tomeis.push(data[key].FIELD1);
	$scope.epipeda.push(data[key].FIELD3);
	}
	
	
    $scope.fields = data;
  });
 helpers.sort($scope); 
 helpers.toggleActiveTab("touristikes");
});
