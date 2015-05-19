$("#getByTituloBtn").click(function () {
    getF();
});


function getF() {
    var namer = $("#titulo").val();
    var url = "http://localhost:3000/libros/titulo/" + namer;
    console.log(url);
    $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            $('#list').html("");
            $('<h2>' + data.titulo + '</h2>')
                .appendTo($('#list'));
            $('<strong> Autor: </strong> ' + data.autor + '<br>').appendTo(
                $('#list'));
            $('<strong> Editorial: </strong> ' + data.editorial + '<br>').appendTo(
                $('#list'));
            $('<strong> Lengua: </strong> ' + data.lengua + '<br>').appendTo($('#list'));
            $('<strong> Tematica: </strong> ' + data.tematica + '<br>').appendTo($('#list'));
            $('<strong> Descripcion: </strong> ' + data.descripcion + '<br>').appendTo($('#list'));
            $('<br> <br>').appendTo($('#list'));
        },
        error: function () {
            window.alert("FAIL");
        }
    });
}