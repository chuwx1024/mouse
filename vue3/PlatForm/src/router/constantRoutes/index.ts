const routerGroupContext: any = import.meta.glob('./routeGroup/*.ts', { eager: true })

const modules: any = [];
Object.keys(routerGroupContext).forEach(item => {
    modules.push( ...routerGroupContext[item].default)
    return modules
})
export default modules
