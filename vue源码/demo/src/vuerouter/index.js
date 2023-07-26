let _Vue = null
export default class VueRouter {
  static install (Vue) {
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true
    _Vue = Vue

    _Vue.mixin({
      beforeCreate () {
        if (this.$options.router) {
          console.log('---', this)
          _Vue.prototype.$router = this.$options.router // ???

          this.$options.router.init()
        }
      }
    })
  }

  constructor (options) {
    this.options = options
    this.routeMap = {}
    this.data = _Vue.observable({ // 传入对象
      current: '/'
    })

    this.init()
  }

  init () {
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }

  createRouteMap () {
    // 遍历所有的路由规则, 吧路由规则解析成键值对形式
    this.options.routes.forEach(route => {
      this.routeMap[route.path] = route.component
    })
  }

  initComponents (Vue) {
    Vue.component('router-link', {
      props: {
        to: String
      },

      render (h) {
        return h('a', {
          attrs: {
            href: this.to
          },
          on: {
            click: this.clickHandler
          }
        }, [this.$slots.default])
      },

      methods: {
        clickHandler (e) {
          console.log('8888', this.$router)
          history.pushState({}, '标题', this.to)
          this.$router.data.current = this.to
          e.preventDefault()
        }
      }
    //   template: '<a :herf="to"><slot></slot></a>'
    })
    const self = this

    Vue.component('router-view', {
      render (h) {
        return h(self.routeMap[self.data.current])
      }
    })
  }

  initEvent () {
    window.addEventListener('popstate', () => {
      this.data.current = window.location.pathname
    })
  }
}
