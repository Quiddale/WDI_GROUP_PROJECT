angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story', 'User', 'filterFilter', '$scope'];

function StoriesIndexCtrl(Story, User, filterFilter, $scope){
  const vm = this;

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

  Story
  .query()
  .$promise
  .then(story => {
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
  });


  function filterStories() {
    // vm.filtered = filterFilter(vm.all, vm.q);
    // $scope.$watch(() => vm.q, filterStories);
  }
  vm.searchQuery = function(){
    if(vm.q){
      vm.filtering = true;
      console.log('HELLOW');
    }else{
      vm.filtering = false;
    }
  };
  // vm.isInitialized = false;
  // if (vm.initOnload) {
  //   vm.isInitialized = false;
  //   return vm.$watch('data', function (newVal, oldVal) {
  //     if (newVal != null) {
  //       if (vm.isInitialized) {
  //         destroySlick();
  //       }
  //       initializeSlick();
  //       return vm.isInitialized = true;
  //     }
  //   });
  // } else {
  //   return initializeSlick();
  // }


  vm.users = User.query();
  vm.findUser = findUser;
  function findUser(e){
    vm.user = User.query({id: e});
  }
  filterStories();
}
