// Node.js API
setTimeout(() => {
  console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => name.length < 4)

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    }
    callback(data)
  }, 2000)
}

/**
 * const data = geocode('Philadelphia')
 * geocode 関数は、setTimeout だけしかないので、callstack が empty になり、data が undefined になる
 * 第２引数に callback 関数を入れ、geocode 内で実行
 * 値を返す代わりにコールバックを取り、setTimeout で返ってきた値でコールバックを呼び出す
 * これにより、return文と同じ目標が達成される
 */

const data = geocode('Philadelphia', (data) => {
  console.log(data)
})

/**
 * ある種の非同期プロセスをシュミレートするために、単純な setTimeout callback に固執する
 */

const add = (x, y, callback) => {
  setTimeout(() => {
    // addからではなく、この内部関数から戻ってくるので、ここで return を使用することはできない
    const sum = x + y
    callback(sum)
  }, 2000)
}

add(1, 4, (sum) => {
  console.log(sum) // Should print: 5
})
