angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story', 'User'];

function StoriesIndexCtrl(Story, User){
  const vm = this;

  vm.filtering = false;
  vm.showCarousel = false;
  console.log(vm.showCarousel);

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


  function filterStories() {
    // vm.filtered = filterFilter(vm.all, vm.q);
    // $scope.$watch(() => vm.q, filterStories);
  }

  vm.searchQuery = function(){
    if(vm.q){
      vm.filtering = true;
      console.log(vm.q);
    }else{
      vm.filtering = false;
      vm.q = '';
    }
  };


  vm.users = User.query();
  vm.findUser = findUser;
  function findUser(e){
    vm.user = User.query({id: e});
  }
  filterStories();
}
