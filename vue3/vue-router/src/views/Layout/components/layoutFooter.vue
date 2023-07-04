<template>
    <div class="app_footer">
        <div class="contact">
            <div class="container">
                <dl>
                    <dt>客户服务</dt>
                    <dd><el-icon color="#409EFC" class="no-inherit"><i-ep-ChatDotRound></i-ep-ChatDotRound></el-icon>在线客服</dd>
                    <dd><el-icon color="#409EFC" class="no-inherit"><i-ep-ChatDotRound></i-ep-ChatDotRound></el-icon>问题反馈</dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><el-icon color="#409EFC" class="no-inherit"><i-ep-ChatDotRound></i-ep-ChatDotRound></el-icon>公众号</dd>
                    <dd><el-icon color="#409EFC" class="no-inherit"><i-ep-ChatDotRound></i-ep-ChatDotRound></el-icon>微博</dd>
                </dl>
                <dl>
                    <dt>下载APP</dt>
                    <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
                    <dd class="download">
                        <span>扫描二维码</span>
                        <span>立马下载APP</span>
                        <a href="javascript:;">下载页面</a>
                    </dd>
                </dl>

                <dl>
                    <dt>服务热线</dt>
                    <dd>400-0000-000<small>周一至周日 8:00-18:00</small></dd>
                </dl>
            </div>
        </div>

        <div class="extra">
            <div class="container">
                <div class="slogan">
                    <a href="javascript:;">
                        <i></i>
                        <span>价格亲民</span>
                    </a>
                    <a href="javascript:;">
                        <i></i>
                        <span>物流快捷</span>
                    </a>
                    <a href="javascript:;">
                        <i></i>
                        <span>品质新鲜</span>
                    </a>
                </div>

                <div class="copyright">
                    <p>
                        <a href="javascript:;">关于我们</a>
                        <a href="javascript:;">帮助中心</a>
                        <a href="javascript:;">售后服务</a>
                        <a href="javascript:;">配送与验收</a>
                        <a href="javascript:;">商务合作</a>
                        <a href="javascript:;">搜索推荐</a>
                        <a href="javascript:;">友情链接</a>
                    </p>
                    <p>CopyRight © 小兔鲜儿</p>
                </div>
            </div>
        </div>

       

    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
.app_footer {
    padding-top: 20px;

    .contact {
        background-color: #fff;
        .container {
            display: flex;
            padding: 20px 0 0px;
            justify-content: space-around;

            dl {
                height: 190px;
                color: #999;
                padding: 0 40px;
                text-align: center;
                font-size: 12px;

                &:first-child {
                    padding-left: 0;
                }
                &:last-child {
                    padding-right: 0;
                    border-right: 0;
                }

                dt {
                    line-height: 1;
                    font-size: 18px;
                }

                dd {
                    margin: 36px 12px 0 0 ;
                    float: left;
                    width: 80px;
                    height: 80px;
                    
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    
                
                }

                &:nth-child(-n + 2) {
                    border-right: 1px solid #ededed;

                    dd {
                        border: 1px solid #ededed;
                    }
                }
                &:nth-child(3) {
                    .qrcode {
                        border: 1px solid #ededed;
                    }
                    .download {
                        font-size: 12px;

                        a {
                            width: 90px;
                            height: 28px;
                            line-height: 28px;
                            background: #2fc08f;
                            color: #fff;
                            margin-top: 8px;
                        }
                    }



                }
                &:last-child {
                    dd {
                        width: 130px;
                    }
                }

            }
        }

    }

    .extra {
        background: #2c2c2c;
        .slogan {
            display: flex;
            justify-content: space-around;
            padding: 80px 0;
            a {
                color: #fff;
            }
        }

        .copyright {
            text-align: center;
            padding-bottom: 20px;
            p {
                font-size: 12px;
                color: #7a7a7a;
                
                a {
                    color: #7a7a7a;
                    &:first-child {
                        padding-right: 10px;
                    }
                    ~a {
                        border-left: 1px solid #7a7a7a;
                        padding-left: 10px;
                        padding-right: 10px;
                    }
                }
            }
        }
        
    }

}

</style>
