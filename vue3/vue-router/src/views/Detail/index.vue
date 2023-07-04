<template>
  <div class="xtx-goods-page">
    <div class="container" v-if="goods.details">
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: `categories[1].name}` }">{{ categories[1].name }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ categories[0].name }}</el-breadcrumb-item>
            <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 商品信息 -->
        <div class="info-container" style="border-bottom: 20px solid #f3f3f3">
          <div class="goods-info">

            <!-- 左边 -->
            <div class="media">
              <!-- 图片预览区 -->
              <XtxImageView :imageList="goods.mainPictures"></XtxImageView>

              <!-- 统计数量 -->

              <!-- <div class="goods-sales"> -->
                <ul class="goods-sales">
                  <li>
                    <p>销量人气</p>
                    <p> {{ goods.salesCount }}+  </p>
                    <p><el-icon color="#27bb9a" class="no-inherit"><i-ep-BellFilled></i-ep-BellFilled></el-icon>销量人气</p>
                  </li>
                  <li>
                    <p>商品评价</p>
                    <p>{{ goods.commentCount }}+</p>
                    <p><el-icon color="#27bb9a" class="no-inherit"><i-ep-ChatDotRound></i-ep-ChatDotRound></el-icon>查看评价</p>
                  </li>
                  <li>
                    <p>收藏人气</p>
                    <p>{{ goods.collectCount }}+</p>
                    <p><el-icon color="#27bb9a" class="no-inherit"><i-ep-ChatDotRound></i-ep-ChatDotRound></el-icon>收藏商品</p>
                  </li>
                  <li>
                    <p>品牌信息</p>
                    <p v-if="goods.brand">{{ goods.brand.name }}</p>
                    <p><el-icon color="#27bb9a" class="no-inherit"><i-ep-ChatDotRound></i-ep-ChatDotRound></el-icon>品牌主页</p>
                  </li>
                </ul>
              <!-- </div> -->
            </div>
            
            <!-- 右边 -->
            <div class="spec">
              <p class="g-name">{{  goods.name }}</p>
              <p class="g-desc">{{ goods.desc }}</p>
              <p class="g-price"><span>{{ goods.oldPrice }}</span><span>{{ goods.price }}</span></p>

              <div class="g-service">
                <dl>
                  <dt>促销</dt>
                  <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
                <dl>
                  <dt>促销</dt>
                  <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
              </div>

              <div class="btn" size="large">
                <el-button plain>加入购物车</el-button>
              </div>
            </div>
          </div>
        </div>

        <!-- 商品详情 -->
        <div class="goods-footer">
          <div class="goods-article">
            <div class="goods-tab">
              <nav><a href="javascript:;">商品详情</a></nav>
              <div class="goods-detail">
                <ul>
                  <li v-for="item in getDetailList" :key="item.name">
                    <span>{{ item.name }}</span>
                  </li>
                </ul>
                <!-- 图 -->
                <img v-for="img in getDetailPicture" :key="img" :src="img" alt="">
              </div>

            </div>
          </div>

          <div class="goods-aside">
            <DetailHot type="1"></DetailHot>
            <DetailHot type="2"></DetailHot>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script setup>
import DetailHot from './components/DetailHot.vue'
// import ImageView from '@/components/ImageView.vue'
import { getDetail } from '@/apis/banner.js'
import {ref, onMounted, computed} from 'vue'
import { useRoute} from 'vue-router'
const route = useRoute()

const goods = ref([])
const categories = ref([])

const getGoods = async () => {
  const { code, result} = await getDetail(route.params.id)

  if(code === '1') {
    goods.value = result
    categories.value = result.categories
  }
}

const getDetailList = computed(() => {
  return ( goods.value.details && goods.value.details.properties )|| []
})

const getDetailPicture = computed(() => {
  return  (goods.value.details && goods.value.details.pictures) || []
})



onMounted(() => { getGoods()})





</script>

<style scoped lang="scss">
.xtx-goods-page {
  .container {
    background-color: #fff;
    .el-breadcrumb {
      height: 40px;
      line-height: 40px;
    }

    .goods-info {
      display: flex;

      .media {
        width: 600px;
        height: 600px;
        // background-color: green;

        .goods-sales {
          width: 100%;
          display: flex;
          justify-content: space-around;
          margin: 20px 0px;
          li {
            width: 25%;
            height: 60px;
            text-align: center;
            p {
                font-size: 12px;
                transform: translateY(-8px);
                .no-inherit {
                  margin-right: 4px;
                }
            }
            p:first-child {
              color: rgb(148, 153, 160);
            }
            
            p:nth-child(2) {
              color: red;
              padding: 10px 0;
            }
            ~li {
              border-left: 1px solid #e4e4e4;
              
            }

          }
        }

  

      }
      
      .spec {
        flex: 1;
        // background-color:pink;

        .g-name {
          font-size: 20px;
          font-weight: 700;
        }

        .g-desc {
            color: rgb(148, 153, 160);
            margin: 10px 0;
        }
        .g-price {
          span:first-child {
            color: red;
            font-size: 16px;
            ~ span{
              font-size: 14px;
              color: rgb(148, 153, 160);
              margin-left: 12px;
            }

          }
          
        }
        .g-service {
          width: 60%;
          padding: 10px 10px;
          background-color: #f3f3f3;
          font-size: 12px;
          margin: 20px 0;

          dl {
            display: flex;
            line-height: 30px;
            dt {
              margin-right: 20px;
              color: rgb(148, 153, 160);
            }
          }
        }
        .btn {
       
         .el-button{
            ::v-deep span {
              font-weight: 700;
            }
          }
          
        }


      }
    }

    .goods-footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0px 20px 10px;

      .goods-article {
        border-right: 20px solid #f3f3f3;
        nav {
          height: 40px;
          line-height: 40px;
          a {
            color: #333;
            font-weight: 600;
          }
        }
        flex: 1;
        ul {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          li {
            height: 30px;
            line-height: 30px;
            padding: 0 0px 10px 0;
          }
        }
      }

      .goods-aside {
        width: 200px;
      }
    }


  }
}

</style>
