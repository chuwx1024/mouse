<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <h3>{{ title }}<small>{{ subTitle }}</small></h3>
            </div>

            <!-- 主题内容 -->
            <slot name="main"></slot>

        </div>
    </div>

</template>

<script setup>

defineProps({
    title: {
        type: String,
        defult: ''
    },
    subTitle: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.home-panel {
    background-color: #fff;
    .container {

        .head {
            padding: 30px 0;
            background: #fff;

            h3 {
                font-size: 32px;
                font-weight: normal;
                margin-left: 6px;
                height: 35px;
                line-height: 35px;
                small {
                    font-size: 16px;
                    margin-left: 20px;
                    color: #999;
                }
            }

        }
    }
}

</style>