const { DataTypes } = require('sequelize')

module.exports = (sequelize) => { 
    sequelize.define('pokemons', { 
        ID: { 
            allowNul: false, 
            primaryKey: true,
            autoIncrement:true,
            type:DataTypes.INTEGER
        },
        Nombre: { 
            type:DataTypes.STRING,
            unique:true
        },
        Imagen:{ 
            isUrl: true,
            type:DataTypes.STRING
        },
        Vida: { 
            type: DataTypes.INTEGER,
            
        },
        Ataque: { 
            type: DataTypes.INTEGER,
        
        },
        Defensa: { 
            type: DataTypes.INTEGER,
            
        },
        Velocidad: { 
            type: DataTypes.INTEGER,
            
        },
        Altura: { 
            type: DataTypes.FLOAT
        },
        Peso: { 
            type: DataTypes.FLOAT
        }
    },{timestamps:false})
}