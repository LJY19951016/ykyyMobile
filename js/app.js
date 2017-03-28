/**
 * Created by Administrator on 2017/3/23.
 */
!function(){
    angular.module('ionicApp', ['ionic','controller','service'])
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if(window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if(window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('tabs', {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "templates/tabs.html"
                })
                .state('tabs.home', {
                    url: "/home",
                    views: {
                        'home-tab': {
                            templateUrl: "templates/home.html",
                            controller: 'HomeTabCtrl'
                        }
                    }
                })
                .state('tabs.scan', {
                    url: "/scan",
                    views: {
                        'scan-tab': {
                            templateUrl: "templates/scan.html"
                        }
                    }
                })
                .state('tabs.mine', {
                    url: "/mine",
                    views: {
                        'mine-tab': {
                            templateUrl: "templates/mine.html"
                        }
                    }
                })
                .state('tabs.list', {
                    url: "/list",
                    views: {
                        'list-tab': {
                            templateUrl: "templates/list.html"
                        }
                    }
                })

                .state('tabs.login',{
                    url:"/login",
                    views:{
                        'mine-tab':{
                            templateUrl:"templates/login.html"
                        }
                    }
                })
                .state('tabs.userInfo',{
                    url:"/userInfo",
                    views:{
                        'mine-tab':{
                            templateUrl:"templates/userInfo.html"
                        }
                    }
                })
                .state('tabs.pwd',{
                    url:"/pwd",
                    views:{
                        'mine-tab':{
                            templateUrl:"templates/pwd.html"
                        }
                    }
                })
                .state('tabs.orderConfirm',{
                    url:"/orderConfirm",
                    views:{
                        'mine-tab':{
                            templateUrl:"templates/orderConfirm.html"
                        }
                    }
                })
                .state('tabs.order',{
                    url:"/order",
                    views:{
                        'mine-tab':{
                            templateUrl:"templates/order.html"
                        }
                    }
                })
                .state('tabs.drugInfo',{
                    url:"/drugInfo",
                    views:{
                        'list-tab':{
                            templateUrl:"templates/drugInfo.html"
                        }
                    }
                })
                .state('tabs.confirm',{
                    url:"/confirm",
                    views:{
                        'list-tab':{
                            templateUrl:"templates/confirm.html"
                        }
                    }
                })

            ;


            $urlRouterProvider.otherwise("/tab/home");

        })


    ;
}();