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
        <!-- 跑马灯通知 -->
        <van-notice-bar left-icon="volume-o" :scrollable="false">
            <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
                <van-swipe-item>足不出户，尽享人间美食。</van-swipe-item>
                <van-swipe-item>想吃就尽管点,美食即刻送到。</van-swipe-item>
                <van-swipe-item>你的掌上餐馆，微菜单。</van-swipe-item>
            </van-swipe>
        </van-notice-bar>
        <!-- 分类模块 -->
        <Categories :list="iconList"></Categories>
        <!-- 轮播图模块 -->
        <Swiper></Swiper>
        <van-tabs v-model="active">
            <van-tab title="点评高分">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <SingleStore v-for="obj in storeList" :key="obj.id" :pic="obj.picUrl" :limit="obj.limit"
                        :delivery="obj.delivery" :value="obj.distance" :title="obj.name" @click.native="goMenu(obj.id)">
                    </SingleStore>
                </van-list>
            </van-tab>
            <van-tab title="优惠商家">
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <SingleStore v-for="obj in storeList" :key="obj.id" :pic="obj.picUrl" discription="起送￥20 配送费￥9"
                        :value="obj.distance" :title="obj.name" @click.native="goMenu()">
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
import { categoriesAPI, storesAPI } from '@/api'
export default {
    components: { Categories, Swiper, SingleStore },
    data() {
        return {
            iconList: [],
            storeList: [],
            active: 0,
            loading: false,
            finished: false,
            value: '',
            areaList,
            showArea: false,
            area: '未定位'
        };
    },
    async created() {
        // 请求分类列表
        const res = await categoriesAPI()
        // console.log(res.data.data);
        this.iconList = res.data.data
        //请求店铺数据
        const res2 = await storesAPI()
        this.storeList = res2.data.data
    },
    methods: {
        onLoad() {
            this.loading = false;
            this.finished = true;
        },
        goMenu(storeId) {
            this.$router.push({
                path: "/menu/" + storeId
            })
        },
        onSearch() {
        },
        confirmFn(res) {
            this.area = res[2].name
            this.showArea = false
        },
        cancelFn() {
            this.showArea = false
        }
    }
};
</script>
<style scoped>
.notice-swipe {
    height: 30px;
    line-height: 30px;
}
</style>