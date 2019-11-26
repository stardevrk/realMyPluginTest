angular.module('starter.controllers', ['ionic', 'ngCordova'])

.controller('DashCtrl', function($scope, $ionicPopup) {
  $scope.showBrowser= function() {
    // var alertPopup = $ionicPopup.alert({
    //   title: window.VideoUpload,
    //   template: 'This is alert popup',
    // });
    // alertPopup.then(function(res) {
    //   console.log('Thanks');
    // });
    //window.VideoUpload.setKey('AoNqrNGn3TLiPzH10ZwIAz');AXkc2JgbsSQVuCZV9w4iBz
    window.VideoUpload.setKey('AoNqrNGn3TLiPzH10ZwIAz');
    window.VideoUpload.startUpload({
        multiple: true,
        mimeTypes: ['image/*', 'application/pdf', 'video/*'],
        // services : [ 'CAMERA', 'GALLERY', 'GOOGLE_DRIVE', 'DROPBOX', 'BOX', 'SKYDRIVE'],
        sources : [ 'CAMERA', 'GALLERY' ],
        maxFiles: 20,
        maxSize: (1024*1024*1024)
    }, {
        location : 'S3',
        path : '/location/'
    }, function(res) {
        console.log(res);
        var alertPopup = $ionicPopup.alert({
          title: 'Upload Success',
          template: res,
        });
        alertPopup.then(function(res) {
          console.log('Thanks');
        });
    }, function(e) {
       console.error(e);
       var alertPopup = $ionicPopup.alert({
        title: 'Upload Failed',
        template: e,
      });
      alertPopup.then(function(res) {
        console.log('Thanks');
      });
    });
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
