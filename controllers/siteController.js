const db = require('../database/models');

module.exports = {
    index(request, response){
        let inscriptos = db.Inscriptos.findAll().then((inscriptos) => {
            return inscriptos;
        });

        Promise.all([inscriptos]).then(([inscriptos]) => {
            return response.render('index',{inscriptos});
        });
    },
    registro(request, response){
        response.render('registro');
    },
    finInscripcion(request, response){
        response.render('finInscripcion',{nombre : ''});
    },
    addInscripto(request, response){
        db.Inscriptos.create(request.body).then((inscripto)=>{
            return response.render('finInscripcion',{
                nombre : inscripto.nombre
            })
        });
    },
};