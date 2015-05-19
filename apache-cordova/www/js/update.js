window.onload = gets();

function gets() {
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
                $('<strong> Descripcion: </strong> ' + data[i].descripcion + '<br>').appendTo($('#list'))
                $('<strong> ID: </strong> ' + data[i]._id + '<br>').appendTo($('#list'));
                $('<br> <br>').appendTo($('#list'));
            }
        },
        error: function () {
            window.alert("FAIL");
        }
    });
}

// --------------------------------------------------------------------------------------------------
// UPDATE

var colorTags = ["Fantasia","Aventura","Cientifico","Comics","Infantiles"];

document.querySelector("#FantBtn").addEventListener('change', function () {
    if (this.checked) {
        var index = colorTags.indexOf("Fantasia");
        if (index > -1) {
        } else {
            colorTags.push("Fantasia");
        }
    } else {
        var index = colorTags.indexOf("Fantasia");
        if (index > -1) {
            colorTags.splice(index, 1);
        }
    }
});

document.querySelector("#AventBtn").addEventListener('change', function () {
    if (this.checked) {
        var index = colorTags.indexOf("Aventura");
        if (index > -1) {
        } else {
            colorTags.push("Aventura");
        }
    } else {
        var index = colorTags.indexOf("Aventura");
        if (index > -1) {
            colorTags.splice(index, 1);
        }
    }
});

document.querySelector("#CientBtn").addEventListener('change', function () {
    if (this.checked) {
        var index = colorTags.indexOf("Cientifico");
        if (index > -1) {
        } else {
            colorTags.push("Cientifico");
        }
    } else {
        var index = colorTags.indexOf("Cientifico");
        if (index > -1) {
            colorTags.splice(index, 1);
        }
    }
});

document.querySelector("#ComicBtn").addEventListener('change', function () {
    if (this.checked) {
        var index = colorTags.indexOf("Comics");
        if (index > -1) {
        } else {
            colorTags.push("Comics");
        }
    } else {
        var index = colorTags.indexOf("Comics");
        if (index > -1) {
            colorTags.splice(index, 1);
        }
    }
});

document.querySelector("#InfanBtn").addEventListener('change', function () {
    if (this.checked) {
        var index = colorTags.indexOf("Infantiles");
        if (index > -1) {
        } else {
            colorTags.push("Infantiles");
        }
    } else {
        var index = colorTags.indexOf("Infantiles");
        if (index > -1) {
            colorTags.splice(index, 1);
        }
    }
});
$("#putBtn").click(function () {
    putf();
});

// Put
function putf() {
    var ID = $("#id").val();

    if (ID != "") {
        var titulo = $("#titulo").val();
        var autor = $("#autor").val();
        var editorial = $("#editorial").val();
        var lengua = $("#lengua").val();
        var descripcion = $("#descripcion").val();

        var libro = new Object();
        if (titulo != "")
            libro.titulo = titulo;
        if (autor != "")
            libro.autor = autor;
        if (editorial != "")
            libro.editorial = editorial;
        if (lengua != "")
            libro.lengua = lengua;
        if (colorTags.length > 0)
            libro.tematica = colorTags;
        if (descripcion != "")
            libro.descripcion = descripcion;

        var data = JSON.stringify(libro);

        var url = "http://localhost:3000/libro/" + ID;

        $.ajax({
            url: url,
            type: 'PUT',
            crossDomain: true,
            contentType: 'application/json',
            data: data,
            success: function (data) {
                window.location.reload();
            },
            error: function () {
                window.alert("FAIL");
            }
        });
    } else {
        window.alert("Debes poner un ID");
    }
}


function iciniof(){
    window.location.href = "index.html"
}