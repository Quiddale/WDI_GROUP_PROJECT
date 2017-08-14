angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story', 'User'];

function StoriesIndexCtrl(Story, User){
  const vm = this;
  vm.all   = Story.query();
  // console.log(vm.all);
  vm.users = User.query();
  vm.findUser = findUser;
  function findUser(e){
    // console.log(e);
    vm.user = User.query({id: e});
  }
  // console.log(vm.users);
}
