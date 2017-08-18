angular
.module('groupProject')
.factory('Story', Story);

Story.$inject = ['API', '$resource'];
function Story(API, $resource){
  return $resource(`${API}/stories/:id`, {id: '@_id'}, {
    'update': { method: 'PUT'},
    'newContribution': { method: 'POST', url: `${API}/stories/:id/contributions/new`},
    'deleteContribution': {method: 'DELETE', url: `${API}/stories/:id/contributions/new`}
  });
}
