angular
.module('groupProject')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'TokenService'];

function RegisterCtrl(User, TokenService){
  const vm = this;
  vm.register = register;

  function register() {
    User
    .register(vm.user)
    .$promise
    .then(data => {
      console.log(data);
      TokenService.setToken(data.token);
    });
  }

}
