angular
  .module('groupProject')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService'];
function LoginCtrl(User, CurrentUserService) {
  const vm = this;
  vm.login = login;

  function login() {
    User
      .login(vm.user)
      .$promise
      .then(() => {
        // console.log(data);
        // TokenService.setToken(data.token);
        CurrentUserService.getUser();
      });
  }
}
