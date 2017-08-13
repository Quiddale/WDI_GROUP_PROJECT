angular
.module('groupProject')
.controller('NewCtrl', NewCtrl);

NewCtrl.$inject = ['Story', '$state'];
function NewCtrl(Story, $state){
  const vm = this;

  console.log('NEW');
  vm.story = {};
  vm.story.contributions = [];
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
    vm.titleCheck = false;
    vm.genreCheck = false;
    vm.ruleCheck = false;
    vm.contribCheck = true;
  }
  function addContrib(){
    vm.story.contributions.pop();
    vm.story.contributions.push(vm.story.userContribution);
  }
  function submit(){
    console.log('submit');
    console.log(vm.story);

    Story
      .save(vm.story)
      .$promise
      .then(() =>{
        $state.go('storiesIndex');
      });

  }
}
