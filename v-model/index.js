
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

   Object.keys(data_instance).forEach(item => {
    let value = data_instance[item]
    Observer(value)

    Object.defineProperty(data_instance, item, { //默认值为underfined
        enumerable: true, 
        configurable: true,
        get () {
            console.log('get')
            return value
        },
        set (newVal) {
            console.log('set')
            value = newVal
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

    vm.$el.appendChild(fragment)



}

function fragment_compile (node, vm) {
    const pattern = /\{\{\s*(\S+)\s*\}\}/

    if (node.nodeType === 3) { 
        const result_regex = pattern.exec(node.nodeValue)
        if (result_regex) {
            const arr = result_regex[1].split('.') // name  more.like
            const value = arr.reduce((total, current) => {
                return total[current]
            }, vm.$data)
            node.nodeValue = node.nodeValue.replace(pattern, value)
            console.log(node.nodeValue)
        }
        return 
    }

    node.childNodes.forEach(item => { fragment_compile(item, vm) })

}
