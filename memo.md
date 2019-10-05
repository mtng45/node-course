# Asynchronous Node.js
## なぜ `setTimeout(() => {}, 0)` が、後に処理されるのか

```javascript
console.log('starting up')

setTimeout(() => {
  console.log('two seconds!')
}, 2000)

setTimeout(() => {
  console.log('zero seconds!')
}, 0)

console.log('finishing up')
```
`setTimeout` が `Call Stack` に入ると 別スレッドの `Node APIs` で待たされる。その間、空いた `Call Stack` に次の関数が入るので `setTimeout` が `0` でも次の関数が実行される。  

さらに `Node APIs` から `Callback Queue` へ push され、 `Call Stack` が空になるまで待たさせる。
その結果、`finishing up` が先に表示される。


```
// console
starting up
finishing up
zero second!
two second!
```

- Call Stack
- Node APIs
- Callback Queue  
  - Event Loop