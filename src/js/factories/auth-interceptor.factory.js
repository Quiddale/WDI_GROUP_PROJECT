angular
  .module('groupProject')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = [];

function AuthInterceptor() {
  return {
    request: function(req) {
      console.log(req);
      return req;
    },
    response: function(res) {
      console.log(res);
      return res;
    }
  };
}
