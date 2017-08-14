angular
.module('groupProject')
.controller('NewCtrl', NewCtrl);

NewCtrl.$inject = ['Story', '$state', 'CurrentUserService'];
function NewCtrl(Story, $state, CurrentUserService){
  const vm = this;
  vm.story = {};
  // vm.story.contributions = [];
  vm.titleCheck = true;
  vm.genreCheck = false;
  vm.ruleCheck = false;
  vm.contribCheck = false;

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
    // vm.story.contributions.pop();
    vm.user = CurrentUserService.currentUser;
    vm.letterArray = vm.story.authorContribution.split('');

    // vm.story.contributions.push(vm.story.authorContribution);
    vm.sentences = vm.story.authorContribution.split('. ');
    vm.count = 0;

    if(vm.story.rules.contain){
      for (var i = 0; i < vm.letterArray.length; i++) {
        if(vm.letterArray[i].toLowerCase() === vm.story.rules.contain.toLowerCase()){
          vm.submitCheck = false;
          return;
        }else{
          vm.submitCheck = true;
        }
      }
    }

    if (vm.story.rules.start) {

      for (var a = 0; a < vm.sentences.length; a++) {


        if(vm.sentences[a].split('')[0].toLowerCase() === vm.story.rules.start.toLowerCase()){
          vm.count++;
        }
        if(vm.count === vm.sentences.length){
          vm.submitCheck = true;
        }else{
          vm.submitCheck = false;
        }
      }
    }
  }

  function contains(){
    if(vm.story.rules.contain.split('').length >1){
      vm.story.rules.contain = vm.story.rules.contain.split('')[vm.story.rules.contain.length - 1];
    }
  }
  function starts(){
    if(vm.story.rules.start.split('').length >1){
      vm.story.rules.start = vm.story.rules.start.split('')[vm.story.rules.start.length - 1];
    }
  }

  function submit(){
    Story
      .save(vm.story)
      .$promise
      .then(() =>{
        $state.go('storiesIndex');
      });

  }
}
