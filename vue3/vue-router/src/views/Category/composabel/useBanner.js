import { ref, onMounted } from 'vue'
import { getBannerAPI, getTopCatergoryAPI } from '@/apis/banner.js'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

export function useBanner () {
    const bannerList = ref([])
    const getBannerList = async () => {
        const { code, result } = await getBannerAPI({ distributionSite: '2'})
        if(code == '1') {
            bannerList.value = result
        }
    }

    onMounted(() => getBannerList())

    return {
        bannerList
    }
    
}

export function useCategory () {

    const route = useRoute()

    const topCategory = ref({})

    const getCategory = async (id = route.params.id) => {
        const { code, result } = await getTopCatergoryAPI(id)
        if (code == '1') {
            topCategory.value = result
        }

    }

    onMounted(() => getCategory())
    onBeforeRouteUpdate((to)=> {
        getCategory(to.params.id)
    })

    return {
        topCategory
    }

}

