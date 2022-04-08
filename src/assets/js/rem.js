
function remFunc(){
  let _w = document.documentElement.clientWidth
  // 一般都是把屏幕分为10等份
  let font_size = _w / 10
  document.documentElement.style.fontSize = font_size + 'px'
}
// 初始化执行
remFunc()
// 监听屏幕发生改变
window.onresize = function(){
  remFunc()
}