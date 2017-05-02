var a = new Proxy({}, {
  get (target, key, receiver) {
    console.log(key)
    return target[key]
  }
})
a.b = 1
a.c = 2
var m = a.b
console.log('-')
var n = a.c
