<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-cell :title="title" center>
            <template #icon>
                <img :src="pic" alt="" width="60px" height="60px" class="cover">
            </template>
            <template #label>
                <p class="discription">{{discription}}</p>
                <div class="tag">

                    <van-row>
                        <van-col span="8"><span>28减3</span></van-col>
                        <van-col span="8"><span>28减3</span></van-col>
                        <van-col span="8"><span>28减3</span></van-col>
                    </van-row>
                </div>
            </template>
            <template #default>
                <span>{{value}}</span>
            </template>
        </van-cell>
    </div>
</template>
<script>
export default {
  props:{
    title:String,
    value:String,
    pic:String,
    discription:String
  }
};
</script>
<style scoped>
.discription {
    margin: 0;
}

.tag {
    display: flex;
}

.tag span {
    border: 1px solid #ffc6c1;
    border-radius: 5px;
    margin: 0 2px;
    color: red;
    padding: 0 1px;
}

.cover {
    border-radius: 10px;
    margin-right: 10px;
}
</style>