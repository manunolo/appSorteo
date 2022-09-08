const db = require('../database/models');

module.exports = {
    index(request, response){
        response.render('index');
    },
    registro(request, response){
        response.render('registro');
    },
    finInscripcion(request, response){
        response.render('finInscripcion');
    },
    addInscripto(request, response){
        db.Inscriptos.create(request.body).then((inscripto)=>{
            response.render('finInscripcion',{
                nombre : inscripto.nombre
            })
        });
    },
};