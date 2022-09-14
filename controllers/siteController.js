const db = require('../database/models');

module.exports = {
    index(request, response){
        let inscriptos = db.Inscriptos.findAll().then((inscriptos) => {
            return inscriptos;
        });

        let randomInscripto = (inscriptos) => {
            return setTimeout(()=>{
                console.log('hola');
            },2000)
        }

        Promise.all([inscriptos]).then(([inscriptos]) => {
            return response.render('index',{inscriptos, randomInscripto});
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