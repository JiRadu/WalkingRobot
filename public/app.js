angular.module('WalkingRobot', [])
  .controller('Values', ['$http', fnct]);

function fnct($http) {
  var self = this;
  var interval = setInterval(function() {
    $http.get('/getValues').then(function success(response) {
      self.values = response.data;
      console.log(self.values);
    });
  }, 1000);
}
