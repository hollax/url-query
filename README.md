[![Build Status](https://travis-ci.org/hollax/url-query.svg?branch=main)](https://travis-ci.org/hollax/url-query)

Javascript utility to convert data to query string


## Examples

Convert objects
```
const query = require('@hollax/url-query');
let data = { foo: 'bar' };

console.log(query(data)) //logs 'foo=bar'

```

Convert object with array

```
let data = { 
  name: 'Foo',
  age: 31,
  tags: ['bar', 'baz']
};

console.log(query(data)) //logs 'name=Foo&age=31&tags[0]=bar&tags[1]=baz'

