(function(win, $) {
    'use strict';

    var $authors = $('.authors');

    $('#expand').on('click', function(e) {
        $(e.target).toggleClass('icon-ellipsis').toggleClass('icon-resize-small');
        $authors.toggleClass('show');
        return false;
    });

    $('.show-answer').on('click', function() {
        $(this).toggleClass('teal').toggleClass('blue').siblings('.answer').toggleClass('show');
        return false;
    });

    $('.icon-success').hide();
    $('.icon-close').hide();

    $('input[type="radio"]').on('change', function() {
        var $this = $(this);
        var group = $this.attr('name');
        var isCorrect = typeof $this.attr('correct') !== 'undefined';
        if (isCorrect) {
            $this.siblings('.icon-success').show();
            $this.siblings('.icon-close').hide();
        } else {
            $this.siblings('.icon-success').hide();
            $this.siblings('.icon-close').show();
        }
        return false;
    });

    $('.modal-trigger').leanModal();

}(this, jQuery));
