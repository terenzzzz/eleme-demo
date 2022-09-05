<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <div>

        </div>
        <!-- 头部 -->
        <van-nav-bar :border="false">
            <template #left>
                <van-icon name="setting-o" size="18" color="black" />
            </template>
            <template #right>
                <van-icon name="comment-o" size="18" color="black" />
            </template>
        </van-nav-bar>
        <!-- 个人信息 -->
        <van-cell class="infoCard">
            <template #title>
                <div class="info">
                    <p class="name">胖哒哒</p>
                    <span class="phone">135****1133</span>
                </div>
                <van-row>
                    <van-col span="8">
                        <span>0.00</span>
                        <p>礼品卡</p>
                    </van-col>
                    <van-col span="8">
                        <span>0个</span>
                        <p>红包</p>
                    </van-col>
                    <van-col span="8">
                        <span>0个</span>
                        <p>代金券</p>
                    </van-col>
                </van-row>
            </template>
            <template #default>
                <img src="@/assets/avatar.png" alt="" width="80px">
            </template>
        </van-cell>
        <!-- 充值优惠 -->
        <div class="topUp">
            <div class="top">
                <p class="title">礼品卡充值</p>
                <span>充值立即享受更多优惠
                    <van-icon name="arrow" />
                </span>
            </div>
            <div class="optionBox">
                <div class="option">
                    <p>￥50</p>
                    <span>充值￥50送￥5</span>
                </div>
                <div class="option">
                    <p>￥50</p>
                    <span>充值￥50送￥5</span>
                </div>
                <div class="option">
                    <p>￥50</p>
                    <span>充值￥50送￥5</span>
                </div>
            </div>
        </div>
        <!-- 我的功能 -->
        <div class="myFunction">
            <p class="title">我的功能</p>
            <van-row>
                <van-col span="6">
                    <div class="iconBox">
                        <van-icon name="location-o" size="25" />
                        <p>收货地址</p>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="iconBox">
                        <van-icon name="service-o" size="25" />
                        <p>客服中心</p>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="iconBox">
                        <van-icon name="like-o" size="25" />
                        <p>我的收藏</p>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="iconBox">
                        <van-icon name="comment-circle-o" size="25" />
                        <p>待评价</p>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="iconBox">
                        <van-icon name="gift-o" size="25" />
                        <p>积分商城</p>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="iconBox">
                        <van-icon name="description" size="25" />
                        <p>电子收据</p>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="iconBox">
                        <van-icon name="credit-pay" size="25" />
                        <p>收货地址</p>
                    </div>
                </van-col>
                <van-col span="6">
                    <div class="iconBox">
                        <van-icon name="friends-o" size="25" />
                        <p>代理商招募</p>
                    </div>
                </van-col>

            </van-row>
        </div>
    </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.van-nav-bar {
    background-color: #6dcefd;
}

.infoCard {
    background-image: linear-gradient(#6dcefd, 50%, #d0ecfc);
}

.info {
    margin-bottom: 20px;
}

.info .name {
    font-size: 18px;
    font-weight: bold;
}

.info .phone {
    color: grey;
}

.icon-text {
    font-size: 12px;
}

.title {
    font-size: 16px;
    font-weight: bold;
    padding: 10px 0 0 10px;
}

.myFunction,
.topUp {
    background-color: white;
    border-radius: 20px;
    margin: 10px 10px;
}

.topUp .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.topUp .top span {
    padding: 10px 10px 0 0;
    font-size: 10px;
    color: gray;
}

.topUp .optionBox {
    margin: 10px 0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-around;
}

.topUp .optionBox .option {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #f7f8f9;
    border-radius: 10px;
    padding: 5px;
}

.topUp .optionBox .option p {
    font-size: 16px;
}

.topUp .optionBox .option span {
    font-size: 12px;
    color: gray;
}

.iconBox {
    text-align: center;
    height: 70px;
}

.iconBox p {
    font-size: 12px;
}
</style>