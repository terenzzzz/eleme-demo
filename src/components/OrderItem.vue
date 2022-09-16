<template>
    <div>
        <van-cell center :title="product.name">
            <template #default>
                <span>￥</span>{{currency(product.price * num)}}
            </template>
            <template #label>
                <p>x{{num}}</p>
            </template>
            <template #icon>
                <img :src="product.picUrl" alt="" width="50px" class="foodPic">
            </template>
        </van-cell>
    </div>
</template>
<script>
import { productAPI } from '@/api'
export default {
    props: {
        productId: Number,
        num: Number
    },
    data() {
        return { product: {} }
    },
    async created() {
        // 请求产品数据
        const res = await productAPI({ productId: this.productId })
        // console.log(res);
        this.product = res.data.data[0]
    },
};
</script>
<style scoped>
.foodPic {
    margin-right: 15px;
}
</style>