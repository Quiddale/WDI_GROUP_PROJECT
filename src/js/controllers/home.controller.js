angular
.module('groupProject')
.controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = [];
function HomeCtrl() {
  const vm = this;
  vm.registerSection = false;
  vm.loginSection = true;
  vm.goToRegister = goToRegister;
  vm.goToLogin = goToLogin;
  vm.scrollMe = scrollMe;
  // vm.scrollIt = scrollIt;

  function goToRegister() {
    vm.registerSection = true;
    vm.loginSection = false;
  }

  function goToLogin() {
    vm.loginSection = true;
    vm.registerSection = false;
  }

  function scrollMe() {
    console.log('Im hit');
    vm.scroll = scroll;
  }

  // function scrollIt() {
  //   console.log('do something');
  // }

}
