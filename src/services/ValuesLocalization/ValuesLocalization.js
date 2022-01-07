
export const changeCategory = (category) => {

    switch(category){
        case 'Found':
            return "Найден";
        case 'Lost':
            return "Потерян";
        default:
            return 'Неизвестно';            
    }
}

export const changeRegion = (region) =>{

    switch(region){
        case 'Brest':
            return "Брестская";
        case 'Minsk':
            return "Минская";
        case 'Gomel':
            return "Гомельская";
        case 'Grodno':
            return "Гродненская";
        case 'Mogilev':
            return "Могилевская";
        case 'Vitebsk':
            return "Витебская";    
        default:
            return 'Неизвестно';            
    }
}
