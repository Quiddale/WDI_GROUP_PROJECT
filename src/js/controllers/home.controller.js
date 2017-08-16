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
  vm.smoothScroller = smoothScroller;

  function goToRegister() {
    vm.registerSection = true;
    vm.loginSection = false;
  }

  function goToLogin() {
    vm.loginSection = true;
    vm.registerSection = false;
  }

  function smoothScroller() {
    console.log('Im hit');
    document.querySelector('.login-page').scrollIntoView({
      behavior: 'smooth'
    });
  }
}
