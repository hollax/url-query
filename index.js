var encode = function (data, encoded, base) {
	var encoded = encoded || [];
	
    for (var key in data) {
        var val = data[key];

        var isObject = val &&  typeof val === 'object' ;
        

        if (isObject) {
			var k = base? base+'['+key+']' : key;
            encode(val, encoded, k);
        } else {
            var _val = encodeURIComponent(val)
            var query = base ? base + '[' + key + ']=' + _val : key + '=' + _val;
            encoded.push(query);
        }
    }

    return encoded.join('&');
}

module.exports = encode;