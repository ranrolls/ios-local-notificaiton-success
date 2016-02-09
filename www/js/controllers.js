angular.module('starter.controllers', ['ionic', 'toastr', 'ngCordova'])

.controller('DashCtrl', function($scope, $timeout, $cordovaLocalNotification, toastr) {
   var vm = this;
    vm.id = " init id ";
    vm.test = "test text";
    var push;
    
     
    vm.tln4 = function(){
        toastr.info('in vm.tln 4 () ');
    window.plugin.notification.local.add({
                                  title       : "Android App Tes Local Notification", 
                                  message       : "This is a new local notification.",
                                  id             : 444,
                                  foreground      : function(){
                                  console.log("Hello World! This alert was triggered by notification ");
                                  },
                                  background  : function(){
                                  console.log("Hello World! This alert was triggered by notification ");
                                  }           
                                  });
    }
    
    vm.tln3 = function(){
        toastr.info('in vm.tln 3 () ');
        cordova.plugins.notification.local.schedule({
            id: 333,
            title: "Production Jour fixe",
            text: "Duration 1h"
        });
    }
    
   
    toastr.info('toastr is available');
    $timeout(function(){
        
        vm.id += " after timeout ";
        try{
                push = PushNotification.init({
                    ios: {
                      alert: "true",
                      badge: "true",
                      sound: "true"
                    }
                });
                push.on('registration', function(data) {
                    toastr.info('push registration success ');
                    toastr.success(data);
                    toastr.info(data.registrationId);
                    vm.id += data.registrationId + ' ';
                });
                push.on('notification', function(data) {
                    vm.id += ' notificatin reveived ';
                    
                    toastr.info('success message reveived ');
                    toastr.success(data);
                    var msg = data.message;
            var title = data.title;

            cordova.plugins.notification.local.schedule({
              id: 9999,
              title: title,
              text: msg
            });
                    
        //            var msg = data.message;
        //            var title = data.title;
                });
                push.on('error', function(e) {
                    vm.id += e.message;
                });
            
        }catch(e){
            toastr.error(e.message);
            vm.id += e.message;
        }
        
    }, 3000);
  
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };

});