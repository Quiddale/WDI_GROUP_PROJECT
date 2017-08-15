angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story', 'User'];

function StoriesIndexCtrl(Story, User){
  const vm = this;

  vm.possibleGenres = ['Adventure', 'Comedy', 'Crime', 'Romance', 'Thriller'];
  vm.includedGenres = [];

  vm.all = Story.query();

  vm.users = User.query();
  vm.findUser = findUser;
  function findUser(e){
    vm.user = User.query({id: e});
  }

}
