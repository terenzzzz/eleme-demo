<template>
    <div class="iconBox">
        <slot name="icon"></slot>
        <p>{{iconText}}</p>
    </div>
</template>
<script>
export default {
props:{
    iconText:String
}
};
</script>
<style scoped>
.iconBox {
    text-align: center;
    height: 40px;
}

.iconBox p {
    font-size: 12px;
    color: black;
}
</style>