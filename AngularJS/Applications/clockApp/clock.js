var module = angular.module('myApp',[]);

module.controller('clockCtrl', clock);

function clock($scope)
{
            var currentDate = new Date();
            $scope.presentDate = currentDate.toDateString();
            $scope.currentTime = currentDate.toTimeString();
        
             $scope.userName='';
             $scope.radio='';
             $scope.date='';
    
    $scope.updateClock = function(){
            console.log('button working');
            var currentDate = new Date();
            $scope.presentDate = currentDate.toDateString();
            $scope.currentTime = currentDate.toTimeString();
        
    }
}