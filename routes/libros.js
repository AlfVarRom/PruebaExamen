/**
 * Created by Administrador on 08/05/2015.
 */
module.exports=function(app) {
    var Libro = require('../models/libros/SchemaLibros.js');

    //GET libros
    findAllLibros = function (req, res) {
        Libro.find(function (err, libros) {
            if (!err) {
                res.send(libros);
            }
            else {
                console.log('ERROR: ' + err);
            }
        });
    };

    //GET libro by id
    findLibro = function (req, res) {
        Libro.findOne({"_id": req.params._id}, function (err, libro) {
            if (!err) {
                res.send(libro);
            }
            else {
                console.log('ERROR: ' + err);
            }
        });
    }

    //DELETE Libro
    deleteLibro = function (req, res) {
        console.log('DELETE user');
        console.log(req.params._id);

        Libro.findOne({"_id": req.params._id}, function (err, libro) {
            libro.remove(function (err) {
                if (!err)
                    console.log('Removed');
                else {
                    console.log('ERROR' + err);
                }
            })
        });

        res.send('User removed');
    }

    //UPDATE Libro
    updateLibro = function (req, res) {
        console.log('UPDATE user');
        Libro.findOneAndUpdate({"_id": req.params._id}, req.body, function (err, libro) {
            console.log(libro._id);

            libro.set(function (err) {
                if (!err) {
                    console.log('Updated');
                }
                else {
                    console.log('ERROR' + err);
                }

            })
        });

        res.send('User Modified');
    }


    //POST Libro
    addLibro = function (req, res) {
        console.log('POST libro');
        console.log(req.body);

        Libro.findOne({titulo: req.body.titulo},function(err, libro){

            if (!libro){

                var libro = new Libro({
                    titulo: req.body.titulo,
                    autor: req.body.autor,
                    lengua: req.body.lengua,
                    tematica: req.body.tematica,
                    editorial: req.body.editorial,
                    descripcion: req.body.descripcion

                });
                libro.save(function (err) {

                    if (!err) {
                        console.log('libro added');
                    }
                    else {

                        console.log('ERROR', +err);
                    }
                })

                res.send(libro);

            }
            else{
                res.send('Libro existe!')
            }

        })
    }

    //Get de Libros por Tematica
    findByTematica = function (req, res) {
        Libro.findOne({"tematica": req.params.tematica}, function (err, libro) {
            if (!err) {
                res.send(libro);
            }
            else {
                console.log('ERROR: ' + err);
            }
        });
    }

    //GET libro by name
    findLibroByName = function (req, res) {
        Libro.findOne({"titulo": req.params.titulo}, function (err, libro) {
            if (!err) {
                res.send(libro);
            }
            else {
                console.log('ERROR: ' + err);
            }
        });
    }





    //endpoints
    app.get('/libros', findAllLibros);
    app.get('/libro/:_id', findLibro);
    app.post('/libro', addLibro);
    app.put('/libro/:_id', updateLibro);
    app.delete('/libro/:_id', deleteLibro);
    app.get('/libros/tematica/:tematica', findByTematica)
    app.get('/libros/titulo/:titulo', findLibroByName)


}