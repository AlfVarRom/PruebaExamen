window.onload = getShoes();

// Obtener todos los zapatos
function getShoes() {
    $.ajax({
        url: "http://localhost:3000/libros",
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                $('<h2>' + data[i].titulo + '</h2>')
                    .appendTo($('#list'));
                $('<strong> Autor: </strong> ' + data[i].autor + '<br>').appendTo(
                    $('#list'));
                $('<strong> Editorial: </strong> ' + data[i].editorial + '<br>').appendTo(
                    $('#list'));
                $('<strong> Lengua: </strong> ' + data[i].lengua + '<br>').appendTo($('#list'));
                $('<strong> Tematica: </strong> ' + data[i].tematica + '<br>').appendTo($('#list'));
                $('<strong> Descripcion: </strong> ' + data[i].descripcion + '<br>').appendTo($('#list'));
                $('<br> <br>').appendTo($('#list'));
                $('<paper-button id=' + data[i]._id + ' class="coloredDelete" raised="true" role="button" onclick="deletef(id)">DELETE</paper-button>').appendTo($('#list'));
               // $('<paper-button id=' + data[i]._id + ' class="coloredDelete" raised="true" role="button" onclick="updatef()">UPDATE</paper-button> <hr>').appendTo($('#list'));

            }
        },
        error: function () {
            window.alert("FAIL");
        }
    });
}

function deletef(_id) {
    var url = "http://localhost:3000/libro/" + _id;
    $.ajax({
        url: url,
        type: 'DELETE',
        crossDomain: true,
        success: function (data) {
            $('#list').html("");
            getShoes();
        },
        error: function (err) {
            window.alert("FAIL");
        }
    });
}

function updatef(){
    window.location.href = "update.html"
}

function postf(){
    window.location.href = "post.html"
}

function buscarf(){
    window.location.href = "getsBy.html"
}

