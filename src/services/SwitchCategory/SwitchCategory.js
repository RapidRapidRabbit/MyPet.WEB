
const switchCategory = (data) => {

    switch(data){
        case 'Found':
            return "Найден";
        case 'Lost':
            return "Потерян";
        default:
            return '';            
    }
}

export default switchCategory;