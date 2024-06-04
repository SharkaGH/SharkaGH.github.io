$(document).ready(function() {
    var $WIP = "Work in progress...";

    function initWIP(i) {
        $("#wip").addClass("writeOut").text($WIP.substring(0, i));
        if (i < $WIP.length) {
            setTimeout(function() {
                initWIP(i + 1);
            }, 40);
        } else {
            // After finishing, you can add further actions here
            // setTimeout(function() {}, 1000);
        }
    }

    setTimeout(function() {
        initWIP(0);
    }, 2500);
});
