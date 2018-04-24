let delay;
let callbackWrapper;
let scrollCallback = function (callback) {
  if(delay){
    clearTimeout(delay);
  }
  // 网页所有内容的高度-（屏幕可视区域的高度 + 垂直滚动距离）
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (document.documentElement.scrollHeight - (window.innerHeight + scrollTop) <= 2) {
    delay = setTimeout(() => {
      callback && callback();
    }, 500);
  }
}

export default {
  // 钩子函数
  bind (el, binding) {
    callbackWrapper = scrollCallback.bind({}, binding.value);
    window.addEventListener('scroll', callbackWrapper);
  },
  // 路由转跳到其他页面时，会调用unbind，解绑滚动加载事件
  unbind (el, binding) {
    window.removeEventListener('scroll', callbackWrapper);
  }
}