var stack_topleft = {
    "dir1": "down",
    "dir2": "right",
    "push": "top"
};
var stack_bottomleft = {
    "dir1": "right",
    "dir2": "up",
    "push": "top"
};
var stack_bottomright = {
    "dir1": "up",
    "dir2": "left",
    "firstpos1": 15,
    "firstpos2": 15
};
var stack_bar_top = {
    "dir1": "down",
    "dir2": "right",
    "push": "top",
    "spacing1": 0,
    "spacing2": 0
};
var stack_bar_bottom = {
    "dir1": "up",
    "dir2": "right",
    "spacing1": 0,
    "spacing2": 0
};
(function($) {
    'use strict';
    var clipboard = new Clipboard('.copy-button');
    clipboard.on('success', function(e) {
        $(e.trigger).tooltip('show');
    });
    $("#change-theme-black").click(function() {
        $("html").addClass("dark");
        $("body").css('background', 'url(../../assets/images/patterns/denim.png) repeat');
        Cookies.set('theme-dark', 'true', {
            expires: 365,
            sameSite: 'lax'
        });
    });
    $("#change-theme-white").click(function() {
        $("html").removeClass("dark");
        $("body").css('background', 'url(../../assets/images/patterns/gray_jean.png) repeat');
        Cookies.set('theme-dark', 'false', {
            expires: 365,
            sameSite: 'lax'
        });
    });
    $('.simple-ajax-modal').magnificPopup({
        type: 'ajax',
        modal: true
    });
    $(document).on('click', '.modal-dismiss', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
    $(document).on("click", ".modal-confirm", function(e, ui) {
        e.preventDefault();
        var form = $(this).closest("form");
        var reload = form.attr("reload");
        var url = form.attr("action");
        $.post(url, form.serialize(), function(data) {
            var json = $.parseJSON(data);
            if (json.error == 'success') {}
            if (reload) {
                location.reload(true);
            }
            $.magnificPopup.close();
        });
    });
}).apply(this, [jQuery]);

function convertSize(size) {
    var newSize = size.split(' ');
    if (typeof(newSize[0]) != 'undefined' && typeof(newSize[1]) != 'undefined') {
        if (size.search("K") != -1) {
            return (newSize[0] / 1024 * 1000).toFixed(1) + " " + newSize[1].replace('B', 'iB');
        } else if (size.search("M") != -1) {
            return (newSize[0] / 1024 / 1024 * 1000 * 1000).toFixed(1) + " " + newSize[1].replace('B', 'iB');
        } else if (size.search("G") != -1) {
            return (newSize[0] / 1024 / 1024 / 1024 * 1000 * 1000 * 1000).toFixed(1) + " " + newSize[1].replace('B', 'iB');
        }
        return (newSize[0] * 1).toFixed(1) + " " + newSize[1].replace('B', 'iB');
    } else {
        return size;
    }
}

function convertSizeInBytes(size) {
    var newSize = size.split(' ');
    if (typeof(newSize[0]) != 'undefined' && typeof(newSize[1]) != 'undefined') {
        if (size.search("KiB") != -1) {
            return (newSize[0] * 1024).toFixed(0);
        } else if (size.search("MiB") != -1) {
            return (newSize[0] * 1024 * 1024).toFixed(0);
        } else if (size.search("GiB") != -1) {
            return (newSize[0] * 1024 * 1024 * 1024).toFixed(0);
        }
        return (newSize[0] * 1).toFixed(0);
    } else {
        return size;
    }
}

function number_format(number, decimals, dec_point, thousands_sep) {
    var n = number,
        c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? "," : dec_point;
    var t = thousands_sep == undefined ? "." : thousands_sep,
        s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

function size_format(filesize) {
    if (filesize >= 1073741824) {
        filesize = number_format(filesize / 1073741824, 1, '.', '') + ' GiB';
    } else {
        if (filesize >= 1048576) {
            filesize = number_format(filesize / 1048576, 1, '.', '') + ' MiB';
        } else {
            if (filesize >= 1024) {
                filesize = number_format(filesize / 1024, 0) + ' KiB';
            } else {
                filesize = number_format(filesize, 0) + ' B';
            };
        };
    };
    return filesize;
}

function randString(n) {
    if (!n) {
        n = 5;
    }
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < n; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function basename(path) {
    return path.replace(/\\/g, '/').replace(/.*\//, '');
}

function dirname(path) {
    return path.replace(/\\/g, '/').replace(/\/[^\/]*$/, '');;
}