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

$("#postShoeBtn").click(function () {
    postf();
});

// Post
function postf() {
    if (colorTags.length > 0) {
        var titulo = $("#titulo").val();
        var autor = $("#autor").val();
        var editorial = $("#editorial").val();
        var lengua = $("#lengua").val();
        var descripcion = $("#descripcion").val();

        var libro = new Object();
        libro.titulo = titulo;
        libro.autor = autor;
        libro.editorial = editorial;
        libro.lengua = lengua;
        libro.tematica = colorTags;
        libro.descripcion = descripcion;
        var data = JSON.stringify(libro);
        console.log(data);
        $.ajax({
            url: "http://localhost:3000/libro",
            type: 'POST',
            crossDomain: true,
            dataType: 'json',
            contentType: 'application/json',
            data: data,
            success: function (data) {
                window.alert("creado");
                window.location.href = "index.html"
            },
            error: function () {
                window.alert("FAIL: No se han cargado");
            }
        });
    }
    else {
        window.alert("Debes seleccionar alguna tematica");
    }
}


function iciniof(){
    window.location.href = "index.html"
}