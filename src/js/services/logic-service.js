angular
.module('groupProject')
.service('LogicService', LogicService);

LogicService.$inject = [];

function LogicService(){
  const self = this;

  self.containCheck = function(authorContribution, rules){
    self.letterArray = authorContribution.split('');
    for (var i = 0; i < self.letterArray.length; i++) {
      if(self.letterArray[i].toLowerCase() === rules.contain.toLowerCase()){
        self.containLogicCheck = false;
        return;
      }else{
        self.containLogicCheck = true;
      }
    }
  };

  self.startCheck = function(sentences, rules){
    self.count = 0;
    for (var a = 0; a < sentences.length; a++) {
      if(sentences[a].split('')[0].toLowerCase() === rules.start.toLowerCase()){
        self.count++;
      }
      if(self.count === sentences.length){
        self.startLogicCheck = true;
      }else{
        self.startLogicCheck = false;
      }
    }
  };

}
