angular.module('starter.controllers')

.controller('HomeCtrl', function($scope) {
//    var vm = this;
//    vm.id = "";
//    vm.test = "test text";
//    var push;
//    
//    $timeout(function(){
//        vm.id = "after timeout";
//        
//        try{
//            
//            
//                push = PushNotification.init({
//                    ios: {
//                      alert: "true",
//                      badge: "true",
//                      sound: "true"
//                    }
//                });
//                push.on('registration', function(data) {
//                    vm.id = data.registrationId;
//                });
//                push.on('notification', function(data) {
//                    vm.id += 'notificatin reveived';
//        //            var msg = data.message;
//        //            var title = data.title;
//                });
//                push.on('error', function(e) {
//                    vm.id += e.message;
//                });
//            
//        }catch(e){
//            vm.id += e.message;
//        }
//    }, 3000);
});