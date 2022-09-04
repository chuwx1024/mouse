
class Vue {
    constructor (obj_instance) {
        this.$data = obj_instance.data // 将data挂载到实例对象中

        Observer(this.$data) // 监听数据

        Compile(obj_instance.el, this)

    }

}

// 创建监听数据函数
function Observer (data_instance) {

    if (!data_instance || typeof data_instance !== 'object') return 
    const dependency = new Dependency()

   Object.keys(data_instance).forEach(item => {
    let value = data_instance[item]
    Observer(value)

    Object.defineProperty(data_instance, item, { //默认值为underfined
        enumerable: true, 
        configurable: true,
        get () {
            // console.log(value,'get111')
            console.log(Dependency.temp, 'temp')
            Dependency.temp && dependency.addSub(Dependency.temp)
            return value
        },
        set (newVal) {
            console.log('set')
            value = newVal

            Observer(value) // 数据改变后, 给新数据添加监听
            dependency.notify()
        }
    } )

   })
}

// 模板解析 --替换dom

function Compile (element, vm) {
    vm.$el = document.querySelector(element) // 获取页面dom

    const fragment = document.createDocumentFragment() // 创建代码片段

    let child

    while (child = vm.$el.firstChild) {
        fragment.append(child)
    }

    fragment_compile (fragment, vm) // 解析模板文本

    vm.$el.appendChild(fragment) // 解析完模板  把代码片段挂载到dom上

}


// 差值表达式解析
function fragment_compile (node, vm) {
    const pattern = /\{\{\s*(\S+)\s*\}\}/


    // nodeType === 3 文本节点  包含换行符 ,空白符
    if (node.nodeType === 3) { 
        const xxx = node.nodeValue // 差值表达式才能进入正则匹配中
        // console.log(xxx, 'nodeValue') //姓名: {{ name }}  更多: {{ more.like }}

   
        const result_regex = pattern.exec(node.nodeValue)

        if (result_regex) {

            

            const arr = result_regex[1].split('.') // name  more.like
            const value = arr.reduce((total, current) => {
                return total[current]
            }, vm.$data)

            node.nodeValue = xxx.replace(pattern, value) // 差值表达式替换成文本

            // console.log('9999999999999999999')

            // 创建订阅者
            new Watcher(vm, result_regex[1], newVal => {
                node.nodeValue = xxx.replace(pattern, newVal) 
            } )

        }
        return 
    }

    node.childNodes.forEach(item => { fragment_compile(item, vm) })

}



// 收集 和通知订阅者
class Dependency  {
    constructor () {
        this.subscribers = []
    }
    // 把订阅者放在一个数据中
    addSub (sub) {
        this.subscribers.push(sub)
    }
    // 通知订阅者更新数据
    notify () {
        console.log(this.subscribers, '0000000000000000')
        this.subscribers.forEach(item => item.update()) // 更新数据
    }

}


// 订阅者
class Watcher {
    constructor (vm, key, callback) {
        this.vm = vm
        this.key = key
        this.callback = callback

        Dependency.temp = this // ?  临时属性 触发get

        key.split('.').reduce((total, item) => total[item], vm.$data) // 触发get 添加订阅者
        Dependency.temp = null

    }

    // 订阅者更新dom
    update () {
        const value= this.key.split('.').reduce((total, item) => total[item], this.vm.$data)
        this.callback(value)
    }
}