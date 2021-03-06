var $              = require('jquery'),
    FastClick      = require('fastclick'),
    tab            = require('bootstrap.tab'),
    collapse       = require('bootstrap.collapse'),
    tooltip        = require('bootstrap.tooltip'),
    popover        = require('bootstrap.popover'),
    dropdown       = require('bootstrap.dropdown'),
    dropify        = require('dropify'),
    simpleSelector = require('./vendors/jquery.simple-selector'),
    fancybox       = require('./vendors/jquery.fancybox.pack'),
    datepicker     = require('./vendors/datepicker'),
    ScrollTop      = require('./vendors/ScrollTop'),
    select2        = require('select2');

require('select2.fr');

$(document).ready(function(){
    $(".selector").simpleSelector();

    $('input[type="file"]').dropify();

    $('.nav-tabs li:not(.disabled) a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('.collapse').collapse();

    $('.has-tooltip, [data-toggle="tooltip"]').tooltip({ container: 'body' });
    $('.has-popover, [data-toggle="popover"]').popover({ trigger: 'hover' });

    $('.dropdown-toggle, [data-toggle="dropdown"]').dropdown();

    $(".fancybox").fancybox({
        padding: 0,
        nextEffect: 'fade',
        prevEffect: 'fade',
        tpl: {
            closeBtn: '<a title="Fermer" class="fancybox-item fancybox-close" href="javascript:;">&times;</a>',
            prev: '<a title="Précédent" class="fancybox-nav fancybox-prev" href="javascript:;"><span>&larr;</span></a>',
            next: '<a title="Suivant" class="fancybox-nav fancybox-next" href="javascript:;"><span>&rarr;</span></a>'
        },
        helpers: {
            title: { type: 'over' }
        }
    });

    new ScrollTop();

    $('.filters-button').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 300, 'easeInOutExpo');
    });

    $('[datepicker], .input-group.date').datepicker({
        language: "fr",
        todayHighlight: true
    });

    $(".select2").select2();

    $('.sidebar nav').find('a').on('click', function(e){
        if ($(this).siblings('ul').length > 0) {
            e.preventDefault();
            $(this).parent().toggleClass('opened');
        }
    });

    $('.sidebar nav').find('li.active').parents('li').each(function(){
        $(this).addClass('opened');
    });

    $('.sidebar nav').find('li').each(function(){
        if ($(this).children('ul').length > 0) {
            $(this).children('a').append('<span class="submenu-icon"></span>');
        }
    });

    if($('.page-title').length > 0) {
        if ($('.page-title').find('.breadcrumb').length > 0) {
            $('.page-title').addClass('has-breadcrumb hover');
        }
        $('.page-title-mobile').html($('.page-title').html());
        $('.page-title-mobile').find('.breadcrumb').remove();
    }

    $('.mobile-nav-toggle').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.sidebar').toggleClass('active');
        $('body').toggleClass('nav-opened');
    });

    if($('.navbar').find('.list-actions').length > 0 && $('.list-actions-mobile').length > 0) {
        $('.list-actions-mobile').html($('.navbar').find('.list-actions').html());
    }

    $('.fullscreen-btn').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('fullscreen');
        $(this).toggleClass('active');
    });

});

$(window).load(function(){
    setTimeout(function() {
        $('.page-title').removeClass('hover');
    }, 1500);

    if($('#loading').length > 0) {
        $('#loading').delay(200).fadeOut(400);
        $('body').removeClass('loading');
    }
});
