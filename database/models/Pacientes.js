module.exports = function(sequelize,dataTypes){
    let alias = "paciente"
    let cols = {
        idPacientes: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        nombre : {
            type: dataTypes.STRING(45)
        },
        apellido:{
            type: dataTypes.STRING(45)
        },
        dni:{
            type: dataTypes.INTEGER(8),
        },
        telefono: {
            type: dataTypes.INTEGER(11)  
        },
        obra_social: {
            type: dataTypes.STRING(45)
        },
        numeroObraSocial: {
            type: dataTypes.BIGINT(50)
        },
        fechaDeNacimiento: {
            type: dataTypes.DATEONLY
        },
        domicilio: {
            type: dataTypes.STRING(45)
        }
    };
    let config = {
        timestamps: false
    };
    const Paciente = sequelize.define(alias,cols,config)
    Paciente.associate = function(models) {
        Paciente.hasMany(models.observacione, {
            as: "observaciones",
            foreignKey: "ID_paciente"
        });
    };
    return Paciente
}