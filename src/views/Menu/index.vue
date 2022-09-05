<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- navbar -->
        <div class="navbar">
            <div class="left">
                <van-icon name="arrow-left" @click="backFn()" />
            </div>
            <div class="right">
                <van-icon name="search" />
                <van-icon name="phone-o" />
                <van-icon name="star-o" />
                <van-icon name="ellipsis" />
            </div>
        </div>
        <div class="content">
            <div class="detail">
                <p class="title">麦当劳&麦咖啡</p>
                <div class="info">
                    <van-icon name="star-o" color="red" />4.7
                    <span>月售3894</span>
                    <span>配送约28分钟</span>
                </div>
                <div class="tags">
                    <Tag :tagList='tagList'></Tag>
                </div>
                <div class="storeLogo">
                    <img src="@/assets/store/2.png" alt="" width="100px">
                </div>
            </div>
            <div class="manu">
                <van-tabs v-model="active" color="#00a0f0">
                    <van-tab title="点菜">
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                        <SingleItem></SingleItem>
                    </van-tab>
                    <van-tab title="评价">评价</van-tab>
                    <van-tab title="商家">商家</van-tab>
                </van-tabs>
            </div>
        </div>
        <div class="total">
            <img src="@/assets/driver.png" alt="" width="60px">
            <div class="price">
                <p>$148</p>
                <span>预估另需配送费￥9</span>
            </div>
            <button class="check">结算</button>
        </div>
    </div>
</template>
<script>
import Tag from '@/components/Tag.vue';
import SingleItem from '../../components/SingleItem.vue';
export default {
    components: { Tag, SingleItem },
    data(){
        return {
            tagList:['天天神券','五折起'],
            active: 0,
        }
    },
    methods:{
        backFn(){
            this.$router.push({
                path:'/'
            })
        }
    }
};
</script>
<style scoped>
.van-icon {
    margin: 0 5px 0 5px;
    color: white
}

.navbar {
    background: url('@/assets/store/2.png') no-repeat center;
    background-size: cover;
    height: 100px
}

.navbar .left {
    float: left;
}

.navbar .right {
    float: right;
}

.content {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 15px;
}

.content .detail {
    padding-bottom: 10px;
    border-bottom: 1px solid #f7f8f9;
}

.content .detail .title {
    font-weight: bold;
    margin: 0;
}

.content .detail .info {
    font-size: 10px;
}

.content .detail .storeLogo {
    position: absolute;
    top: -10px;
    right: 50px;
    border-radius: 10px;
    width: 60px;
    height: 60px;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.manu {
    padding-bottom: 45px;
}

.total {
    width: 90%;
    height: 45px;
    background-color: black;
    position: fixed;
    bottom: 15px;
    left: 0;
    border-radius: 20px;
    margin: 0 5%;
}

.total img {
    position: absolute;
    top: -30px;
    left: 20px;
}

.total .price {
    position: absolute;
    top: 0;
    left: 100px;
    color: white;
    display: flex;
    flex-direction: column;
}

.total .price p {
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    padding-top: 5px;
}

.total .price span {
    font-size: 10px;
}

.total .check {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    color: white;
    font-size: 16px;
    background-color: #00a0f0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0 20px;
    border: 1px solid #00a0f0;
}
</style>