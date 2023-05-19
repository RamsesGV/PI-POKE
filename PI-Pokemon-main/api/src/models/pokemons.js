const { DataTypes } = require('sequelize')

module.exports = (sequelize) => { 
    sequelize.define('pokemons', { 
        ID: { 
            type: DataTypes.UUID,               
            defaultValue: DataTypes.UUIDV4,     
            primaryKey: true,
            allowNull : false,
        },
        Nombre: { 
            type:DataTypes.STRING,
            unique:true
        },
        Imagen:{ 
            isUrl: true,
            type:DataTypes.STRING,
            defaultValue: 'https://i.pinimg.com/564x/6f/2f/be/6f2fbe0544586164149f17357634c434.jpg'
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
        },
        CreatedInDb: { 
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true
        }
    },{timestamps:false})
}