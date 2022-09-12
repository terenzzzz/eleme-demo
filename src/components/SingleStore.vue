<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-cell :title="title" center>
            <template #icon>
                <img :src="pic" alt="" width="60px" height="60px" class="cover">
            </template>
            <template #label>
                <p class="discription">起送￥{{limit}} 配送费￥{{delivery}}</p>
                <van-tag type="danger">28减3</van-tag>
                <van-tag type="danger">28减3</van-tag>
                <van-tag type="danger">28减3</van-tag>
            </template>
            <template #default>
                <span>{{value}}</span>
            </template>
        </van-cell>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        value: String,
        pic: String,
        limit: Number,
        delivery: Number
    }
};
</script>
<style scoped>
.discription {
    margin: 0;
}

.van-tag {
    margin-inline: 2px;
}

.cover {
    border-radius: 10px;
    margin-right: 10px;
}
</style>