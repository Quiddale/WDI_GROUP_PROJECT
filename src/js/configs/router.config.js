angular
.module('groupProject')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('storiesCreate', {
    url: '/stories/new',
    templateUrl: '/js/views/stories/new.html',
    controller: 'NewCtrl',
    controllerAs: 'new'
  })
  .state('storiesIndex', {
    url: '/stories',
    templateUrl: '/js/views/stories/index.html',
    controller: 'StoriesIndexCtrl as stories'
  })
  .state('storiesShow', {
    url: '/stories/:id',
    templateUrl: '/js/views/stories/show.html',
    controller: 'StoryShowCtrl as vm'
  })
  .state('userShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl as vm'
  });

  $urlRouterProvider.otherwise('/');
}
