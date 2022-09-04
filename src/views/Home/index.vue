<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="">
        <Categories></Categories>
        <Swiper></Swiper>
        <van-tabs v-model="active">
            <van-tab title="点评高分">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <SingleStore :pic="require('@/assets/store/2.png')" discription="起送￥20 配送费￥9" value="28分钟 2.5km"
                        title="麦当劳&麦咖啡">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/3.png')" discription="起送￥15 配送费￥5.5" value="30分钟 2.9km"
                        title="三多肠粉皇">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/2.png')" discription="起送￥20 配送费￥9" value="28分钟 2.5km"
                        title="麦当劳&麦咖啡">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/3.png')" discription="起送￥15 配送费￥5.5" value="30分钟 2.9km"
                        title="三多肠粉皇">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/2.png')" discription="起送￥20 配送费￥9" value="28分钟 2.5km"
                        title="麦当劳&麦咖啡">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/3.png')" discription="起送￥15 配送费￥5.5" value="30分钟 2.9km"
                        title="三多肠粉皇">
                    </SingleStore>
                </van-list>
            </van-tab>
            <van-tab title="优惠商家">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <SingleStore :pic="require('@/assets/store/3.png')" discription="起送￥15 配送费￥5.5" value="30分钟 2.9km"
                        title="三多肠粉皇">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/2.png')" discription="起送￥20 配送费￥9" value="28分钟 2.5km"
                        title="麦当劳&麦咖啡">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/3.png')" discription="起送￥15 配送费￥5.5" value="30分钟 2.9km"
                        title="三多肠粉皇">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/2.png')" discription="起送￥20 配送费￥9" value="28分钟 2.5km"
                        title="麦当劳&麦咖啡">
                    </SingleStore>
                    <SingleStore :pic="require('@/assets/store/3.png')" discription="起送￥15 配送费￥5.5" value="30分钟 2.9km"
                        title="三多肠粉皇">
                    </SingleStore>
                </van-list>
            </van-tab>
            <van-tab title="满减优惠">

            </van-tab>
            <van-tab title="品牌商家">

            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Categories from '@/components/Categories.vue';
import Swiper from '@/components/Swiper.vue';
import SingleStore from '@/components/SingleStore.vue';
export default {
    components: { Categories, Swiper, SingleStore },
    data() {
        return {
        active: 0,
        loading: false,
        finished: false,
        };
    },
    methods: {
        onLoad() {
            this.loading = false;
            this.finished = true;
        }
    }
};
</script>
<style scoped>
</style>