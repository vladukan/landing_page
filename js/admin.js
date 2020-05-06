var MainSite = angular.module("MainSite", ['ngAnimate', 'ckeditor','ui.date']);


MainSite.controller("MainCtrl", function ($scope, $http, $filter) {
    $scope.height=window.innerHeight;
    $scope.sort_desc=0;

    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $scope.dateOptions = {
        dateFormat: 'yy-mm-dd'
    }
    $scope.dateOptions2 = {
        dateFormat: 'yy-mm-dd'
    }
    // Editor options.
    $scope.options = {
        language: 'ru',
        color: 'blue',
        allowedContent: true,
        entities: false
    };

    // Called when the editor is completely ready.
    $scope.onReady = function () {
        // ...
    };

    document.title = 'Вход в панель управления';
    $scope.error_login = false;
    $scope.admin_panel = false;
    $scope.btn_new=true;
    $scope.summ = '10';
    $scope.table_desc = 'По убыванию';
    $scope.table_filter = 'ID';
    $scope.title_page = 'orders';
    $scope.active_link = -1;
    $scope.num_page = 1;
    $scope.type_grafik='Часовой';
    if (sessionStorage.getItem('user')) {
        $scope.enter_panel = false;
        $scope.admin_panel = true;
        document.title = 'Панель управления';
        $http.post('php/main_menu.php').then(function success(data) {
            $scope.menu = data.data;
            //console.log(data.data);
            get_data($scope.title_page, $scope.table_filter,$scope.table_desc);

        });

    } else {
        $scope.enter_panel = true;
        $scope.admin_panel = false;

    }
	
	$scope.admin_set=function(){
		
	}

// AUTH ///////////////////////////
    $scope.login = function () {
        $scope.error_login = false;

        if (!$scope.name || !$scope.password) {
            $scope.error_login = true;
        } else {
            $http.post('php/login.php', {'login': $scope.name, 'password': $scope.password}).then(function success(data) {
                    //console.log(data);
                    if (data.data == "0") {
                        $scope.error_login = true;
                        $scope.enter_panel = true;
                    } else {
                        sessionStorage.setItem('user', $scope.name);
                        //console.log(sessionStorage.getItem('user'));
                        $http.post('php/main_menu.php').then(function success(data) {
                            $scope.menu = data.data;
                            //console.log(data.data);
                            //console.log( $scope.active_link);
                            get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
                        });
                        $scope.title = 'Панель управления';
                        $scope.enter_panel = false;
                        $scope.admin_panel = true;


                    }
                });
        }
    }
    $scope.logout = function () {
        sessionStorage.clear();
        $scope.admin_panel = false;
        $scope.title = 'Вход в панель управления';
        $scope.enter_panel = true;
    }
///////////////////////////////////

    $scope.link_menu = function (id, link) {
        $scope.btn_new=true;
        $scope.page = false;
        $scope.title_page = link;
        $scope.active_link = id;
        //main_menu($scope.active_link);
        $scope.table_filter = 'ID';
        switch (link){
            //case 'orders':  $scope.btn_new=false; break;
            case 'statistic':  $scope.btn_new=false; break;
            default: $scope.btn_new=true; break;
        }
        get_data(link, $scope.table_filter,$scope.table_desc);

    }
/////NEW
    $scope.new_row = function (table) {
        //console.log($scope.title);
        $scope.admin_panel = false;
        $scope.update = 0;
        $scope.error=false;
        switch (table) {
            case 'main_menu':
                $scope.number_page = '';
                $scope.name_page = '';
                $scope.link_page = '';
                $scope.text_page = '';
                $scope.content_page = '';
                $scope.phone_page = '';
                $scope.fon_page = '';
                $scope.add_menu = true;
                document.title = 'Добавление страницы';
                $scope.title_add = 'Добавление страницы';
                break;
            case 'brends':
                $scope.add_brends = true;
                document.title = 'Добавление бренда';
                $scope.title_add = 'Добавление бренда';
                $scope.name_brends = '';
                $scope.img_brends = '';
                break;
            case 'comments':
                $scope.add_comment = true;
                document.title = 'Добавление отзыва';
                $scope.title_add = 'Добавление отзыва';
                $scope.name_comment = '';
                $scope.phone_comment = '';
                $scope.foto_comment = '';
                $scope.content_comment = '';
                $scope.result_comment = '';
                break;
            case 'benefit':
                $scope.add_benefit = true;
                document.title = 'Добавление выгоды';
                $scope.title_add = 'Добавление выгоды';
                $scope.number_benefit = '';
                $scope.text_benefit = '';
                break;
            case 'services':
                $scope.add_service = true;
                document.title = 'Добавление Услуги';
                $scope.title_add = 'Добавление Услуги';
                $scope.number_service = '';
                $scope.name_service = '';
                $scope.text_service = '';
                $scope.img_service = '';
                break;
            case 'why_we':
                $scope.add_why = true;
                document.title = 'Добавление Причины';
                $scope.title_add = 'Добавление Причины';
                $scope.number_why = '';
                $scope.name_why = '';
                $scope.text_why = '';
                $scope.img_why = '';
                break;
            case 'orders':
                $scope.add_order = true;
                document.title = 'Добавление Заказа';
                $scope.title_add = 'Добавление Заказа';
                $scope.phone_order = '';
                $scope.name_order = '';
                $scope.status_order = 'Не выполнено';
                break;
        }
        //console.log($scope.title);
    }
//////// EDITING
    $scope.edit_row = function (id) {
        $scope.admin_panel = false;
        $scope.update = 1;
        $scope.error = false;
        switch ($scope.title_page) {
            case 'main_menu':
                data={
                    'id':id,
                    'table': $scope.title_page
                }
                $http.post('php/get_for_edit.php', data).then(function success(data) {
                    //console.log(data.data[1]);
                    $scope.number_page = parseInt(data.data[1]);
                    $scope.name_page = data.data[2];
                    $scope.link_page = data.data[3];
                    $scope.text_page = data.data[4];
                    $scope.content_page = data.data[5];
                    $scope.phone_page = parseInt(data.data[6]);
                    $scope.fon_page = data.data[7];
                    $scope.id_item = data.data[0];
                    $scope.add_menu = true;
                    document.title = 'Редактирование страницы';
                    $scope.title_add = 'Редактирование страницы';
                });
                break;
            case 'brends':
                data={
                    'id':id,
                    'table': $scope.title_page
                }
                $http.post('php/get_for_edit.php', data).then(function success(data) {
                    //console.log(data.data[1]);
                    $scope.name_brends = data.data[1];
                    $scope.img_brends = data.data[2];
                    $scope.id_item = data.data[0];
                    $scope.add_brends = true;
                    document.title = 'Редактирование бренда';
                    $scope.title_add = 'Редактирование бренда';
                });
                break;
            case 'comments':
                data={
                    'id':id,
                    'table': $scope.title_page
                }
                $http.post('php/get_for_edit.php', data).then(function success(data) {
                    //console.log(data.data);
                    $scope.name_comment = data.data[2];
                    $scope.phone_comment = parseInt(data.data[3]);
                    $scope.foto_comment = data.data[4];
                    $scope.content_comment = data.data[5];
                    $scope.result_comment = data.data[6];
                    $scope.id_item = data.data[0];
                    $scope.add_comment = true;
                    document.title = 'Редактирование отзыва';
                    $scope.title_add = 'Редактирование отзыва';
                });
                break;
            case 'benefit':
                data={
                    'id':id,
                    'table': $scope.title_page
                }
                $http.post('php/get_for_edit.php', data).then(function success(data) {
                    //console.log(data.data);
                    $scope.number_benefit = parseInt(data.data[1]);
                    $scope.text_benefit = data.data[2];
                    $scope.id_item = data.data[0];
                    $scope.add_benefit = true;
                    document.title = 'Редактирование выгоды';
                    $scope.title_add = 'Редактирование выгоды';
                });
                break;
            case 'services':
                data={
                    'id':id,
                    'table': $scope.title_page
                }
                $http.post('php/get_for_edit.php', data).then(function success(data) {
                    //console.log(data.data);
                    $scope.number_service = parseInt(data.data[1]);
                    $scope.name_service = data.data[2];
                    $scope.text_service = data.data[3];
                    $scope.img_service = data.data[4];
                    $scope.id_item = data.data[0];
                    $scope.add_service = true;
                    document.title = 'Редактирование выгоды';
                    $scope.title_add = 'Редактирование выгоды';
                });
                break;
            case 'why_we':
                data={
                    'id':id,
                    'table': $scope.title_page
                }
                $http.post('php/get_for_edit.php', data).then(function success(data) {
                    //console.log(data.data);
                    $scope.number_why = parseInt(data.data[1]);
                    $scope.img_why = data.data[2];
                    $scope.name_why = data.data[3];
                    $scope.text_why = data.data[4];
                    $scope.id_item = data.data[0];
                    $scope.add_why = true;
                    document.title = 'Редактирование Причины';
                    $scope.title_add = 'Редактирование Причины';
                });
                break;
            case 'orders':
                data={
                    'id':id,
                    'table': $scope.title_page
                }
                $http.post('php/get_for_edit.php', data).then(function success(data) {
                    //console.log(data.data);
                    $scope.phone_order = parseInt(data.data[3]);
                    $scope.name_order = data.data[2];
                    $scope.status_order = data.data[4];
                    $scope.id_item = data.data[0];
                    $scope.add_order = true;
                    document.title = 'Редактирование Заказа';
                    $scope.title_add = 'Редактирование Заказа';
                });
                break;
        }

    }
    ///// DELETE
    $scope.delete_row = function (id) {
        $http.post('php/delete_item.php', {'id': id, 'table': $scope.title_page}).then(function success(data) {
            if (data.data == 1) {
                get_data($scope.title_page,$scope.table_filter);
                $http.post('php/main_menu.php').then(function success(data) {
                    $scope.menu = data.data;
                });
                alert('Запись успешно удалена');
            } else {
                alert('Ошибка удаления!');
            }
            //console.log(data.data);

        });
    }

/////////////////////////// MAIN MENU
    $scope.close_add=function () {
        document.title = 'Панель управления';
        $scope.error = false;
        $scope.admin_panel = true;
        switch ($scope.title_page){
            case 'main_menu': $scope.add_menu = false; break;
            case 'brends': $scope.add_brends = false; break;
            case 'comments': $scope.add_comment = false; break;
            case 'statistic': $scope.grafik=false; break;
            case 'benefit': $scope.add_benefit=false; break;
            case 'services': $scope.add_service=false; break;
            case 'why_we': $scope.add_why=false; break;
            case 'orders': $scope.add_order=false; break;
        }
    }
///////SAVE
    $scope.save_main_menu = function () {
        $scope.error = false;
        if (!$scope.number_page) {
            $scope.error = true;
            $scope.title_error = 'Вы не ввели Номер';
        } else {
            if (!$scope.name_page) {
                $scope.error = true;
                $scope.title_error = 'Вы не ввели Название';
            } else {
                if (!$scope.link_page) {
                    $scope.error = true;
                    $scope.title_error = 'Вы не ввели Ссылку';
                } else {
                    if (!$scope.text_page) {
                        $scope.error = true;
                        $scope.title_error = 'Вы не ввели Заголовок';
                    }else{
                        data = {
                            'number': $scope.number_page,
                            'name': $scope.name_page,
                            'link': $scope.link_page,
                            'text': $scope.text_page,
                            'content': $scope.content_page,
                            'phone': $scope.phone_page,
                            'fon': $scope.fon_page,
                            'update': $scope.update,
                            'id': $scope.id_item
                        }
                        $http.post('php/add_menu.php', data).then(function success(data) {
                            if (data.data == 1) {
                                get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
                                $scope.add_menu = false;
                                $scope.admin_panel = true;
                                alert('Запись успешно сохранена!');
                            } else {
                                $scope.error = true;
                                $scope.title_error = 'Ошибка записи';
                            }
                        });
                    }
                }
            }
        }
    }
    $scope.save_comment = function () {
        $scope.error = false;
        if (!$scope.name_comment) {
            $scope.error = true;
            $scope.title_error = 'Вы не ввели Имя';
        } else {
            if (!$scope.phone_comment) {
                $scope.error = true;
                $scope.title_error = 'Вы не ввели Телефон';
            } else {
                if (!$scope.content_comment) {
                    $scope.error = true;
                    $scope.title_error = 'Вы не ввели Отзыв';
                } else {
                    if (!$scope.result_comment) {
                        $scope.error = true;
                        $scope.title_error = 'Вы не ввели Результат';
                    }else{
                        data = {
                            'name': $scope.name_comment,
                            'phone': $scope.phone_comment,
                            'img': $scope.foto_comment,
                            'content': $scope.content_comment,
                            'result': $scope.result_comment,
                            'update': $scope.update,
                            'id': $scope.id_item
                        }
                        //console.log(data);
                        $http.post('php/add_comment.php', data).then(function success(data) {
                           //console.log(data.data);
                            if (data.data == 1) {
                                get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
                                $scope.add_comment = false;
                                $scope.admin_panel = true;
                                alert('Запись успешно сохранена!');
                            } else {
                                $scope.error = true;
                                $scope.title_error = 'Ошибка записи';
                            }
                        });
                    }
                }
            }
        }
    }
    $scope.save_service = function () {
        $scope.error = false;
        if (!$scope.number_service) {
            $scope.error = true;
            $scope.title_error = 'Вы не ввели номер Услуги';
        } else {
            if (!$scope.name_service) {
                $scope.error = true;
                $scope.title_error = 'Вы не ввели Название';
            } else {
                if (!$scope.text_service) {
                    $scope.error = true;
                    $scope.title_error = 'Вы не ввели текст Услуги';
                } else {
                    if (!$scope.img_service) {
                        $scope.error = true;
                        $scope.title_error = 'Вы не выбрали Картинку';
                    }else{
                        data = {
                            'number': $scope.number_service,
                            'name': $scope.name_service,
                            'text': $scope.text_service,
                            'img': $scope.img_service,
                            'update': $scope.update,
                            'id': $scope.id_item
                        }
                        //console.log(data);
                        $http.post('php/add_service.php', data).then(function success(data) {
                           //console.log(data.data);
                            if (data.data == 1) {
                                get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
                                $scope.add_service = false;
                                $scope.admin_panel = true;
                                alert('Запись успешно сохранена!');
                            } else {
                                $scope.error = true;
                                $scope.title_error = 'Ошибка записи';
                            }
                        });
                    }
                }
            }
        }
    }
    $scope.save_why = function () {
        $scope.error = false;
        if (!$scope.number_why) {
            $scope.error = true;
            $scope.title_error = 'Вы не ввели номер Причины';
        } else {
            if (!$scope.img_why) {
                $scope.error = true;
                $scope.title_error = 'Вы не выбрали Картинку';
            } else {
                if (!$scope.name_why) {
                    $scope.error = true;
                    $scope.title_error = 'Вы не ввели название';
                } else {
                    if (!$scope.text_why) {
                        $scope.error = true;
                        $scope.title_error = 'Вы не ввели текст';
                    }else{
                        data = {
                            'number': $scope.number_why,
                            'name': $scope.name_why,
                            'text': $scope.text_why,
                            'img': $scope.img_why,
                            'update': $scope.update,
                            'id': $scope.id_item
                        }
                        //console.log(data);
                        $http.post('php/add_why.php', data).then(function success(data) {
                           //console.log(data.data);
                            if (data.data == 1) {
                                get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
                                $scope.add_why = false;
                                $scope.admin_panel = true;
                                alert('Запись успешно сохранена!');
                            } else {
                                $scope.error = true;
                                $scope.title_error = 'Ошибка записи';
                            }
                        });
                    }
                }
            }
        }
    }
    $scope.save_brends=function () {
        $scope.error = false;

        if (!$scope.name_brends) {
            $scope.error = true;
            $scope.title_error = 'Вы не ввели Название Бренда';
        } else {
            if (!$scope.img_brends) {
                $scope.error = true;
                $scope.title_error = 'Вы не выбрали картинку для бренда';
            } else {
                data = {
                    'name': $scope.name_brends,
                    'img': $scope.img_brends,
                    'update': $scope.update,
                    'id': $scope.id_item
                }
                $http.post('php/add_brend.php', data).then(function success(data) {
                    if (data.data == 1) {
                        get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
                        $scope.add_brends = false;
                        $scope.admin_panel = true;
                        alert('Запись успешно сохранена!');
                    } else {
                        $scope.error = true;
                        $scope.title_error = 'Ошибка записи';
                    }
                });
            }
        }

    }
    $scope.save_benefit=function () {
        $scope.error = false;

        if (!$scope.number_benefit) {
            $scope.error = true;
            $scope.title_error = 'Вы не ввели Номер Выгоды';
        } else {
            if (!$scope.text_benefit) {
                $scope.error = true;
                $scope.title_error = 'Вы не ввели текст Выгоды';
            } else {
                data = {
                    'number': $scope.number_benefit,
                    'text': $scope.text_benefit,
                    'update': $scope.update,
                    'id': $scope.id_item
                }
                $http.post('php/add_benefit.php', data).then(function success(data) {
                    if (data.data == 1) {
                        get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
                        $scope.add_benefit = false;
                        $scope.admin_panel = true;
                        alert('Запись успешно сохранена!');
                    } else {
                        $scope.error = true;
                        $scope.title_error = 'Ошибка записи';
                    }
                });
            }
        }

    }
    $scope.save_order=function () {
        $scope.error = false;

        if (!$scope.name_order) {
            $scope.error = true;
            $scope.title_error = 'Вы не ввели Имя';
        } else {
            if (!$scope.phone_order) {
                $scope.error = true;
                $scope.title_error = 'Вы не ввели Телефон';
            } else {
                data = {
                    'name': $scope.name_order,
                    'phone': $scope.phone_order,
                    'status': $scope.status_order,
                    'update': $scope.update,
                    'id': $scope.id_item
                }
                $http.post('php/add_order.php', data).then(function success(data) {
                    if (data.data == 1) {
                        get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
                        $scope.add_order = false;
                        $scope.admin_panel = true;
                        alert('Запись успешно сохранена!');
                    } else {
                        $scope.error = true;
                        $scope.title_error = 'Ошибка записи';
                    }
                });
            }
        }

    }
// FUNCTION////////////
    function get_data(id, column,sort) {
        $scope.page=false;
        $scope.loader=true;

        if(sort=='По возрастанию'){
            $scope.sort_desc=0;
        }else{
            $scope.sort_desc=1;
        }

        if ($scope.num_page == 1) {
            $scope.begin = 0;
        } else {
            $scope.begin = ($scope.num_page - 1) * $scope.summ;
        }
        data = {
            'table': id,
            'id': column,
            'begin': $scope.begin,
            'end': $scope.summ,
            'desc': $scope.sort_desc
        }
        $http.post('php/get_date.php', data).then(function success(data) {

            if (data.data['rows']) {
                $scope.page_data = data.data;

                //console.log(data.data['rows']);
                if (id == 'orders') {
                    for (i = 0; i < data.data['rows'].length; i++) {
                        if (data.data['rows'][i][4] == 'Не выполнено') {
                            data.data['rows'][i]['color'] = 'red';
                        } else {
                            data.data['rows'][i]['color'] = 'green';
                        }
                    }
                }
                $scope.all_pages = data.data['pages'];
                $scope.all_rows = data.data['all_rows'];
                $scope.empty_table = false;
                $scope.table_show = true;
            } else {
                $scope.empty_table = true;
                $scope.table_show = false;
            }
            $scope.loader=false;
            $scope.page = true;

        });

    }
////////////////////////////////

// NAVIGATION
    $scope.send_order = function () {
        $http.post('php/send_order.php', {
            'name': $scope.name_order,
            'phone': $scope.phone_order
        }).then(function success(data) {
            if (data.data == 1) {
                alert('Заявка принята, в ближайшее время с вами свяжется мастер по ремонту!');
            } else {
                alert('Ошибка записи, повторите попытку!');
            }
        });
    }
    $scope.sort_table = function () {
        get_data($scope.title_page, $scope.table_filter,$scope.table_desc);
    }
    $scope.summ_table = function () {
        $scope.num_page = 1;
        get_data($scope.title_page, $scope.table_filter);
    }
    $scope.next_page = function () {
        if ($scope.num_page == $scope.all_pages) {
            get_data($scope.title_page, $scope.table_filter);
        } else {
            $scope.num_page = $scope.num_page + 1;
            get_data($scope.title_page, $scope.table_filter);
        }
    }
    $scope.prev_page = function () {
        if ($scope.num_page == 1) {
            get_data($scope.title_page, $scope.table_filter);
        } else {
            $scope.num_page = $scope.num_page - 1;
            get_data($scope.title_page, $scope.table_filter);
        }
    }
//////////////////////////////////////////////
    // GRAFIK
    $scope.grafik_open=function () {
        $scope.admin_panel=false;
        $scope.grafik=true;
        var date = new Date();
        date_begin=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        date.setDate(date.getDate()+1);
        date_end=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
        $scope.begin_graph=date_begin;
        $scope.end_graph=date_end;
        data={
            'date_begin': date_begin,
            'date_end': date_end,
            'type': $scope.type_grafik
        }
        $http.post('php/graph.php', data).then(function success(data) {
            //console.log(data);
            var options = {
                chart: {
                    renderTo: 'graph',
                    type: 'column',
                    zoomType: 'x'
                },

                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            borderRadius: 4,
                            backgroundColor: 'rgba(252,255,197,0.7)',
                            borderWidth: 1,
                            borderColor: '#AAA',
                            y: -10,
                            shape: 'callout'
                        }
                    }
                },
                rangeSelector: {
                    buttons: [{
                        type: 'hour',
                        count: 1,
                        text: 'Час'
                    }, {
                        type: 'day',
                        count: 1,
                        text: 'День'
                    }, {
                        type: 'all',
                        count: 1,
                        text: 'Всё'
                    }],
                    selected: 1,
                    inputEnabled: false
                },
                title: {
                    text: 'Статистика с '+ $scope.begin_graph+' по '+ $scope.end_graph,
                    align: 'center'
                },
                legend: {
                    enabled: false,
                    align: 'left',
                    backgroundColor: '#FCFFC5',
                    layout: 'vertical',
                    verticalAlign: 'center',
                    y: 30,
                    shadow: true
                },
                series: [{}]
            };
            //
            $.getJSON('php/data.json', function (data) {
                options.series[0].data = data;
                options.series[0].tooltip = {valueDecimals: 0};
                var chart = new Highcharts.stockChart(options);
            });
        });
    }
    $scope.build_graph=function () {
        $scope.error = false;
        if(!$scope.date_begin){
            $scope.error = true;
            $scope.title_error = 'Выберите начальную дату';
        }else{
            if(!$scope.date_end){
                $scope.error = true;
                $scope.title_error = 'Выберите конечную дату';
            }else{
                data={
                    'date_begin': $scope.date_begin,
                    'date_end': $scope.date_end,
                    'type': $scope.type_grafik
                }
                $http.post('php/graph.php', data).then(function success(data) {
                    //console.log(data);
                    $scope.begin_graph=$scope.date_begin.getDate()+'.'+($scope.date_begin.getMonth()+1)+'.'+$scope.date_begin.getFullYear();
                    $scope.end_graph=$scope.date_end.getDate()+'.'+($scope.date_end.getMonth()+1)+'.'+$scope.date_end.getFullYear();
                    var options = {
                        chart: {
                            renderTo: 'graph',
                            type: 'column',
                            zoomType: 'x'
                        },

                        plotOptions: {
                            series: {
                                dataLabels: {
                                    enabled: true,
                                    borderRadius: 4,
                                    backgroundColor: 'rgba(252,255,197,0.7)',
                                    borderWidth: 1,
                                    borderColor: '#AAA',
                                    y: -10,
                                    shape: 'callout'
                                }
                            }
                        },
                        rangeSelector: {
                            buttons: [{
                                type: 'hour',
                                count: 1,
                                text: 'Час'
                            }, {
                                type: 'day',
                                count: 1,
                                text: 'День'
                            }, {
                                type: 'all',
                                count: 1,
                                text: 'Всё'
                            }],
                            selected: 1,
                            inputEnabled: false
                        },
                        title: {
                            text: 'Статистика с '+ $scope.begin_graph+' по '+ $scope.end_graph,
                            align: 'center'
                        },
                        legend: {
                            enabled: false,
                            align: 'left',
                            backgroundColor: '#FCFFC5',
                            layout: 'vertical',
                            verticalAlign: 'center',
                            y: 30,
                            shadow: true
                        },
                        series: [{}]
                    };
                    //
                    $.getJSON('php/data.json', function (data) {
                        options.series[0].data = data;
                        options.series[0].tooltip = {valueDecimals: 0};
                        var chart = new Highcharts.stockChart(options);
                    });
                });
            }
        }
    }
    /////////////////////

    // file mng
    $scope.file_mng=function () {
        sessionStorage.setItem('files','');
        $scope.pick_file=[];
        $scope.dir_folder='../ckfinder/userfiles';
        $scope.dir_folder_now='';
        get_list_files();
        $scope.back_folder=false;
        switch ($scope.title_page){
            case 'brends': $scope.add_brends = false; break;
            case 'main_menu': $scope.add_menu = false; break;
            case 'comments': $scope.add_comment = false; break;
            case 'services': $scope.add_service = false; break;
            case 'why_we': $scope.add_why = false; break;
        }
        $scope.show_file_mng = true;
        $scope.error=false;
    }
    $scope.click_folder=function (name) {
        $scope.dir_folder_now=name;
        $scope.dir_folder=$scope.dir_folder+'/'+name;
        $scope.back_folder=true;
        get_list_files();
        $scope.error=false;
    }
    $scope.load_file=function (name) {
        CKFinder.modal({
            chooseFiles: true,
            width: 800,
            height: 600
        });
    }
    $scope.click_back_folder=function () {
        $scope.dir_folder=$scope.dir_folder.slice(0,$scope.dir_folder.length-$scope.dir_folder_now.length-1);
        str=$scope.dir_folder.split('/');
        $scope.dir_folder_now=str[str.length-1];
        if($scope.dir_folder=='.'||$scope.dir_folder=='..'||$scope.dir_folder==''||$scope.dir_folder=='../ckfinder/userfi'||$scope.dir_folder=='../ckfinder/'){
            $scope.dir_folder='../ckfinder/userfiles';
        }
        if($scope.dir_folder=='../ckfinder/userfiles'){
            $scope.back_folder=false;
        }else{
            $scope.back_folder=true;
        }
        get_list_files();
        $scope.error=false;
    }
    $scope.click_img=function (url) {
        $scope.select_img=url;
        $scope.error=false;
    }
    $scope.selected_img=function () {
        $scope.error=false;
        if($scope.select_img==''){
            $scope.title_error='Выберите картинку и нажмите применить!';
            $scope.error=true;
        }else{
            switch ($scope.title_page){
                case 'brends': $scope.img_brends=$scope.select_img; $scope.add_brends=true; break;
                case 'main_menu': $scope.fon_page=$scope.select_img; $scope.add_menu=true; break;
                case 'comments': $scope.foto_comment=$scope.select_img; $scope.add_comment=true; break;
                case 'services': $scope.img_service=$scope.select_img; $scope.add_service=true; break;
                case 'why_we': $scope.img_why=$scope.select_img; $scope.add_why=true; break;
            }
            $scope.show_file_mng=false;
            $scope.error=false;
        }
    }
    // //$scope.delete_files=function (file) {
    //     $scope.error=false;
    //     if(sessionStorage.getItem('files')==''){
    //         $scope.title_error='Выберите файлы для удаления!';
    //         $scope.error=true;
    //     }else{
    //         data={
    //             'file':sessionStorage.getItem('files')
    //         }
    //         $http.post('php/delete_files.php', data).then(function success(data) {
    //             get_list_files();
    //             sessionStorage.removeItem('files');
    //             $('input').prop('checked', false);
    //         });
    //         }
    //
    // }

    $scope.close_file_mng=function () {
        switch ($scope.title_page){
            case 'brends': $scope.add_brends = true; break;
            case 'main_menu': $scope.add_menu = true; break;
            case 'comments': $scope.add_comment = true; break;
            case 'services': $scope.add_service = true; break;
            case 'why_we': $scope.add_why = true; break;
        }
        $scope.show_file_mng = false;
        $scope.error=false;
    }

    function get_list_files() {
        data={
            'str':$scope.dir_folder
        }
        $http.post('php/file_scan.php', data).then(function success(data) {
                $scope.list_files=data.data;
                //console.log(data.data.length);
                if(data.data.length==0){
                    $scope.empty_folder=true;
                }else{
                    $scope.empty_folder=false;
                }
            });
    }
    /////////////////

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
$(document).ready(function () {
    $('body').click(function (event) {
        if (event.target.className == 'file_manager'||event.target.id == 'file_manager'||event.target.id == 'load_file') {
            CKFinder.modal({
                chooseFiles: true,
                width: 800,
                height: 600
            });
        }
    });
});

// $(document).on('click','input[type=checkbox]', function(){
//     if ($(this).prop("checked")) {
//         if(sessionStorage.getItem('files')==''){
//             sessionStorage.setItem('files', $(this).val()+':' );
//         }else{
//             sessionStorage.setItem('files',sessionStorage.getItem('files')+$(this).val()+':');
//         }
//
//         //console.log(sessionStorage.getItem('files'));
//     }
//     else {
//         if(sessionStorage.getItem('files')!=='') {
//             //str=sessionStorage.getItem('files').slice(0,sessionStorage.getItem('files').length-$(this).val().length-1);
//             sessionStorage.setItem('files', sessionStorage.getItem('files').replace($(this).val() + ':', ''));
//         }
//         //console.log(sessionStorage.getItem('files'));
//
//     }
// });
