<template>
    <div class="singleItem">
        <van-cell center :title="name" @click="showPopup">
            <template #icon>
                <div class="foodPic">
                    <img :src="picUrl" alt="">
                </div>
            </template>
            <template #label>
                <span class="sale">月售{{sold}} </span><span class="price"> ￥{{price}}</span>
            </template>
            <template #default>
                <van-icon name="add" color="#00a0f0" size="25" @click.stop="addBtn()" />
            </template>
        </van-cell>
        <van-popup v-model="show" closeable round>
            <div class="box">
                <div class="pic">
                    <img :src="picUrl" alt="" width="100%">
                </div>
                <van-divider />
                <div class="description">
                    <h5>{{name}}</h5>
                    <p class="sale">月售{{sold}}</p>
                    <p>{{discription}}</p>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        sold: Number,
        price: Number,
        picUrl: String,
        discription: String
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        addBtn() {
            this.$emit('add')
        },
        showPopup() {
            this.show = true;
        },
    }
};
</script>
<style scoped>
.singleItem {
    text-align: center;
    width: 100%;
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

.box {
    width: 250px;
}

.description h5 {
    font-size: 16px;
    text-align: start;
    margin: 5px 0;
    font-weight: bold;
}

.description p {
    font-size: 14px;
    text-align: start;
}

.van-popup {
    padding: 15px 20px;
    box-sizing: border-box;
}

.sale {
    color: gray;
}
</style>