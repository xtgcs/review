/**
 * Created by tian on 2016/12/15.
 */

var app = angular.module('myApp',[]);
app.controller('myCtrl', function($scope, $http,$window,$interval) {
    $http.get("Data.json")
        .success(function(response) {
            $scope.data = response;

        });
    $scope.state = true;
    $scope.hide=function () {
        // console.log($event.target.parentNode);
        $scope.state=false;
    };

     $scope.big = function (id) {
         /*调用微信预览图片的方法*/
         wx.previewImage({
             urls: [lists[id].url] ,// 需要预览的图片http链接列表
         })
     };
    $scope.wxl=true;
    if(isWeiXin()){
        $scope.wxl=false;
    }
   function isWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            return true;
        }else{
            return false;
        }
    }

});