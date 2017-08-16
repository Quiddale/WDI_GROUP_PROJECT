angular
.module('groupProject')
.service('LogicService', LogicService);

LogicService.$inject = [];

function LogicService(){
  const self = this;
  self.checkRules = function(authorContrib, rules){
    if (authorContrib) {
      self.containCheck = function(){
        for (var i = 0; i < self.letterArray.length; i++) {
          if(self.letterArray[i].toLowerCase() === rules.contain.toLowerCase()){
            self.containLogicCheck = false;
            return;
          }else{
            self.containLogicCheck = true;
          }
        }
      };

      self.startCheck = function(){
        self.count = 0;
        for (var a = 0; a < self.sentences.length; a++) {
          if(self.sentences[a].split('')[0].toLowerCase() === rules.start.toLowerCase()){
            self.count++;
          }
          if(self.count === self.sentences.length){
            self.startLogicCheck = true;
          }else{
            self.startLogicCheck = false;
          }
        }
      };

      self.authorContrib = authorContrib;
      self.rules = rules;

      self.containLogicCheck = true;
      self.startLogicCheck = true;
      self.sentences = self.authorContrib.split('. ');
      self.letterArray = self.authorContrib.split('');

      if(self.rules.start){
        self.startCheck();
      }
      if (self.rules.contain) {
        self.containCheck();
      }
      if(self.startLogicCheck && self.containLogicCheck){
        self.submitCheck = true;
      }else{
        self.submitCheck = false;
      }
    }
  };

  self.containsInput = function(letters){
    self.letters = letters;
    if(self.letters.length >1){
      self.letters = self.letters[self.letters.length - 1];
    }
  };

  self.limitContributions = function(contribution){
    self.limitContrib = contribution;
    if (self.wordCount === 0 && self.limitContrib.split('').length >= 500) {
      self.overLimitError = true;
      self.contribLimited = contribution.split('');
      self.limitContrib = self.contribLimited.splice(0, 500).join('');
    }else{
      self.addedContrib = true;
      self.wordCount = 500 - self.limitContrib.split('').length;
      self.overLimitError = false;
    }
  };
}
