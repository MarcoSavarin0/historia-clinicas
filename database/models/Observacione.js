module.exports = function(sequelize,dataTypes){
    let alias = "observacione"
    let cols = {
        idobservaciones: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        ID_paciente: {
            type: dataTypes.INTEGER(11)
        },
        fecha_visita: {
            type: dataTypes.DATEONLY
        },
        descripcion: {
            type: dataTypes.TEXT
        }
    }
    let config = {
        timestamps: false
    };
    const observaciones = sequelize.define(alias,cols,config)
    observaciones.associate = function(models) {
        observaciones.belongsTo(models.paciente, {
            as: "paciente",
            foreignKey: "ID_paciente"
        });
    };
    return observaciones
}