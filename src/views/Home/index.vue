<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="">
        <div id="header">
            <!-- 头部 -->
            <van-nav-bar :border="false">
                <template #left>
                    <div @click="showArea = true">
                        <span class="location">{{area}}</span>
                        <van-icon name="arrow-down" color="black" />
                    </div>
                </template>
                <template #right>
                    <van-icon name="comment-o" size="22" color="black" badge="99+" />
                </template>
            </van-nav-bar>
            <!-- 地区选择 -->
            <van-area title="切换城市" :area-list="areaList" v-if="showArea" @confirm="confirmFn" @cancel="cancelFn()" />
            <!-- 搜索框 -->
            <van-search v-model="value" placeholder="请输入搜索关键词" shape=round left-icon="scan" show-action v-else>
                <template #action>
                    <div @click="onSearch">搜索</div>
                </template>
            </van-search>
        </div>
        <Categories></Categories>
        <Swiper></Swiper>
        <van-tabs v-model="active">
            <van-tab title="点评高分">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <SingleStore :pic="require('@/assets/store/2.png')" discription="起送￥20 配送费￥9" value="28分钟 2.5km"
                        title="麦当劳&麦咖啡" @click.native="goMenu()">
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
import { areaList } from '@vant/area-data';
export default {
    components: { Categories, Swiper, SingleStore },
    data() {
        return {
        active: 0,
        loading: false,
        finished: false,
        value: '',
        areaList,
        showArea:false,
        area:'未定位'
        };
    },
    methods: {
        onLoad() {
            this.loading = false;
            this.finished = true;
        },
        goMenu(){
            this.$router.push({
                path:"/menu"
            })
        },
        onSearch(){

},
confirmFn(res){
  this.area = res[2].name
  this.showArea= false
},
cancelFn(){
  this.showArea= false
}

    }
};
</script>
<style scoped>
</style>