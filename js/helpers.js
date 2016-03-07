espaApp.service('helpers', function () {
	return{
		toggleActiveTab:function (location){
$('.nav-tabs a').parents('li').removeClass('active');
$('.nav-tabs a[href="#/'+location+'"]').parents('li').addClass('active');	
		},
		sort:function($scope){
			 $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
		}
	
	};

    });
	