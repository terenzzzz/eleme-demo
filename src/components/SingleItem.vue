<template>
    <div class="singleItem" @click="addBtn">
        <van-cell center :title="name">
            <template #icon>
                <div class="foodPic">
                    <img :src="picUrl" alt="">
                </div>
            </template>
            <template #label>
                <span class="sale">月售{{sold}} </span><span class="price"> ￥{{price}}</span>
            </template>
            <template #default>
                <van-icon name="add" color="#00a0f0" size="25" />
            </template>
        </van-cell>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        sold: Number,
        price: Number,
        picUrl: String
    },
    methods: {
        addBtn() {
            this.$emit('add')
        }
    }
};
</script>
<style scoped>
.singleItem {
    text-align: center;
}

.foodPic {
    width: 50px;
    height: 50px;
    margin: 0 10px 0 5px;
    overflow: hidden;
    display: flex;
    justify-content: center;
}

.foodPic img {
    width: 100%;
}

.price {
    color: red;
    font-size: 16px;
}
</style>