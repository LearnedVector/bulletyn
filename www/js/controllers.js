angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

//This controller is for the browse page
.controller('BrowseDetailCtrl', function($scope, Details) {
  $scope.details = Details.all();
  $scope.remove = function(detail) {
    Details.remove(detail);
  };
})
//this controller is for the details page
.controller('DetailCtrl', function($scope, $stateParams, Details) {
  $scope.detail = Details.get($stateParams.detailId);
})


.controller('ForumCtrl', function($scope, Forums) {
  $scope.forums = Forums.all();
  $scope.remove = function(forum) {
    Forums.remove(forum);
  };
})
//this controller is for the details page
.controller('ForumDetailsCtrl', function($scope, $stateParams, Forums) {
  $scope.forum = Forums.get($stateParams.forumId);
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

  $ionicModal.fromTemplateUrl('templates/tabs/browse-details/details-modal.html', {
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
