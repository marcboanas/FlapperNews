app.factory('posts', ['$http', function($http) {
  var object = {
    posts: []
  };

  object.getAll = function() {
    return $http.get('/posts.json').success(function(data) {
      angular.copy(data, object.posts);
    });
  };

  object.create = function(post) {
    return $http.post('/posts.json', post).success(function(data) {
        object.posts.push(data);
    });
  };

  object.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
      .success(function(data) {
        post.upvotes += 1;
      });
  };

  object.get = function(id) {
    return $http.get('/posts/' + id + '.json').then(function(res) {
        return res.data;
    });
  };

  object.addComment = function(id, comment) {
    return $http.post('/posts/' + id + '/comments.json', comment);
  };

  object.upvoteComment = function(post, comment) {
    return $http.put('/posts/' + post.id + '/comments/' + comment.id + '/upvote.json')
      .success(function(data) {
        comment.upvotes += 1;
      });
  };

  return object;
}]);
