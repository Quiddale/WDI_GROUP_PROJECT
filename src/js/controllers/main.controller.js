angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state){
  // console.log('MAIN');
  const vm = this;
  vm.logout = logout;

  $rootScope.$on('LoggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });
  // vm.users = User.query();

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });


  function logout() {
    console.log('bcjbasjbkjas');
    CurrentUserService.removeUser();
  }
}
