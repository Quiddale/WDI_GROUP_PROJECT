angular
.module('groupProject')
.controller('StoryShowCtrl', StoryShowCtrl);

StoryShowCtrl.$inject =['Story', '$stateParams', 'CurrentUserService', '$http', '$state', 'LogicService'];
function StoryShowCtrl(Story, $stateParams, CurrentUserService, $http, $state, LogicService){
  const vm = this;
  vm.story = Story.get({id: $stateParams.id});
  vm.refreshMe = refreshMe;
  vm.test = false;

  vm.limitAccess = function(){
    vm.story
    .$promise.then(()=>{
      console.log(vm.story.contributions[vm.story.contributions.length-1]);
      if(vm.story.contributions[vm.story.contributions.length -1].contributor.id === CurrentUserService.currentUser.id){
        vm.test = true;
        vm.submitCheck = false;
      }
    });
  };
  vm.limitAccess();

  vm.addContribution = addContribution;

  function addContribution(){

    LogicService.limitContributions(vm.contribution.body);
    vm.wordCount = LogicService.wordCount;
    vm.contribution.body = LogicService.limitContrib;
    if (vm.contribution.body.split('').length > 0) {
      vm.showWordCount = true;
    }else{
      vm.showWordCount = false;
    }

    LogicService.checkRules(vm.contribution.body, vm.story.rules);
    vm.submitCheck = LogicService.submitCheck;
  }

  vm.submitContrib = submitContrib;
  function submitContrib(){
    if(!vm.contribution.body){
      console.log('EMPTY');
    }else{
      vm.contribution.contributor = CurrentUserService.currentUser.id;
      Story
      .newContribution({id: vm.story._id}, vm.contribution)
      .$promise
      .then(() => {
        vm.contribution.contributor = CurrentUserService.currentUser;
        vm.story.contributions.push(vm.contribution);
        vm.contribution = {};
        vm.limitAccess();
      });
    }
  }


  if (vm.story !== undefined) {
    vm.text = Story.query();
    vm.text
    .$promise
    .then(function(story) {
      vm.authorId = story[0];
      vm.actualAuthorId = vm.authorId.createdBy.id;
      if (vm.actualAuthorId === CurrentUserService.currentUser.id) {
        vm.canRefresh = true;
      } else {
        vm.canRefresh = false;
      }
    });
  }
  function refreshMe() {
    $http
    .get('https://api.unsplash.com/photos/random?client_id=6486f6a95a6e765711b9ee1b7accf318606fffc506b7769da674d6d51d44a9ba&featured=true')
    .then((response) => {
      // console.log(response.data.urls.full);
      vm.story.image = response.data.urls.regular;
    })
    .then(() => {
      Story
      .update(vm.story)
      .$promise
      .then(() =>{
        // console.log(story);
        // console.log(vm.story);
        $state.go('storiesShow', $stateParams);
      });
    });
  }
}
