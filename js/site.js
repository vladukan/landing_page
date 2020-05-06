


var MainSite = angular.module("MainSite", ['ngAnimate']);
MainSite.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});
MainSite.directive('myBindHtml', function() {
    return {
        restrict: "A",
        scope: {
            myBindHtml: "="
        },
        link: function(scope, elem) {
            scope.$watch('myBindHtml', function(newVal) {
                //Здесь можете делать любые преобразования текста перед выводом.
                elem.html(newVal);
            });
        }
    };
});
MainSite.controller("MainCtrl", function ($scope,$http) {
    $scope.height=window.innerHeight;
    $scope.site=true;
    $scope.call=false;
    $scope.call_form=false;
    $scope.offset_comments=0;
    $scope.btn_next_com=true;

    $scope.options = {
        language: 'ru',
        color: 'blue',
        allowedContent: true,
        entities: false
    };


    main_menu();

    $http.post('php/statistic.php').then(function success(data) {});


    function main_menu() {
        $http.post('php/site.php').then(function success(data) {
                console.log(data.data)
               $scope.main_menu=data.data;
            if($scope.offset_comments <=parseInt($scope.main_menu['limit'])){
                $scope.btn_next_com=true;
            }else{
                $scope.btn_next_com=false;
            }
            });
    }

    $scope.send_order = function () {
        $('#error_order').fadeOut(500);
        if(!$scope.name_order){
            $scope.title_error='Вы не ввели Имя!';
            $('#error_order').fadeIn(500);
        }else{
            if(!$scope.phone_order){
                $scope.title_error='Вы не ввели Номер телефона!';
                $('#error_order').fadeIn(500);
            }else{
                $scope.preloader=true;
                $http.post('php/send_order.php', {
                    'name': $scope.name_order,
                    'phone': $scope.phone_order
                }).then(function success(data) {
                    $('#popup_preloader').fadeOut(1000);
                    $('#call_form').animate({top: '-300px', opacity: '0'}, 1000);
                    if (data.data == 1) {
                        alert('Заявка принята, в ближайшее время с вами свяжется мастер по ремонту!');
                        $scope.name_order='';
                        $scope.phone_order='';
                    } else {
                        alert('Ошибка записи, повторите попытку!');
                    }
                    $scope.preloader=false;
                });
            }
        }
    }
    $scope.send_order_page = function () {
        $('#error_order_page').fadeOut(500);
        if(!$scope.name_order_page){
            $scope.title_error='Вы не ввели Имя!';
            $('#error_order_page').fadeIn(500);
        }else{
            if(!$scope.phone_order_page){
                $scope.title_error='Вы не ввели Номер телефона!';
                $('#error_order_page').fadeIn(500);
            }else{
                $scope.preloader=true;
                $http.post('php/send_order.php', {
                    'name': $scope.name_order_page,
                    'phone': $scope.phone_order_page
                }).then(function success(data) {

                    if (data.data == 1) {
                        alert('Заявка принята, в ближайшее время с вами свяжется мастер по ремонту!');
                        $scope.name_order_page='';
                        $scope.phone_order_page='';
                    } else {
                        alert('Ошибка записи, повторите попытку!');
                    }
                    $scope.preloader=false;
                });
            }
        }
    }
    $scope.send_comment=function () {
        $('#error_comment').fadeOut(500);
        if(!$scope.name_comment){
            $scope.title_error='Вы не ввели Имя!';
            $('#error_comment').fadeIn(500);
        }else{
            if(!$scope.number_comment){
                $scope.title_error='Вы не ввели Номер телефона!';
                $('#error_comment').fadeIn(500);
            }else{
                if(!$scope.text_comment){
                    $scope.title_error='Вы не ввели комментарий!';
                    $('#error_comment').fadeIn(500);
                }else{
                    if(!$scope.res_comment){
                        $scope.title_error='Вы не ввели что сделано!';
                        $('#error_comment').fadeIn(500);
                    }else{
                        $scope.preloader=true;
                        $scope.foto_comment=sessionStorage.getItem('file');
                        data={
                            'name':$scope.name_comment,
                            'number':$scope.number_comment,
                            'file':$scope.foto_comment,
                            'text':$scope.text_comment,
                            'res':$scope.res_comment
                        }
                        $http.post('php/send_comment.php', data).then(function success(data) {
                            //console.log(data);
                            if (data.data == 1) {
                                alert('Ваш отзыв сохранен, Спасибо!');
                                $scope.name_comment='';
                                $scope.number_comment='';
                                $scope.foto_comment='';
                                $scope.text_comment='';
                                $scope.res_comment='';
                                main_menu();
                                $('#comment_form').animate({top: '-1200px', opacity: '0'}, 1000);
                                $('#popup_preloader').fadeOut(1000);
                            } else {
                                alert('Ошибка записи, повторите попытку!');
                            }
                            $scope.preloader=false;
                        });
                    }
                }
            }
        }
    }
    $scope.next_comments=function(id){

        $scope.offset_comments=$scope.offset_comments+id;
        data={
            'id':$scope.offset_comments
        }
        $http.post('php/comments.php', data).then(function success(data) {
            $scope.row_comments=parseInt(data.data['limit']);
            if($scope.offset_comments < $scope.row_comments-3){
                $scope.btn_next_com=true;
            }else{
                $scope.btn_next_com=false;
            }
            if(data.data=='0'){
                $scope.btn_next_com=false;
            }else{
                $scope.main_menu['comments']=data.data['comments'];
            }

            //console.log(data.data);

        });
    }






});
