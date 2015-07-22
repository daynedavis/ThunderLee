angular.module('thunder.service', [])

.factory('Order', ['$http', function($http) {

    return {
        create : function(data) {
            return $http.post('/api/stripe', data);
        }
    };

}]);
