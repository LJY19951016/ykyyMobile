/**
 * Created by Administrator on 2017/3/23.
 */
!function(){
    angular.module('controller',[])
        .controller('HomeTabCtrl', function($scope) {
            $scope.myActiveSlide = 0;
            $scope.drugInfo = function(){
                location.href="#/tab/drugInfo";
            }
        })
        .controller('listController',function($scope,$ionicBackdrop){
            $scope.action = function(){
                $ionicBackdrop.retain();
            }
            $scope.drugInfo = function(){
                location.href="#/tab/drugInfo";
            }
        })
        .controller('orderConfirmCtrl',function($scope,$ionicPopup){
            $scope.showConfirm = function() {
                var confirmPopup = $ionicPopup.confirm({
                    title: '提示',
                    template: '确认该药品是否已到货',
                    buttons:[
                        {
                            text:'取消',
                            type:'button button-stable'
                        },
                        {
                            text:'确认',
                            type:'button button-positive'
                        }
                    ]
                });
                confirmPopup.then(function(res) {
                    if(res) {
                        console.log('You are sure');
                    } else {
                        console.log('You are not sure');
                    }
                });
            };
        })
        .controller('orderController',function($scope,$http,$ionicPopup){
            $scope.items=[
                {"time":"1"},
                {"time":"2"},
                {"time":"3"}
            ];
        })
        .controller('drugInfoCtrl',function($scope){
            $scope.confirm = function () {
                location.href="#/tab/confirm";
            }
        })
        .controller('confirmCtrl',function($scope){
            $scope.sureConfirm = function(){
                location.href="#/tab/mine";
            }
        })
}();
