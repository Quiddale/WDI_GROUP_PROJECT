angular
.module('groupProject')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state){
  const vm = this;
  vm.logout = logout;

  $rootScope.$on('loggedIn', () =>{
    vm.user = CurrentUserService.currentUser;
  });
  $rootScope.$on('loggerOut', () =>{
    vm.user = null;
    $state.go('home');
  });

  function logout(){
    CurrentUserService.removeUser();
  }



}
