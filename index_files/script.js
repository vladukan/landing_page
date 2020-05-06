// $( document ).ready(function() {
// // 	if(jQuery('.btn').hasClass('.btn.nou')) {
// //     alert('click on Nou');
// // } else if(jQuery('.btn').hasClass('.btn.yes')) {
// //     alert('click on Yes');
// // }


// // $(".btn").click(function(event){
// //   if($(this).prop("id") == "nou"){
// //     alert('click on Nou');
// //   }
// //   else {
// //    alert('click on Yes');
// //   }
// //  });
// });
$( document ).ready(function() {
$( ".openform" ).click(function() {
  $( ".b-comments__form" ).slideToggle( "slow", function() {
    return false;
  });
});
if(window.location.pathname=='/%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B'){
    $(".header").find('a[href="/Контакты"]').parent().addClass('active');
}
if(window.location.pathname=='/%D0%9E_%D0%BD%D0%B0%D1%81'){
    $(".header").find('a[href="/О_нас"]').parent().addClass('active');
}
if(window.location.pathname=='/%D0%9D%D0%B5%D0%B8%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8'){
    $(".header").find('a[href="/Неисправности"]').parent().addClass('active');
}
if(window.location.pathname=='/%D0%9A%D1%83%D1%80%D1%8C%D0%B5%D1%80'){
    $(".header").find('a[href="/Курьер"]').parent().addClass('active');
}
if(window.location.pathname=='/%D0%A1%D0%BA%D0%B8%D0%B4%D0%BA%D0%B8'){
    $(".header").find('a[href="/Скидки"]').parent().addClass('active');
}
if(window.location.pathname=='/%D0%A6%D0%B5%D0%BD%D1%8B'){
    $(".header").find('a[href="/Цены"]').parent().addClass('active');
}





});