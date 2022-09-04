
function query(data){

    /**
     * Generate query string recursively
     * 
     * @param {mixed} data 
     * @param {Array} formatedStr 
     * @param {String} _base 
     * 
     * @returns {String}
     */
    function generate(data, formatedStr = [], _base) {
        let dataType = typeof data;

        if(dataType === 'string' || dataType === 'number'){
            return data;
        }

        for (let key in data) {
            let val = data[key];
            let isObject = val &&  typeof val === 'object' ;
            
            if (isObject) {
                let current = _base? _base+'['+key+']' : key;
                generate(val, formatedStr, current);
            } else {
                let _val = encodeURIComponent(val);
                let query = _base ? _base + '[' + key + ']=' + _val : key + '=' + _val;
                formatedStr.push(query);
            }
        }
    
        return formatedStr.join('&');
    }

    return generate(data);
};

module.exports = query;