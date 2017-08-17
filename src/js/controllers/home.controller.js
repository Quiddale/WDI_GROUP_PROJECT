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

  function goToRegister() {
    vm.registerSection = true;
    vm.loginSection = false;
  }

  function goToLogin() {
    vm.loginSection = true;
    vm.registerSection = false;
  }

  $(function() {
    $('a').click(function() {
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 1000);
      return false;
    });
  });
}
