<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="tags">
        <span v-for="(val,index) in tagList" :key="index">{{val}}</span>
    </div>
</template>
<script>
export default {
   props:{
    tagList:Array
   }
};
</script>
<style scoped>
.tags {
    display: flex;
}

.tags span {
    font-size: 10px;
    border: 1px solid #ffc6c1;
    border-radius: 5px;
    margin: 0 5px;
    color: red;
    padding: 0 5px;
}
</style>