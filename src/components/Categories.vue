<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div style="padding-top:10px;margin-bottom: 10px;">
        <van-row gutter="5">
            <van-col span="6" v-for="obj in list" :key="obj.index">
                <div class="iconBox">
                    <img :src="obj.iconUrl" alt="" width="40px">
                    <p>{{obj.iconText}}</p>
                </div>
            </van-col>
        </van-row>
    </div>
</template>
<script>

export default {
    props: {
        list: []
    },
    data() {
        return {

        }
    },
};
</script>
<style scoped>
.iconBox {
    text-align: center;
    height: 70px;
}

.iconBox p {
    font-size: 14px;
}
</style>