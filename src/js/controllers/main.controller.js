angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'Story'];
function MainCtrl($rootScope, CurrentUserService, $state, Story){

  var elem = document.querySelector('.carousel');
  
  const vm = this;
  vm.randomStory = randomStory;
  vm.filterBar = false;
  vm.toggleFilter = toggleFilter;

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

  function toggleFilter() {
    if (vm.filterBar === false) {
      vm.filterBar = true;
    } else {
      vm.filterBar = false;
      vm.q = '';
    }
  }

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

  vm.possibleGenres = [
    {
      genre: 'Adventure',
      exists: false,
      count: 0,
      stories: []
    },
    {
      genre: 'Comedy',
      exists: false,
      count: 0,
      stories: []
    },
    {
      genre: 'Crime',
      exists: false,
      count: 0,
      stories: []
    },
    {
      genre: 'Romance',
      exists: false,
      count: 0,
      stories: []
    },
    {
      genre: 'Thriller',
      exists: false,
      count: 0,
      stories: []
    }
  ];

  vm.findStories = function(){
    Story
    .query()
    .$promise
    .then(story => {
      vm.showCarousel = true;
      vm.all = story;
    })
    .then(() => {
      for (var i = 0; i < vm.possibleGenres.length; i++) {
        for (var j = 0; j < vm.all.length; j++) {
          if (vm.possibleGenres[i].genre === vm.all[j].genre) {
            vm.possibleGenres[i].exists = true;
            vm.possibleGenres[i].count++;
            vm.possibleGenres[i].stories.push(vm.all[j]);
          }
        }
      }

      console.log(vm.possibleGenres);
    }).then(()=>{

      // setTimeout(function(){
      //   vm.showCarousel = true;
      //   console.log(vm.showCarousel);
      // }, 1000);

    });
  }
  vm.findStories();

}
