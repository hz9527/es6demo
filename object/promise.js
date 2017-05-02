//promise 普通调用，只使用一次
// new Promisr ((next, errFn) => {
//   var a = 1
//   setTimeout(() => {
//     if (a === 1) {
//       next(2)
//     } else {
//       errFn(-1)
//     }
//   })
// }).then((res) => {
//   console.log(res, 'next')
// }, (res) => {
//   console.log(res, 'errFn')
// })


// promise 链式调用，对回调的同步回调，上一次回调return作为下一个then的res
// new Promise((next, errFn) => {
//   var a = 1
//   setTimeout(() => {
//     if (a === 1) {
//       next(a)
//     } else {
//       errFn(a)
//     }
//   }, 1000)
// }).then((res) => {
//   console.log(1, 'next')
//   return 5
// }, (res) => {
//   console.log(1, 'errFn')
// }).then((res) => {
//   console.log(2, res)
// })

// promise 异步链式调用
// new Promise((next, errFn) => {
//   var a = 1
//   setTimeout(() => {
//     if (a === 1) {
//       next(a)
//     } else {
//       errFn(a)
//     }
//   }, 1000)
// }).then((res) => {
//   console.log(2222)
//   return new Promise((next, errFn) => {
//     var b = 1
//     setTimeout(() => {
//       console.log(3333)
//       if (b === 1) {
//         next(5)
//       }
//     })
//   })
// }, (res) => {
//   console.log(1, 'errFn')
// }).then((res) => {
//   console.log(res)
// })

// promise catch reject
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(333)
//   }, 300)
// }).then((res) => {
//
// }, (res) => {
//   console.log(res, 'reject')
// }).catch((err) => {
//   console.log(err, 'catch') // not do
// })
//
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(333)
//   }, 300)
// }).then((res) => {
//   console.log(res, abc)
//   return 222
// }).catch((err) => {
//   console.log(err, 'catch') // abc is not defined
// })

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(333)
  }, 300)
}).then((res) => {
  return new Promise((resolve, reject) => {
    reject(555)
  })
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err, 'catch') // 555
})
