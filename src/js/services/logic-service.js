angular
  .module('groupProject')
  .service('LogicService', LogicService);

LogicService.$inject = [];

function LogicService(){
  const self = this;
  self.test = function(authorContribution, rules){
    console.log('LOGIC');

    self.letterArray = authorContribution.split('');

    // self.story.contributions.push(authorContribution);
    self.sentences = authorContribution.split('. ');
    self.count = 0;

    if(rules.contain){
      for (var i = 0; i < self.letterArray.length; i++) {
        if(self.letterArray[i].toLowerCase() === rules.contain.toLowerCase()){
          self.submitCheck = false;
          return;
        }else{
          self.submitCheck = true;
        }
      }
    }
  };

}
