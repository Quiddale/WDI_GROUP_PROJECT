angular
  .module('groupProject')
  .controller('StoryShowCtrl', StoryShowCtrl);

StoryShowCtrl.$inject =['Story', '$stateParams'];
function StoryShowCtrl(Story, $stateParams){
  console.log('SHOW');
  const vm = this;
  console.log($stateParams);
  vm.story = Story.get({id: $stateParams.id});
  console.log(vm.story);
}
