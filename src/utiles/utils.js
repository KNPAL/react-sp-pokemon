
export const firstWordCapital = (input) => {
    if(!!input){
        if (input.length === 0) return input;

        const first = input.substring(0, 1).toLocaleUpperCase();
        if (input.length === 1) return first;
        if (input.indexOf('-') !== -1) {
            return input
                .split('-')
                .map((chunk) => firstWordCapital(chunk))
                .join('-');
        }
        return `${first}${input.substring(1)}`;
    }else{
        return ''
    }
   
};

export const formateId = (id) => {
    if (id > 99) return id;
    if (id > 9) {
        return '0' + id;
    } else {
        return '00' + id;
    }
};

export const commaSepratedArrayValue = (inputArray) => {
    if (inputArray?.length === 0) return '';
    let returnStr = '';
    inputArray.forEach(element => {
        returnStr += element + ', ';
    });
    return returnStr.substring(0, returnStr.lastIndexOf(', '));
};




