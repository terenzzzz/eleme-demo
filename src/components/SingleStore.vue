<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <van-cell :title="title" :value="value">
            <template #icon>
                <img :src="pic" alt="" width="60px" height="60px" class="cover">
            </template>
            <template #label>
                <p class="discription">{{discription}}</p>
                <div class="tag">
                    <span>28减3</span>
                    <span>28减3</span>
                    <span>28减3</span>
                </div>
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
    margin: 0 5px 0 5px;
    color: red;

}

.cover {
    border-radius: 10px;
    margin-right: 10px;
}
</style>