angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story', 'User', 'filterFilter', '$scope'];

function StoriesIndexCtrl(Story, User, filterFilter, $scope){
  const vm = this;

  vm.possibleGenres = [
    {
      genre: 'Adventure',
      exists: false
    },
    {
      genre: 'Comedy',
      exists: false
    },
    {
      genre: 'Crime',
      exists: false
    },
    {
      genre: 'Romance',
      exists: false
    },
    {
      genre: 'Thriller',
      exists: false
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
          }
        }
      }
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


  vm.users = User.query();
  vm.findUser = findUser;
  function findUser(e){
    vm.user = User.query({id: e});
  }
  filterStories();
}
