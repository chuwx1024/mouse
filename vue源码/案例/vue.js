class Vue {
    constructor (options) {
        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
         this._proxyData(this.$data) 
        new Observer(this.$data)
        new Compiler(this)

    }

    _proxyData (data) {
        // 遍历data中的所有属性 this.$data
        Object.keys(data).forEach(key => {
            
            Object.defineProperty(this, key, {
                enumerable: true,
                configurable: true,
                get () {
                   // console.log('proxyData')
                    return data[key] // data[key] ---> 调用Observer中get
                },
                set (newVal) {
                    if (newVal === data[key]) {
                        return
                    }
                    data[key] = newVal
                }
            })

        })

    }



}

// 给Vue添加数据响应式
class Observer {
    // this.$data
    constructor (data) {
        this.walk(data)
    }

        // 遍历所有数据
    walk (data) {
        // 1. 判断数据是否为空值
        if (!data || typeof data !== 'object') return

        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key])
        })

    }

        // 把data中的数据编程响应式
    defineReactive (obj, key, val) {
        // 如果val是object, 递归循环添加getset
        this.walk(val)
        let _this = this


        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get () {
                return val
            },
            set (newVal) {
                if (newVal === val) return 

                val = newVal

                // 如果newVal为对象 需要做数据劫持
                if( typeof val === 'object') {
                    _this.walk(val)
                }

            }
        })

    }
}


// 编译

class Compiler {
    constructor (vm) {
        this.el = vm.$el
        this.vm = vm  // Vue 实例
        this.Compile(this.el)
    }

    // 编译模板, 处理文本节点和元素节点
    Compile (el) {
        let childNodes = el.childNodes  // 伪数组

        Array.from(childNodes).forEach(node => {
            if (this.isTextNode(node)) {
                this.compileText(node)
            } else if (this.isElementNode(node)) {
                this.compileElement(node)
            }


            if (node.childNodes && node.childNodes.length > 0) {
                this.Compile(node)
            }

        })

    }

    // 编译元素节点,处理指令
    compileElement (node) {

    }

    // 编译文本节点
    compileText (node) {
        
        console.log(node)

        let reg = /\{\{(.+?)\}\}/

        let value = node.textContent

        if (reg.test(value)) {
            let key = RegExp.$1.trim()
            node.textContent = value.replace(reg, this.vm[key])
        }


    }

    // 判断元素属性是否是指令
    isDirective (attrName) {
        return attrName.startWidth('v-')
    }

    // 判断节点是否为文本节点

    isTextNode (node) {
        return node.nodeType === 3
    }

    // 判断节点是否为元素节点
    isElementNode (node) {
        return node.nodeType === 1
    }



}