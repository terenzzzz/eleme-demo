<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <!-- Manu  -->
    <!-- v-animate-css="{ classes: 'fadeInRight', duration: 300 }" -->
    <div>
        <!-- navbar -->
        <div class="navbar"
            :style="{backgroundImage: 'url(' + storeDetail.picUrl + ')',backgroundRepeat: 'no-repeat',backgroundPosition:'left center'}">
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
                <p class="title">{{storeDetail.name}}</p>
                <div class="info">
                    <van-icon name="star-o" color="red" />{{storeDetail.rate}}
                    <span>配送约{{storeDetail.distance}}</span>
                </div>
                <div class="tags">
                    <van-tag plain type="danger" v-for="(obj,index) in tagList" :key="index">{{obj}}</van-tag>
                </div>
                <div class="storeLogo">
                    <img :src="storeDetail.picUrl" alt="" width="120px">
                </div>
            </div>
            <div class="manu">
                <van-tabs v-model="active" color="#00a0f0">
                    <van-tab title="点菜">
                        <SingleItem @add="addFn(obj.id,obj.price)" v-for="obj in productList" :key="obj.id"
                            :name="obj.name" :sold="obj.sold" :price="obj.price" :picUrl="obj.picUrl"
                            :discription="obj.discription">
                        </SingleItem>
                    </van-tab>
                    <van-tab title="评价">评价</van-tab>
                    <van-tab title="商家">商家</van-tab>
                </van-tabs>
            </div>
        </div>
        <div class="total">
            <img src="@/assets/driver.png" alt="" width="60px" class="driver">
            <span class="quantity">
                <van-badge :content="quantity" color="#00a0f0" max="99" />
            </span>
            <div class="price">
                <p>￥{{ total }}</p>
                <span>预估另需配送费￥9</span>
            </div>
            <button class="check" @click="goCheckOut">结算</button>
        </div>
    </div>
</template>
<script>
import SingleItem from '../../components/SingleItem.vue';
import { menuAPI, storeAPI } from '@/api'
export default {
    components: { SingleItem },
    data() {
        return {
            tagList: ['天天神券', '五折起'],
            active: 0,
            quantity: 0,
            total: 0,
            productList: [],
            storeDetail: {},
            cart: []
        }
    },
    async created() {
        // 请求产品列表
        // console.log(this.$route.params.id);
        const res = await menuAPI({ storeId: this.$route.params.id })
        // console.log(res);
        this.productList = res.data.data
        // 请求店铺信息
        const res2 = await storeAPI({ storeId: this.$route.params.id })
        // console.log(res2);
        this.storeDetail = res2.data.data[0]
    },
    methods: {
        backFn() {
            this.$router.push({
                path: '/'
            })
        },
        addFn(productId, price) {
            // 如果已经有就数量加1 如果没有就添加一个产品
            const index = this.cart.findIndex(item => {
                return item.product == productId
            })
            if (index == -1) {
                this.cart.push({
                    'product': productId,
                    'num': 1,
                    'price': price,
                })
            } else {
                this.cart[index].num++,
                    this.cart[index].price = this.cart[index].price + price
            }
            this.quantity++
            this.total += price
            // console.log(this.cart);
        },
        goCheckOut() {
            sessionStorage.setItem('cart', JSON.stringify(this.cart))
            this.$router.push({
                name: 'checkOut',
                params: { 'storeId': this.$route.params.id }
            })
        }
    },
};
</script>
<style scoped>
.van-icon {
    margin: 0 5px 0 5px;
    color: white
}

.navbar {
    background-size: cover;
    height: 100px;
    padding-top: 15px;
}

.navbar .left {
    float: left;
}

.navbar .right {
    float: right;
}

.content {
    position: relative;
    top: -20px;
    left: 0;
    box-sizing: border-box;
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
    width: 70%;
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

.quantity {
    position: absolute;
    top: -20px;
    left: 65px;
}

.van-tag {
    margin-inline: 2px;
}
</style>