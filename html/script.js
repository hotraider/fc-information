fivemac = {}

$(function() {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })

    $("#yazi").click(function() {
        let inputValue = $("#yazi").val()
        return;
    })
})

$(document).on('keydown', function() {
    switch (event.keyCode) {
        case 27:
            fivemac.Close();
            break;
    }
});

fivemac.Close = function() {
    $("#container").fadeOut(175);
    $.post('http://fc-information/close');
}


$("#exit").click(function() {
    fivemac.Close();

});