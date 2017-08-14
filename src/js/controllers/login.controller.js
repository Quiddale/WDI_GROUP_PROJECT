angular
  .module('groupProject')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
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
        $state.go('storiesIndex');
      });
  }
}
