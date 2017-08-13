angular
  .module('groupProject')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'TokenService'];
function LoginCtrl(User, TokenService) {
  const vm = this;
  vm.login = login;

  function login() {
    User
      .login(vm.user)
      .$promise
      .then(data => {
        console.log(data);
        TokenService.setToken(data.token);
      });
  }
}
