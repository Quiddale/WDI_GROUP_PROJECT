angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['User'];
function MainCtrl(User){
  console.log('MAIN');
  const vm = this;
  vm.users = User.query();
}
