angular
.module('groupProject')
.controller('NewCtrl', NewCtrl);

NewCtrl.$inject = ['Story', '$state', 'CurrentUserService', '$http', 'LogicService'];
function NewCtrl(Story, $state, CurrentUserService, $http, LogicService){
  const vm = this;
  vm.story = {};
  vm.story.rules = {};
  vm.increaseCount = 0;
  vm.titleCheck = true;
  vm.genreCheck = false;
  vm.ruleCheck = false;
  vm.contribCheck = false;
  vm.showFooter = true;

  vm.goGenre = goGenre;
  vm.goTitle = goTitle;
  vm.goRules = goRules;
  vm.goContrib = goContrib;
  vm.addContrib = addContrib;
  vm.submit = submit;
  vm.starts = starts;
  vm.contains = contains;

  function goTitle(){
    vm.titleCheck = true;
    vm.genreCheck = false;
    vm.ruleCheck = false;
    vm.contribCheck = false;
  }
  function goGenre(){
    vm.titleCheck = false;
    vm.genreCheck = true;
    vm.ruleCheck = false;
    vm.contribCheck = false;
  }
  function goRules(){
    vm.titleCheck = false;
    vm.genreCheck = false;
    vm.ruleCheck = true;
    vm.contribCheck = false;
  }
  function goContrib(){
    vm.story.contributions = [];
    vm.titleCheck = false;
    vm.genreCheck = false;
    vm.ruleCheck = false;
    vm.contribCheck = true;
  }

  function addContrib(){
    LogicService.checkRules(vm.story.authorContribution, vm.story.rules);
    vm.submitCheck = LogicService.submitCheck;

    LogicService.limitContributions(vm.story.authorContribution);
    vm.wordCount = LogicService.wordCount;
    vm.story.authorContribution = LogicService.limitContrib;
    if (vm.story.authorContribution.split('').length > 0) {
      vm.showWordCount = true;
    }else{
      vm.showWordCount = false;
    }

    vm.containAdhere = LogicService.containLogicCheck;
    vm.startsAdhere = LogicService.startLogicCheck;
    vm.increaseAdhere = LogicService.increaseLogicCheck;
  }
  if(!vm.story.authorContribution){
    vm.containAdhere = true;
    vm.startsAdhere = true;
  }


  function contains(){
    LogicService.containsInput(vm.story.rules.contain.split(''));
    vm.story.rules.contain = LogicService.letters[0];
  }
  function starts(){
    LogicService.containsInput(vm.story.rules.start.split(''));
    vm.story.rules.start = LogicService.letters[0];
  }
  vm.addIncreaseRule = function(){
    vm.increaseCount++;
    if(vm.increaseCount%2 ===1){
      vm.story.rules.increase = true;
    }else{
      vm.story.rules.increase = false;
    }
  };
  // vm.story.rules.increase = false;
  function submit(){
    $http
    .get('https://api.unsplash.com/photos/random?client_id=6486f6a95a6e765711b9ee1b7accf318606fffc506b7769da674d6d51d44a9ba&featured=true')
    .then((response) => {
      vm.story.image = response.data.urls.regular;
    })
    .then(() => {
      Story
      .save(vm.story)
      .$promise
      .then((story) =>{
        $state.go('storiesShow', {id: story._id});
      });
    });
  }
}
