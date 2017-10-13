<<<<<<< HEAD
#OulipoGram

Check out the live version of the app here -> https://aqueous-headland-84010.herokuapp.com/

---

**Concept**
Oulipo (French pronunciation: ​[ulipo], short for French: Ouvroir de littérature potentielle; roughly translated: "workshop of potential literature") is a loose gathering of (mainly) French-speaking writers and mathematicians who seek to create works using constrained writing techniques. It was founded in 1960 by Raymond Queneau and François Le Lionnais. Other notable members have included novelists Georges Perec and Italo Calvino, poets Oskar Pastior, Jean Lescure and poet/mathematician Jacques Roubaud.



**Project Discription**

For this project, we were put into groups and had one week to build a MEAN stack application. Our group chose to build a platform for collaborative story telling where the story creator can implement rules for the story. These rules could be any of the following:

All sentences have to start with the letter specified by the creator. 
No sentence can contain the letter specified by the creator. 
All words have to be longer than the previous within a sentence.
This idea captured my attention as there were a number of challenging logical problems that would be essential to the user experience. I took responsibility for the implementation of the front end logic as well as a significant proportion of the work to build the underlying API and relationships.

---
**Rules**

```
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
```

---

**Technology**

Built with: AngularJS, Node.js, MongoDB, Express, HTML, SCSS, Bootstrap, Slick, Angular JWT

![alt text](https://i.imgur.com/ABuhJH4.png "Collision Course Screengrab")

All projects and my details can be found here -> www.qosullivan.com
