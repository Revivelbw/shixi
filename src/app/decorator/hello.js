/**
 * Created by Rayr Lee on 2017/2/13.
 */

export default function (url) {
    return function (target) {
        target.prototype.get = function () {
            console.log(url);
        }
    }
}