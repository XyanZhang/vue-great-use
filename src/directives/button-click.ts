export default {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el: any, binding: any, vnode: any, prevVnode: any) {
    console.log('created', el, binding, vnode)
    // 下面会介绍各个参数的细节
    let fn = binding.value
    el.addEventListener('click', async function click() {
      console.log('我被点击了')
      console.log(el.attributes)
      console.log(el.setAttribute('disabled', true))
      await fn()
      console.log(el.removeAttribute('disabled'))
    })
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el: any, binding: any, vnode: any, prevVnode: any) {
    console.log('beforeMount', el, binding)
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el: any, binding: any, vnode: any, prevVnode: any) {
    console.log('mounted', el, binding)
  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el: any, binding: any, vnode: any, prevVnode: any) {
    console.log('beforeUpdate', el, binding)
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el: any, binding: any, vnode: any, prevVnode: any) {
    console.log('updated', el, binding)
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el: any, binding: any, vnode: any, prevVnode: any) {
    console.log('beforeUnmount', el, binding)
  },
  // 绑定元素的父组件卸载后调用
  unmounted(el: any, binding: any, vnode: any, prevVnode: any) {
    console.log('unmounted', el, binding)
  }
}
