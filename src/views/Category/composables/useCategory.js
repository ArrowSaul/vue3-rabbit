//封装分类
import { onBeforeRouteUpdate } from "vue-router";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { onMounted } from "vue";
import { getCategoryAPI } from "@/apis/category";
export function useCategory() {
    const categoryData = ref({});
    const route = useRoute();
    const getCategory = async (id = route.params.id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getCategoryAPI(id);
        categoryData.value = res.result;
    };
    onMounted(() => {
        getCategory();
    });
    //路由参数变化时，把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id);
    });
    return { categoryData };
}