

export default ['root.app.listbox', {
    url: '/listbox',
    views: {
        main: {
            template: '<module-app></module-app>',
            resolve: {
                loadModule: function ($ocLazyLoad) {
                    return new Promise((resolve) => {
                        require.ensure(['./'], function () {
                            require(['./'], function () {
                                $ocLazyLoad.load(Array.from(arguments));
                                resolve();
                            });
                        }, 'listbox');
                    });
                }
            }
        }
    },
    data: {
        title: 'listbox'
    }
}]/**
 * Created by Rayr Lee on 2017/6/3 0003.
 */