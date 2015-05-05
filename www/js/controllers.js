angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

//This is the browse controller. I recycled the chats controller and still havent changed the names yet
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
//This is the browse details controller. Again havent recycled the name
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

//Modal controller for details page
.controller('detailsModalCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate) {

  $scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  };

  $ionicModal.fromTemplateUrl('templates/tabs/browse-details/details.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
      $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {

  });
})
//This mark the end of module
;
