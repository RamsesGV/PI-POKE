const validate = (value, pokemon) => { 
    const errors ={} 
    if(value.name) { 
        const namePoke = value.name.split (" ")
        if(!/^[ a-zA-Z ]+$/.test(value.name) || !value.name || namePoke.length > 1)
        errors.name = 'only letters expected '
        if(
            pokemon?.some(
                (pk)  => pk.name.toLowerCase() === value.name.toLowerCase()
            )
        )
        errors.name = 'this pokemon already exists'
        if(value.name.length > 20 )
        errors.name = 'cannot be longer than 20 characters'
    }

    if(value.hp) { 
        if(
            value.hp < 1 || value.hp >255 ||!Number.isInteger(parseFloat(value.hp))
        )
        errors.hp = 'has to be from 1 to 255 hp points!'
    }
    if( value.attack) { 
        if(
            value.attack < 1 || value.attack > 190 || !Number.isInteger(parseFloat(value.attack))

        )
        errors.attack = 'attack has to be from 1 to 190 atk points! '

    }
    if (value.defense) {
        if (
        value.defense < 1 ||
        value.defense > 250 ||
        !Number.isInteger(parseFloat(value.defense))
        )
        errors.defense = "Defense must be between 1-250";
    }
    if (value.speed) {
        if (
        value.speed < 1 ||
        value.speed > 200 ||
        !Number.isInteger(parseFloat(value.speed))
        )
        errors.speed = "Speed must be between 1-200";
    }
    if (value.height) {
        if (
        value.height < 1 ||
        value.height > 200 ||
        !Number.isInteger(parseFloat(value.height))
        )
        errors.height = "Height must be between 1-200";
    }
    if (value.weight) {
        if (value.weight < 1 || value.weight > 1000)
        errors.weight = "Weight must be between 1-1000";
    }
    if (value.types) {
        if (!value.types.length || value.types.length > 2)
        errors.types = "You need at least 1 type";
        else {
        errors.types = false;
        }
    }
    if (value.img) {
        if (!value.img.startsWith("http://") && !value.img.startsWith("https://")) {
        errors.img = "URL de imagen inválida";
        }
    }
    return errors;

    
    }

    
    
    export default validate;
