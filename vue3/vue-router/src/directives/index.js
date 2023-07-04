import { useIntersectionObserver } from '@vueuse/core'
export const directivePlugin = {
    install (app) {
        app.directive('img-lazy', {
            mounted (el, binding) {
        
                const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                      if (isIntersecting === true) {
                        el.src = binding.value
                        stop()
                      }
        
                    },
                  )
            }
        })
    }
}
