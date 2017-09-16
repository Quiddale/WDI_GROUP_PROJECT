angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', 'Story'];
function MainCtrl($rootScope, CurrentUserService, $state, Story){

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

  }

  function toggleFilter() {
    if (vm.filterBar === false) {
      vm.filterBar = true;
      $('.search-container').fadeIn();
    } else {
      $(() =>{
        $('.search-container').fadeOut();
        vm.filterBar = false;
        vm.q = '';
      });
    }
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

  vm.findStories = function(e){
    console.log(e);
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
    });
  };
  vm.findStories();
}
