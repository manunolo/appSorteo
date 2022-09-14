module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Inscriptos', {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.STRING,
        },
        mail: {
            type: DataTypes.STRING,
        },
        celular: {
            type: DataTypes.BIGINT,
        },
        escuela: {
            type: DataTypes.STRING,
        },
        cargo: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'inscriptos',
        timestamps: false
    })
};