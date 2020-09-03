import $ from './library/jquery.js'


$(function() {
    let reg = {
        "phone": /^1[3-9]\d{9}$/,
        "password": /^.{6,16}$/
    };


    $('#main-form input:not([type="button"])').each(function(index, elm) {
        $(elm).on('input', function() {
            if (reg[$(elm).attr('id')].test($(elm).val())) {
                $('span[class="' + $(elm).attr('id') + '"]').html('通过验证');
                $(this).attr('data-pass', true);
            } else {
                $('span[class="' + $(elm).attr('id') + '"]').html('未通过验证');
                $(this).attr('data-pass', false);
            }
            check();
        });
    });



    function check() {
        if ($('[data-pass=true]').length == 2) {
            $('#btn').removeAttr('disabled');
        } else {
            $('#btn').attr('disabled', 'disabled');
        }
    }

});