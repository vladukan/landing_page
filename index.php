<!DOCTYPE html>
<html lang="ru" ng-app="MainSite" >
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<meta name="viewport" content="width=450">
<script type="text/javascript" src="./index_files/jquery-2.1.4.js"></script>
<!--<script type="text/javascript" src="//code.jquery.com/jquery-1.12.3.min.js?ver=4.5.2"></script>-->
  <link rel="stylesheet" href="./index_files/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="./index_files/component.css">
    <link rel="stylesheet" type="text/css" href="./index_files/global.css">
    <link rel="stylesheet" type="text/css" href="./index_files/turbotabs.css">
    <link rel="stylesheet" type="text/css" href="./index_files/animate.min.css">
    <link rel="stylesheet" type="text/css" href="./index_files/font-awesome.min.css">
    <link rel="stylesheet" href="./index_files/bootstrap.min.css">
    <link href="index_files/main.css" rel="stylesheet" type="text/css">
    <link href="index_files/intlTelInput.css" rel="stylesheet" type="text/css">
    <link href="index_files/icon.css" rel="stylesheet" type="text/css">

 
 
    <script type="text/javascript" src="index_files/size.js"></script>
    <script src="./index_files/bootstrap.min.js"></script>
    <script type="text/javascript" src="index_files/jquery.maskedinput-1.3.1 2013.js"></script>
    <script type="text/javascript" src="index_files/jquery.validate.min.js"></script>
    <script type="text/javascript" src="index_files/valid.js"></script>
    <script type="text/javascript" src="index_files/slides.min.jquery.js"></script>
    <script type="text/javascript" src="index_files/mansory.pkgd.js"></script>
    <!--<script type="text/javascript" src="/templates/newstyle/js/fit-columns.js"></script>-->
    <script type="text/javascript" src="index_files/script.js"></script>
    <script type="text/javascript" src="index_files/intlTelInput.js"></script>


    <!--These scripts were added by me-->
    <script src="vendor/angular-1.6.6/angular.js"></script>
    <script src="vendor/angular-1.6.6/angular-animate.js"></script>
	
    <script src="assets/js/wow.min.js"></script>
    <script src="js/site.js"></script>
    <script src="assets/js/scripts.js"></script>


    <link rel="shortcut icon" href="" type="image/x-icon">
    <script src="index_files/jquery-ui.js"></script>
   <link href="index_files/mob.css" rel="stylesheet" type="text/css">
    <meta name="yandex-verification" content="">
    <meta property="og:url" content="">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Официальный авторизованный сервисный центр Bosch по ремонту техники БОШ в Москве">
        <meta property="og:description" content="">
        <meta property="og:image" content="">
        <meta property="og:locale" content="ru_RU">
        <meta property="og:site_name" content="Bosch">
        <meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:description" content="">
		<meta name="twitter:title" content="Официальный авторизованный сервисный центр Bosch по ремонту техники БОШ в Москве">
		<meta name="twitter:image" content="">
        <meta name="keywords" content="Официальный,авторизованный,сервисный,центр,Bosch,по,ремонту,техники,БОШ,в,Москве">
        <link rel="canonical" href="">
        <title>Официальный авторизованный сервисный центр Bosch по ремонту техники БОШ в Москве</title>
<meta name="description" content="Если вам потребовался надежный сервисный центр Bosch в Москве, наши грамотные эксперты готовы провести бесплатную диагностику устройства и избавиться от всех неполадок в нем"><!-- Yandex.Metrika counter -->
	
<style>div.pull-left svg g, div.pull-left svg path {
    fill: #d22121 !important;</style><script type="text/javascript" src="chrome-extension://aadgmnobpdmgmigaicncghmmoeflnamj/ng-inspector.js"></script></head>
<body ng-controller="MainCtrl" ng-cloak>
<script type="text/javascript" src="./index_files/tantal.js"></script>

<div class="maket">
    <div class="header wow fadeInDown" data-wow-delay="300ms">
    <div class="fixedblock">
        <div  class="logo" id="main_page"><a href=""><img src="{{main_menu['menu'][0][7]}}" alt=""></img></a></div>
        <div class="Block_top">
            <div class="topInfo hi-icon-effect-8">
                <div class="BlockTeelefon">
                    <a href="" class="tele">{{main_menu['headers'][7][1]}}</a>
                    <p>{{main_menu['text_headers'][7][0][2]}}</p>
                </div>
                <a class="callback md-trigger hi-icon icon-phone" data-modal="modal-1">Заказать звонок</a>
            </div>


            <div class="topmenu">
                <!-- Main menu module -->
                <ul>
                    <li ng-repeat="item in main_menu['menu'] track by $index">
                        <a href="#{{item[3]}}" target="_self" >{{item[2]}}</a>
                    </li>
                </ul>
            </div>


        </div>
    </div>
    </div>
<div class="fixedblock index" id="{{main_menu['menu'][0][3]}}"><div class="content">
    <div class="banner">
        <div class="Fixfloat">


            <div class="bottomPart wow fadeInLeft" data-wow-delay="300ms">
                <h1 my-bind-html="main_menu['headers'][1][1]"></h1>
                <div class="media-center media-top" ng-repeat="item in main_menu['text_headers'][1] track by $index">
                    <div class="pull-center">
                        <img class="media-object" src="{{item[3]}}">
                    </div>
                    <div class="media-body media-middle">
                        <p>{{item[2]}}</p>
                    </div>
                </div>
            </div>


            <div class="toppart wow fadeInRight" data-wow-delay="300ms">
                <h2 my-bind-html="main_menu['headers'][0][1]"></h2>
                <p my-bind-html="main_menu['text_headers'][0][0][2]"></p>
                <div class="boxSOmeImg">
                    <img class="media-object" src="{{main_menu['headers'][0][2]}}">
                </div>
                <div class="btn btn-primary"><a class="callback md-trigger" data-modal="modal-2">запишитесь на ремонт</a></div>
            </div>


        </div>
    </div>
</div>
          <noindex>


<!-- КАК МЫ РАБОТАЕМ-->
              <div class="left wow fadeIn" data-wow-delay="300ms">
                  <h2 my-bind-html="main_menu['headers'][2][1]"></h2>
                  <div class="media" ng-repeat="item in main_menu['text_headers'][2] track by $index">
                      <div class="pull-left" my-bind-html="item[3]"></div>
                      <div class="media-body" my-bind-html="item[2]"></div>
                  </div>

              </div>
            </noindex>


<!--    МЫ РЕМОНТИРУЕМ ТЕХНИКУ-->
<h2 class="wow fadeIn" data-wow-delay="300ms" id="{{main_menu['menu'][2][3]}}">{{main_menu['headers'][4][1]}}</h2>

<div class="matrixblock hi-icon-effect-8 wow fadeIn" data-wow-delay="300ms" id="index">
   <div class="Fixfloat">

       <div class="BlockAnim Smartf col-md-6 col-xs-12" ng-repeat="item in main_menu['text_headers'][4] track by $index">
           <div class="col-md-8">
               <p style="line-height:240px;text-align: center;font-weight: bold;font-size: 24px" >{{item[2]}}</p>
           </div>
           <div class="col-md-4">
               <img class="media-object" style="display: inline-block;" src="{{item[3]}}" >
           </div>
       </div>
    </div>


    <!--<div class="btn btn-default icon-caret-right"><a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82" title="Ремонт техники Bosch в Москве">Посмотреть все</a></div>-->
</div>


<!--пОЧЕМУ ЛЮДИ ДОВЕРЯЮТ-->
<div class="wow fadeInUp" data-wow-delay="300ms" id="{{main_menu['menu'][3][3]}}">
<h2 my-bind-html="main_menu['headers'][3][1]"></h2>
     <p my-bind-html="main_menu['text_headers'][3][0][2]"></p>
  <h2 id="{{main_menu['menu'][1][3]}}">{{main_menu['headers'][5][1]}}</h2>
    <p my-bind-html="main_menu['text_headers'][5][0][2]">{{item[2]}}</p>
 </div>
<hr></div>
</div>
<!--    ПРАЙС ЛИСТ-->
<div class="popular wow fadeInUp" data-wow-delay="300ms" id="{{main_menu['menu'][4][3]}}" style="background-color: #fff">
    <div class="fixedblock" >
        <h2>{{main_menu['headers'][6][1]}}</h2>

        <div class="clear"></div>

        <table>

            <tr ng-repeat="item in main_menu['text_headers'][6] track by $index">
                <td width="250"><img src="{{item[3]}}" width="200"></td>
                <td width="500" style="text-align: left;font-size: 18px;">{{item[2]}}</td>
                <td width="150" style="font-size: 24px;font-weight: bold">{{item[4]}} руб.</td>
            </tr>


        </table>
    </div>
</div>


<div class="fixedblock">
    <div class="FormBlockIm">
<!--        <div class="toppart">-->
<!--            <h4>Ремонт в сервисном центре Bosch - это:</h4>-->
<!--            <ul>-->
<!--                <li>Выполняем срочный ремонт</li>-->
<!--                <li>Max - 5&nbsp;минут от метро</li>-->
<!--                <li>Диагностика ­- 0 рублей!</li>-->
<!--                <li>Гибкая система оплаты</li>-->
<!--                <li>Гарантия на все виды работ</li>-->
<!--                <li>Оригинальные комплектующие Bosch</li>-->
<!--            </ul>-->
<!--        </div>-->
        <div class="bottompart wow fadeInRight" data-wow-delay="300ms">
            <div class="formBlock">
                <span class="h3">Записаться на ремонт</span>
                <form action="" method="get" id="bigform" novalidate="novalidate">
                    <div id="aftersend" style="display: none;">Форма отправлена. В ближайшее время вам перезвонит наш консультант.</div>
                    <div class="BlockForm">
                        <div class="col_3">
                            <div class="InputBlock">
                                <input type="text" name="name" class="name" placeholder="Имя" required="" aria-required="true">
                                <span class="request">*</span>
                            </div>
                        </div>
                        <div class="col_3">
                            <div class="InputBlock">
                                <div class="intl-tel-input"><div class="flag-dropdown"><div tabindex="0" class="selected-flag" title="Russia (Россия): +7"><div class="iti-flag ru"></div><div class="arrow"></div></div><ul class="country-list hide" style=""><li class="country active" data-dial-code="7" data-country-code="ru"><div class="flag"><div class="iti-flag ru"></div></div><span class="country-name">Russia (Россия)</span><span class="dial-code">+7</span></li></ul></div><input type="tel" name="tele" class="tele" id="phone2" maxlength="16" required="" autocomplete="off" aria-required="true" placeholder="+7 912 345-67-89"></div>
                                <span class="request">*</span>
                            </div>
                        </div>
                        <div class="col_3">
                            <input type="submit" name="submit" class="btn-primary" value="Записаться">
                            <span class="request">* обязательное поле</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="action" style="padding: 30px">
            <!-- Dashboard -->
            <div class="action1">
                <!--<img class="b-banner-main__image" src="./index_files/img_59e9c117b7b9b.png" alt="">-->
                <!--<div class="Text_block" style="width: 210px;">ЧИСТКА КОФЕМАШИНЫ BOSCH СО СКИДКОЙ!</div>-->
            </div>
        </div>
        <div class="clear"></div>
    </div>
</div>
<div class="clear"></div>
    <div class="rasporka"></div>
    
    
    <div class="footer" id="contacts"
        <div class="fixedblock">
            <div class="blockfooter">
                <!--<span class="title">Ремонт Bosch</span>-->
                <!--<ul class="b-menu-footer">-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%9A%D0%BE%D1%84%D0%B5%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B" class="g-link_footer" target="_self">Кофемашины</a>-->
                    <!--</li>-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%A1%D1%82%D0%B8%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B" class="g-link_footer" target="_self">Стиральные машины</a>-->
                    <!--</li>-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%92%D0%B0%D1%80%D0%BE%D1%87%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D0%B8" class="g-link_footer" target="_self">Варочные панели</a>-->
                    <!--</li>-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%9F%D1%8B%D0%BB%D0%B5%D1%81%D0%BE%D1%81%D1%8B" class="g-link_footer" target="_self">Пылесосы</a>-->
                    <!--</li>-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D0%B0%D1%80%D0%BA%D0%B8" class="g-link_footer" target="_self">Мультиварки</a>-->
                    <!--</li>-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%91%D0%BB%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D1%8B" class="g-link_footer" target="_self">Блендеры</a>-->
                    <!--</li>-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%A3%D1%82%D1%8E%D0%B3%D0%B8" class="g-link_footer" target="_self">Утюги</a>-->
                    <!--</li>-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%A5%D0%BE%D0%BB%D0%BE%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%B8" class="g-link_footer" target="_self">Холодильники</a>-->
                    <!--</li>-->
                    <!--<li class="b-menu-footer__item">-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82/%D0%A2%D0%BE%D1%81%D1%82%D0%B5%D1%80%D1%8B" class="g-link_footer" target="_self">Тостеры</a>-->
                    <!--</li>-->
                <!--</ul>-->
                <div class="clear"></div>
            </div>
            <div class="blockfooter">
                <!--<span class="title">Услуги</span>-->
                <!--<ul>-->
                    <!--<li>-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%A6%D0%B5%D0%BD%D1%8B" target="_self">Цены</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%9E_%D0%BD%D0%B0%D1%81" target="_self">О Компании</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B" target="_self">Контакты</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%94%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0" target="_self">Доставка</a>-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--<a href="https://www.bosch-service-russian.ru/%D0%94%D0%B8%D0%B0%D0%B3%D0%BD%D0%BE%D1%81%D1%82%D0%B8%D0%BA%D0%B0" target="_self">Диагностика</a>-->
                    <!--</li>-->
                  	<!--<li>-->
                  		<!--<a href="https://www.bosch-service-russian.ru/%D0%A2%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B" title="Территория работы сервисного центра Bosch">Территория работы</a>-->
              		<!--</li>-->
                <!--</ul>-->
                <div class="clear"></div>
            </div>
            <div class="blockfooter">
                <span class="title">{{main_menu['menu'][6][4]}}</span>
                <div class="bottomInfo">
                    <a href="" class="tele">{{main_menu['menu'][0][6]}}</a>
                    <p>{{main_menu['text_headers'][7][0][2]}}</p>
                    <p>©<?= date('Y'); ?></p>
                </div>
            </div>

        </div>
    </div>
<div class="md-modal md-effect-1" id="modal-1">
        <div class="md-content">
            <div class="md-close">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve"><g>	<g id="close">		<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "></polygon>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </div>
            <span class="h3">Заказать звонок</span>
            <div>
                <form action="https://www.bosch-service-russian.ru/" method="get" id="zvonokform" novalidate="novalidate">
                    <div id="aftersend" style="display: none;">Форма отправлена. В ближайшее время вам перезвонит наш консультант.</div>
                    <div class="BlockForm">
                        <div class="InputBlock">
                            <input type="text" name="name" class="name" placeholder="Имя">
                        </div>
                        <div class="InputBlock">
                            <div class="intl-tel-input"><div class="flag-dropdown"><div tabindex="0" class="selected-flag" title="Russia (Россия): +7"><div class="iti-flag ru"></div><div class="arrow"></div></div><ul class="country-list hide" style=""><li class="country active" data-dial-code="7" data-country-code="ru"><div class="flag"><div class="iti-flag ru"></div></div><span class="country-name">Russia (Россия)</span><span class="dial-code">+7</span></li></ul></div><input type="tel" name="tele" class="tele" id="phone4" maxlength="16" autocomplete="off" placeholder="+7 912 345-67-89"></div>
                            <span class="request">*</span>
                        </div>
                        <span class="request">* обязательное поле</span>
                        <input type="submit" name="submit" value="Записаться">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="md-modal md-effect-1" id="modal-2">
        <div class="md-content">
            <div class="md-close">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
<g>	<g id="close">		<polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3     214.2,178.5   "></polygon>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </div>
            <span class="h3">Заказать ремонт</span>
            <div>
                <form action="https://www.bosch-service-russian.ru/" method="get" id="zakaz_modal" novalidate="novalidate">
                    <div id="aftersend" style="display: none;">Форма отправлена. В ближайшее время вам перезвонит наш консультант.</div>
                    <div class="BlockForm">
                        <div class="InputBlock">
                            <input type="text" name="name" class="name" placeholder="Имя">
                        </div>
                        <div class="InputBlock">
                            <div class="intl-tel-input"><div class="flag-dropdown"><div tabindex="0" class="selected-flag" title="Russia (Россия): +7"><div class="iti-flag ru"></div><div class="arrow"></div></div><ul class="country-list hide" style=""><li class="country active" data-dial-code="7" data-country-code="ru"><div class="flag"><div class="iti-flag ru"></div></div><span class="country-name">Russia (Россия)</span><span class="dial-code">+7</span></li></ul></div><input type="tel" name="tele" class="tele" id="phone3" maxlength="16" autocomplete="off" placeholder="+7 912 345-67-89"></div>
                            <span class="request">*</span>
                        </div>
                        <span class="request">* обязательное поле</span>
                        <input type="submit" name="submit" value="Записаться">
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="md-overlay"></div>
<script>
        $('#isotope').masonry({
            itemSelector: '.item',
            columnWidth: 30,
            gutter: 10
        });
    </script>
    <script>
        $("#phone").intlTelInput({
            allowExtensions: false,
            autoFormat: true,
            autoHideDialCode: false,
            autoPlaceholder: true,
            defaultCountry: "ru",
            nationalMode: false,
            numberType: "MOBILE",
            onlyCountries: ['ru'],
            utilsScript: "/templates/newstyle/js/utils_tel.js"
        });
    </script>
    <script>
        $("#phone2").intlTelInput({
            allowExtensions: false,
            autoFormat: true,
            autoHideDialCode: false,
            autoPlaceholder: true,
            defaultCountry: "ru",
            nationalMode: false,
            numberType: "MOBILE",
            onlyCountries: ['ru'],
            utilsScript: "/templates/newstyle/js/utils_tel.js"
        });
    </script>
    <script>
        $("#phone3").intlTelInput({
            allowExtensions: false,
            autoFormat: true,
            autoHideDialCode: false,
            autoPlaceholder: true,
            defaultCountry: "ru",
            nationalMode: false,
            numberType: "MOBILE",
            onlyCountries: ['ru'],
            utilsScript: "/templates/newstyle/js/utils_tel.js"
        });
    </script>
    <script>
        $("#phone4").intlTelInput({
            allowExtensions: false,
            autoFormat: true,
            autoHideDialCode: false,
            autoPlaceholder: true,
            defaultCountry: "ru",
            nationalMode: false,
            numberType: "MOBILE",
            onlyCountries: ['ru'],
            utilsScript: "/templates/newstyle/js/utils_tel.js"
        });
    </script>
    <script>
        $("#phone5").intlTelInput({
            allowExtensions: false,
            autoFormat: true,
            autoHideDialCode: false,
            autoPlaceholder: true,
            defaultCountry: "ru",
            nationalMode: false,
            numberType: "MOBILE",
            onlyCountries: ['ru'],
            utilsScript: "/templates/newstyle/js/utils_tel.js"
        });
    </script>
    <script>
        $("#phone6").intlTelInput({
            allowExtensions: false,
            autoFormat: true,
            autoHideDialCode: false,
            autoPlaceholder: true,
            defaultCountry: "ru",
            nationalMode: false,
            numberType: "MOBILE",
            onlyCountries: ['ru'],
            utilsScript: "/templates/newstyle/js/utils_tel.js"
        });
    </script>
    <script>
        $("#phone7").intlTelInput({
            allowExtensions: false,
            autoFormat: true,
            autoHideDialCode: false,
            autoPlaceholder: true,
            defaultCountry: "ru",
            nationalMode: false,
            numberType: "MOBILE",
            onlyCountries: ['ru'],
            utilsScript: "/templates/newstyle/js/utils_tel.js"
        });
    </script>
    <script src="./index_files/classie.js"></script>
    <script src="./index_files/modalEffects.js"></script>
    <script src="./index_files/cssParser.js"></script>
</body></html>