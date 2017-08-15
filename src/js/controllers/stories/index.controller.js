angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story', 'User', 'filterFilter', '$scope'];

function StoriesIndexCtrl(Story, User, filterFilter, $scope){
  const vm = this;

  vm.possibleGenres = ['Adventure', 'Comedy', 'Crime', 'Romance', 'Thriller'];
  vm.includedGenres = [];

  vm.all = Story.query();


  function filterStories() {
    // vm.filtered = filterFilter(vm.all, vm.q);
    // $scope.$watch(() => vm.q, filterStories);
  }
  vm.searchQuery = function(){
    if(vm.q){
      vm.filtering = true;
      console.log('HELLOW');
    }else{
      vm.filtering = false;
    }
  };


  vm.users = User.query();
  vm.findUser = findUser;
  function findUser(e){
    vm.user = User.query({id: e});
  }
  filterStories();
}
