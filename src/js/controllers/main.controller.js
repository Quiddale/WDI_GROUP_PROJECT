angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'Story'];
function MainCtrl($rootScope, CurrentUserService, $state, Story){
  const vm = this;
  vm.randomStory = randomStory;

  vm.logout = logout;

  $rootScope.$on('loggedIn', () =>{
    vm.user = CurrentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () =>{
    vm.user = null;
    $state.go('home');
  });

  function logout(){
    CurrentUserService.removeUser();
  }

  function randomStory(){
    vm.stories = Story.query();
    vm.stories.$promise.then(function(stories) {
      vm.stories = stories;
      vm.randomIndex = Math.floor(Math.random() *vm.stories.length);
      vm.randomId = vm.stories[vm.randomIndex]._id;
      $state.go('storiesShow', {id: vm.randomId});
    });




    // console.log(vm.randomIndex);
    // console.log(vm.stories.length);
  }
}
