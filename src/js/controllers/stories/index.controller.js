angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story', 'User'];

function StoriesIndexCtrl(Story, User){
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

  vm.users = User.query();
  vm.findUser = findUser;
  function findUser(e){
    vm.user = User.query({id: e});
  }
}
