
class Vue {
    constructor (obj_instance) {
        this.$data = obj_instance.data // 将data挂载到实例对象中

        Observer(this.$data) // 监听数据

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
