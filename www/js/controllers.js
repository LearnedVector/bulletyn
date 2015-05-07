angular.module('bulletyn.controllers', [])

//This controller is for the browse page
.controller('BrowseDetailCtrl', function($scope, Details) {
  $scope.details = Details.all();
})
//this controller is for the details page
.controller('DetailCtrl', function($scope, $stateParams, Details) {
  $scope.detail = Details.get($stateParams.detailId);
})

//Forum controller
.controller('ForumCtrl', function($scope, Forums) {
  $scope.forums = Forums.all();
})
//this controller is for the forum details page
.controller('ForumDetailsCtrl', function($scope, $stateParams, Forums) {
  $scope.forum = Forums.get($stateParams.forumId);
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
