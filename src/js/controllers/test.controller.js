// angular
// .module('testApp')
// .controller('testCtrl', testCtrl);
//
// testCtrl.$inject = [];
//
// function testCtrl(){
//   const vm = this;
//   vm.test = test;
//   function test() {
//     if(vm.value.split('')[0] === vm.input){
//       vm.message = 'You Matched!';
//     }else if(vm.value.split('')[0] !== vm.input && vm.value.split('').length > 0){
//       vm.message = 'You\'re Not Conforming';
//     }else{
//       vm.message = '';
//     }
//   }
//   vm.input= '';
//   vm.containsInput = '';
//   vm.lengthInput = '';
//
//   vm.limit= limit;
//   function limit(){
//     // test();
//     if(vm.input.split('').length >1){
//       vm.input = vm.input.split('')[vm.input.length - 1];
//     }else if(vm.containsInput.split('').length >1){
//       vm.containsInput = vm.containsInput.split('')[vm.containsInput.length - 1];
//     }
//   }
//
//   vm.contains = contains;
//   function contains() {
//     vm.letterArray = vm.containsValue.split('');
//     if(vm.containsValue.indexOf(vm.containsInput) > -1){
//       vm.containsMessage = 'you suck';
//     }else{
//       vm.containsMessage = '';
//     }
//   }
//
//   vm.length = length;
//   function length(){
//     vm.words = vm.increaseLength.split(' ');
//     vm.word = vm.words[vm.words.length - 1];
//     vm.previousWord = vm.words[vm.words.length - 2];
//     if(vm.words.length <= 1){
//       vm.lengthMessage = '';
//     }else if(vm.word.split('').length <= vm.previousWord.split('').length){
//       vm.lengthMessage = 'You suck';
//     }else{
//       vm.lengthMessage = '';
//     }
//   }
// }
