angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story'];

function StoriesIndexCtrl(Story){
  const vm = this;
  vm.all   = Story.query();
  console.log(vm.all);
}
