
import imageView  from "./ImageView.vue"
export const componentPlugin = {
    install (app) {
        app.component('XtxImageView', imageView)
    }
}