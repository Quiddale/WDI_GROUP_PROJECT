angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['User'];
function MainCtrl(User){
  const vm = this;
  vm.users = User.query();
}
