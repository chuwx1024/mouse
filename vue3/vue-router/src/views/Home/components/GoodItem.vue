<template>
  <RouterLink to="/" class="good-item">
    <img :src="good.picture" alt="" v-img-lazy="good.picture">
    <p>{{  good.name }}</p>
    <p>{{  good.desc }}</p>
    <p class="price">&yen;{{ good.price }}</p>
 </RouterLink>
</template>

<script setup>
defineProps({
    good: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style scoped lang="scss">
.good-item {
    display: inline-block;
    // width: 100%;
    // height: 100%;
    width: 232px;
    text-align: center;

    img {
        width: 90%;
        height: 70%;
    }
    p {
        padding: 0 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        &:nth-child(3) {
            color: rgb(148, 153, 160);
            font-size: 12px;
        }
    }
    .price {
        color: rgb(154, 42, 34);
    }
    &:hover {
        transform: translate3d(0, -6px, 0);
        box-shadow: 0 6px 10px  rgba(0 0 0 /20%);
    }

}

</style>
