<template>
    <div>
        <van-address-edit :area-list="areaList" show-postal show-delete show-search-result :search-result="searchResult"
            :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" />
    </div>
</template>
<script>
import { Toast } from 'vant';
import { areaList } from '@vant/area-data'
export default {
    props: {

    },
    data() {
        return {
            areaList,
            searchResult: [],
        }
    },
    methods: {
        onSave() {
            Toast('save');
        },
        onDelete() {
            Toast('delete');
        },
    }
};
</script>
<style scoped>

</style>