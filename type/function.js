var a = {a: 1,b: {d: {e: 2}},c: {d: 'hh'}}
var b = JSON.stringify(a, null, 1)
var c = JSON.stringify(a, null, 4)
JSON.parse(b, (k, v) => {
  console.log(k, v)
})
