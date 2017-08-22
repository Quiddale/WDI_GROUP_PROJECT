angular
  .module('groupProject')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['$stateParams', 'User', 'Story'];
function UsersShowCtrl($stateParams, User, Story){
  const vm = this;
  vm.user = User.get($stateParams);
  vm.stories = Story.query();
  vm.userContributions = [];
  vm.stories
  .$promise
  .then(()=>{
    for (var i = 0; i < vm.stories.length; i++) {
      for (var a = 0; a < vm.stories[i].contributions.length; a++) {
        if(vm.stories[i].contributions[a].contributor.id === vm.user.id){
          vm.userContributions.push(vm.stories[i]);
        }
      }
    }
  });
}
