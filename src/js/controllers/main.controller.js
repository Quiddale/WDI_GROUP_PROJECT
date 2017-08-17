angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'Story'];
function MainCtrl($rootScope, CurrentUserService, $state, Story){
  var elem = document.querySelector('.carousel');


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

    vm.status = {
      isopen: false
    };

    vm.toggled = toggled;

    function toggled(open) {
      console.log('Dropdown is now: ', open);
    }

    vm.toggleDropdown = toggleDropdown;

    function toggleDropdown($event) {
      console.log($event);
      $event.preventDefault();
      $event.stopPropagation();
      vm.status.isopen = !vm.status.isopen;
    }


    // console.log(vm.randomIndex);
    // console.log(vm.stories.length);
  }
}
