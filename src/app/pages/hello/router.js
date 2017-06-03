/**
 * Created by Rayr Lee on 2017/3/18.
 */

export default ['app.hello', {
    url: '/hello',
    views: {
        main: {
            template: '<hello-app></hello-app>',
            resolve: {
                loadModule: function ($ocLazyLoad) {
                    return new Promise((resolve) => {
                        require.ensure(['./'], function () {
                            require(['./'], function () {
                                $ocLazyLoad.load(Array.from(arguments));
                                resolve();
                            });
                        }, 'app.hello');
                    });
                }
            }
        }
    },
    data: {
        title: 'hello'
    }
}]