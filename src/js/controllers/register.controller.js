angular
.module('groupProject')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];

function RegisterCtrl(User, CurrentUserService, $state){
  // console.log('hello');
  const vm = this;
  vm.register = register;

  function register() {
    User
    .register(vm.user)
    .$promise
    .then(() =>{
      console.log('register');
      // console.log(data);
      // TokenService.setToken(data.token);
      CurrentUserService.getUser();
      $state.go('storiesIndex');

    });
  }

}
