/**
 * Created by Rayr Lee on 2017/5/6 0006.
 */

import app from './app';
import modal from './modal';

export default angular.module('login.moudle',[])
    .component('loginModal',modal)
    .component('loginApp',app);