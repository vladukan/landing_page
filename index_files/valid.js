jQuery().ready(function () {
    jQuery.mask.definitions['r'] = '[а-яА-Я\ ]'; // маска на имя
    // $("input[name=tele]").mask("+9 (999) 999-99-99",{placeholder:"_"});
    jQuery("input[name=name]").mask("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", {placeholder: ""});


/* онлайн заявка */

    var validator = jQuery('form#smallform').validate({
        rules: {

            tele: {
                required: true,
                minlength: 16,
                maxlength: 16
            }
        },
        messages: {
            tele: {
                required: "Некоректно введен телефон",
                minlength: "Некоректно введен телефон",
                maxlength: "Некоректно введен телефон"

            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
    });
    jQuery(document).on('keyup', 'form#smallform input', function () {
        validator.element(jQuery(this));
    });


    jQuery("form#smallform").submit(function (_e) {
        _e.preventDefault();
        if (validator.valid()) {
            jQuery.ajax({
                url: "/templates/newstyle/smallform.php",
                type: "POST",
                data: {
                    tele: jQuery('form#smallform input[name=tele]').val()
                },
                timeout: 3000,
                beforeSend: function () {
                },
                success: function (data) {
                    jQuery("form#smallform .BlockForm").hide();
                    jQuery("form#smallform #aftersend").fadeIn();
                     setInterval(formshow, 5000);
                     function formshow() {

                            jQuery('form#smallform input[name=tele]').val("").removeClass("valid")
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    jQuery('.errorBlock').html('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                }
            });
        }
    });


    var validator2 = jQuery('form#bigform').validate({
        rules: {

            tele: {
                required: true,
                minlength: 16,
                maxlength: 16
            },
            name: {
                required: true
            }
        },
        messages: {
            tele: {
                required: "Некоректно введен телефон",
                minlength: "Некоректно введен телефон",
                maxlength: "Некоректно введен телефон"

            },
             name: {
                required: "Некоректно введен имя"

            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
    });
    jQuery(document).on('keyup', 'form#bigform input', function () {
        validator2.element(jQuery(this));
    });


    jQuery("form#bigform").submit(function (_e) {
        _e.preventDefault();
        if (validator2.valid()) {
            jQuery.ajax({
                url: "/templates/newstyle/bigform.php",
                type: "POST",
                data: {
                    tele: jQuery('form#bigform input[name=tele]').val(),
                    name: jQuery('form#bigform input[name=name]').val()
                },
                timeout: 3000,
                beforeSend: function () {
                },
                success: function (data) {
                    jQuery("form#bigform .BlockForm").hide();
                    jQuery("form#bigform #aftersend").fadeIn();
                     setInterval(formshow, 5000);
                     function formshow() {

                            jQuery('form#bigform input[name=tele]').val("").removeClass("valid"),
                            jQuery('form#bigform input[name=name]').val("").removeClass("valid")
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    jQuery('.errorBlock').html('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                }
            });
        }
    });
    
    var validator3 = jQuery('form#zvonokform').validate({
        rules: {

            tele: {
                required: true,
                minlength: 16,
                maxlength: 16
            },
            name: {
                required: true
            }
        },
        messages: {
            tele: {
                required: "Некоректно введен телефон",
                minlength: "Некоректно введен телефон",
                maxlength: "Некоректно введен телефон"

            },
             name: {
                required: "Некоректно введен имя"

            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
    });
    jQuery(document).on('keyup', 'form#zvonokform input', function () {
        validator3.element(jQuery(this));
    });


    jQuery("form#zvonokform").submit(function (_e) {
        _e.preventDefault();
        if (validator3.valid()) {
            jQuery.ajax({
                url: "/templates/newstyle/zvonokform.php",
                type: "POST",
                data: {
                    tele: jQuery('form#zvonokform input[name=tele]').val(),
                    name: jQuery('form#zvonokform input[name=name]').val()
                },
                timeout: 3000,
                beforeSend: function () {
                },
                success: function (data) {
                    jQuery("form#zvonokform .BlockForm").hide();
                    jQuery("form#zvonokform #aftersend").fadeIn();
                     setInterval(formshow, 5000);
                     function formshow() {

                            jQuery('form#zvonokform input[name=tele]').val("").removeClass("valid"),
                            jQuery('form#zvonokform input[name=name]').val("").removeClass("valid")
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    jQuery('.errorBlock').html('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                }
            });
        }
    });

     var validator4 = jQuery('form#zakaz_modal').validate({
        rules: {

            tele: {
                required: true,
                minlength: 16,
                maxlength: 16
            },
            name: {
                required: true
            }
        },
        messages: {
            tele: {
                required: "Некоректно введен телефон",
                minlength: "Некоректно введен телефон",
                maxlength: "Некоректно введен телефон"

            },
             name: {
                required: "Некоректно введен имя"

            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
    });
    jQuery(document).on('keyup', 'form#zakaz_modal input', function () {
        validator4.element(jQuery(this));
    });


    jQuery("form#zakaz_modal").submit(function (_e) {
        _e.preventDefault();
        if (validator4.valid()) {
            jQuery.ajax({
                url: "/templates/newstyle/zakaz_modal.php",
                type: "POST",
                data: {
                    tele: jQuery('form#zakaz_modal input[name=tele]').val(),
                    name: jQuery('form#zakaz_modal input[name=name]').val()
                },
                timeout: 3000,
                beforeSend: function () {
                },
                success: function (data) {
                    jQuery("form#zakaz_modal .BlockForm").hide();
                    jQuery("form#zakaz_modal #aftersend").fadeIn();
                     setInterval(formshow, 5000);
                     function formshow() {

                            jQuery('form#zakaz_modal input[name=tele]').val("").removeClass("valid"),
                            jQuery('form#zakaz_modal input[name=name]').val("").removeClass("valid")
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    jQuery('.errorBlock').html('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                }
            });
        }
    });


 var validator5 = jQuery('#modal-n0 form#zakaz_modal').validate({
        rules: {

            tele: {
                required: true,
                minlength: 16,
                maxlength: 16
            },
            name: {
                required: true
            }
        },
        messages: {
            tele: {
                required: "Некоректно введен телефон",
                minlength: "Некоректно введен телефон",
                maxlength: "Некоректно введен телефон"

            },
             name: {
                required: "Некоректно введен имя"

            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
    });
    jQuery(document).on('keyup', '#modal-n0 form#zakaz_modal input', function () {
        validator5.element(jQuery(this));
    });


    jQuery("#modal-n0 form#zakaz_modal").submit(function (_e) {
        _e.preventDefault();
        if (validator5.valid()) {
            jQuery.ajax({
                url: "/templates/newstyle/zamena.php",
                type: "POST",
                data: {
                    tele: jQuery('#modal-n0 form#zakaz_modal input[name=tele]').val(),
                    name: jQuery('#modal-n0 form#zakaz_modal input[name=name]').val()
                },
                timeout: 3000,
                beforeSend: function () {
                },
                success: function (data) {
                    jQuery("#modal-n0 form#zakaz_modal .BlockForm").hide();
                    jQuery("#modal-n0 form#zakaz_modal #aftersend").fadeIn();
                     setInterval(formshow, 5000);
                     function formshow() {

                            jQuery('#modal-n0 form#zakaz_modal input[name=tele]').val("").removeClass("valid"),
                            jQuery('#modal-n0 form#zakaz_modal input[name=name]').val("").removeClass("valid")
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    jQuery('.errorBlock').html('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                }
            });
        }
    });



var validator7 = jQuery('#modal-n2 form#zakaz_modal').validate({
        rules: {

            tele: {
                required: true,
                minlength: 16,
                maxlength: 16
            },
            name: {
                required: true
            }
        },
        messages: {
            tele: {
                required: "Некоректно введен телефон",
                minlength: "Некоректно введен телефон",
                maxlength: "Некоректно введен телефон"

            },
             name: {
                required: "Некоректно введен имя"

            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
    });
    jQuery(document).on('keyup', '#modal-n1 form#zakaz_modal input', function () {
        validator7.element(jQuery(this));
    });


    jQuery("#modal-n2 form#zakaz_modal").submit(function (_e) {
        _e.preventDefault();
        if (validator7.valid()) {
            jQuery.ajax({
                url: "/templates/newstyle/client.php",
                type: "POST",
                data: {
                    tele: jQuery('#modal-n2 form#zakaz_modal input[name=tele]').val(),
                    name: jQuery('#modal-n2 form#zakaz_modal input[name=name]').val()
                },
                timeout: 3000,
                beforeSend: function () {
                },
                success: function (data) {
                    jQuery("#modal-n2 form#zakaz_modal .BlockForm").hide();
                    jQuery("#modal-n2 form#zakaz_modal #aftersend").fadeIn();
                     setInterval(formshow, 5000);
                     function formshow() {

                            jQuery('#modal-n2 form#zakaz_modal input[name=tele]').val("").removeClass("valid"),
                            jQuery('#modal-n2 form#zakaz_modal input[name=name]').val("").removeClass("valid")
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    jQuery('.errorBlock').html('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                }
            });
        }
    });



var validator6 = jQuery('#modal-n1 form#zakaz_modal').validate({
        rules: {

            tele: {
                required: true,
                minlength: 16,
                maxlength: 16
            },
            name: {
                required: true
            }
        },
        messages: {
            tele: {
                required: "Некоректно введен телефон",
                minlength: "Некоректно введен телефон",
                maxlength: "Некоректно введен телефон"

            },
             name: {
                required: "Некоректно введен имя"

            }
        },
        errorPlacement: function (error, element) {
            return true;
        },
    });
    jQuery(document).on('keyup', '#modal-n1 form#zakaz_modal input', function () {
        validator6.element(jQuery(this));
    });


    jQuery("#modal-n1 form#zakaz_modal").submit(function (_e) {
        _e.preventDefault();
        if (validator6.valid()) {
            jQuery.ajax({
                url: "/templates/newstyle/all.php",
                type: "POST",
                data: {
                    tele: jQuery('#modal-n1 form#zakaz_modal input[name=tele]').val(),
                    name: jQuery('#modal-n1 form#zakaz_modal input[name=name]').val()
                },
                timeout: 3000,
                beforeSend: function () {
                },
                success: function (data) {
                    jQuery("#modal-n1 form#zakaz_modal .BlockForm").hide();
                    jQuery("#modal-n1 form#zakaz_modal #aftersend").fadeIn();
                     setInterval(formshow, 5000);
                     function formshow() {

                            jQuery('#modal-n1 form#zakaz_modal input[name=tele]').val("").removeClass("valid"),
                            jQuery('#modal-n1 form#zakaz_modal input[name=name]').val("").removeClass("valid")
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    jQuery('.errorBlock').html('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.');
                }
            });
        }
    });





});