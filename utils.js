function parseDate(timestamp) {
  let date = new Date(timestamp)
  let year = date.getFullYear()
  let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  let hh = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  let mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + ss
}

function debounce(method, time) {
  var timer = null
  return function () {
    var context = this
    //在函数执行的时候先清除timer定时器;
    clearTimeout(timer)
    timer = setTimeout(function () {
      method.call(context)
    }, time)
  }
}
