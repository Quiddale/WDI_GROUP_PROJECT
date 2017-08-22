angular
.module('groupProject')
.controller('StoriesIndexCtrl', StoriesIndexCtrl);

StoriesIndexCtrl.$inject= ['Story'];

function StoriesIndexCtrl(Story){
  const vm = this;

  vm.filtering = false;
  vm.showCarousel = false;
  vm.all = Story.query();

  vm.searchQuery = function(){
    if(vm.q){
      vm.filtering = true;
    }else{
      vm.filtering = false;
      vm.q = '';
    }
  };
}
