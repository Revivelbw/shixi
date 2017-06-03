/**
 * Created by Rayr Lee on 2016/7/8.
 */

export default ($httpProvider) => {
    'ngInject';
    $httpProvider.interceptors.push(['$q', '$window', function ($q, $window) {
        return {
            responseError: function (response) {
                var deferred = $q.defer();

                switch (response.status) {
                    case 401:
                        $window.location.href = './res/login.html';
                        deferred.reject(response);
                        break;
                    case 451:
                        $window.location.href = './res/login_error.html';
                        deferred.reject(response);
                        break;
                    default:
                        deferred.resolve(response);
                }

                return deferred.promise;
            }
        };
    }]);
};