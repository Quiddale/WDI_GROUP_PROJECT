angular
  .module('groupProject')
  .factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API', 'TokenService'];

function AuthInterceptor(API, TokenService) {
  return {
    request: function(req) {
      console.log(req);
      return req;
    },
    response: function(res) {
      // console.log(res);
      if (res.config.url.indexOf(API) === 0 && res.data.token) {
        TokenService.setToken(res.data.token);
      }
      return res;
    }
  };
}