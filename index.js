
var query = function(data){

    function generate(data, formatedStr = [], _base) {
        var dataType = typeof data;

        if(dataType === 'string' || dataType === 'number'){
            return data;
        }
        for (var key in data) {
            var val = data[key];
    
            var isObject = val &&  typeof val === 'object' ;
            
            if (isObject) {
                var k = _base? _base+'['+key+']' : key;
                generate(val, formatedStr, k);
            } else {
                var _val = encodeURIComponent(val);
                var query = _base ? _base + '[' + key + ']=' + _val : key + '=' + _val;
                formatedStr.push(query);
            }
        }
    
        return formatedStr.join('&');
    }

    return generate(data);
};

module.exports = query;