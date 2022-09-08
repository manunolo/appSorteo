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
            type: DataTypes.STRING(100)
        },
        apellido: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(100)
        },
    }, {
        tableName: 'inscriptos',
        timestamps: false
    })
};