app.controller('MainController', ['$scope', 'posts', function($scope, posts) {
  $scope.test = 'Hello World!';
  $scope.posts = posts.posts;
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    posts.create({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
    });
    $scope.title = '';
    $scope.link = '';
  };
  $scope.incrementalUpvotes = function(post) {
    posts.upvote(post);
  }
}]);
