angular
.module('groupProject')
.controller('StoryShowCtrl', StoryShowCtrl);

StoryShowCtrl.$inject =['Story', '$stateParams', 'CurrentUserService', '$http', '$state', 'LogicService'];
function StoryShowCtrl(Story, $stateParams, CurrentUserService, $http, $state, LogicService){
  const vm = this;
  vm.story = Story.get({id: $stateParams.id});
  vm.refreshMe = refreshMe;
  vm.lastContributor = false;

  vm.limitAccess = function(){
    vm.story
    .$promise
    .then(()=>{
      if(vm.story.contributions[vm.story.contributions.length -1].contributor.id === CurrentUserService.currentUser.id){
        vm.lastContributor = true;
        vm.submitCheck = false;
      }
    });
  };
  vm.limitAccess();

  vm.deleteContrib = function(){
    Story
    .deleteContribution({id: vm.story._id}, vm.contribution)
    .$promise
    .then(() => {
      vm.story.contributions.pop();
      vm.lastContributor = vm.story.contributions[vm.story.contributions.length - 1];
    });
  };

  vm.addContribution = addContribution;

  function addContribution(){
    // if(!vm.contribution.body && vm.contribution.body === vm.story.rules.starts){
    //   vm.containAdhere = false;
    //   vm.startsAdhere = false;
    // }

    console.log(vm.containAdhere, vm.startsAdhere);
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
    vm.containAdhere = LogicService.containLogicCheck;
    vm.startsAdhere = LogicService.startLogicCheck;
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

  Story.query()
  .$promise
  .then((stories)=>{
    console.log(stories);
    vm.relatedStories = [];
    for (var i = 0; i < stories.length; i++) {
      if(stories[i].genre === vm.story.genre && stories[i]._id !== vm.story._id){
        vm.relatedStories.push(stories[i]);
      }
    }
    console.log(vm.relatedStories, 'related?');
  });


  if (vm.story !== undefined) {
    vm.text = Story.query();
    vm.text
    .$promise
    .then(function() {
      vm.authorId = vm.story.createdBy.id;
      // vm.actualAuthorId = vm.authorId.createdBy.id;
      // console.log(vm.actualAuthorId, CurrentUserService.currentUser.id);
      console.log(vm.story, 'THIS IS VM.STORY');

      if (vm.authorId === CurrentUserService.currentUser.id) {
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

        console.log(story);
        // console.log(vm.story);
        $state.go('storiesShow', $stateParams);
      });
    });
  }
}
