<!--
 * @Author: daidai
 * @Date: 2022-02-28 16:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-20 17:57:11
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-center.vue
-->
<template>
    <ul class="user_Overview flex" v-if="pageflag">
        <li class="user_Overview-item" style="color: #00fdfa">
            <div class="user_Overview_nums allnum ">
                <dv-digital-flop :config="config" style="width:100%;height:100%;" />
            </div>
            <p>总漏洞数</p>
        </li>
        <li class="user_Overview-item" style="color: #07f7a8">
            <div class="user_Overview_nums online">
                <dv-digital-flop :config="onlineconfig" style="width:100%;height:100%;" />
            </div>
            <p>低危漏洞数量</p>
        </li>
        <li class="user_Overview-item" style="color: #e3b337">
            <div class="user_Overview_nums offline">
                <dv-digital-flop :config="offlineconfig" style="width:100%;height:100%;" />

            </div>
            <p>中危漏洞数量</p>
        </li>
        <li class="user_Overview-item" style="color: #f5023d">
            <div class="user_Overview_nums laramnum">
                <dv-digital-flop :config="laramnumconfig" style="width:100%;height:100%;" />
            </div>
            <p>高危漏洞数量</p>
        </li>
    </ul>
    <Reacquire v-else @onclick="getData" line-height="200px">
        重新获取
    </Reacquire>
</template>

<script>
import { currentGET } from 'api/modules'
let style = {
    fontSize: 24
}
export default {
    data() {
        return {
            options: {},
            //
            userOverview: {
                alarmNum: 0,
                offlineNum: 0,
                onlineNum: 0,
                totalNum: 0,
            },
            pageflag: true,
            timer: null,
            config: {
                number: [100],
                content: '{nt}',
                style: {
                    ...style,
                    // stroke: "#00fdfa",
                    fill: "#00fdfa",
                    fontSize: 17
                },
            },
            onlineconfig: {
                number: [0],
                content: '{nt}',
                style: {
                    ...style,
                    // stroke: "#07f7a8",
                    fill: "#07f7a8",
                    fontSize: 17,
                },
            },
            offlineconfig: {
                number: [0],
                content: '{nt}',
                style: {
                    ...style,
                    // stroke: "#e3b337",
                    fill: "#e3b337",
                    fontSize: 17,
                },
            },
            laramnumconfig: {
                number: [0],
                content: '{nt}',
                style: {
                    ...style,
                    // stroke: "#f5023d",
                    fill: "#f5023d",
                    fontSize: 17,
                },
            }

        };
    },
    filters: {
        numsFilter(msg) {
            return msg || 0;
        },
    },
    created() {
        this.getData()
    },
    mounted() {
    },
    beforeDestroy() {
        this.clearData()

    },
    methods: {
        clearData() {
            if (this.timer) {
                clearInterval(this.timer)
                this.timer = null
            }
        },
        // getData() {
        //     this.pageflag = true;
        //     currentGET("big2").then((res) => {
        //         if (!this.timer) {
        //             console.log("漏洞总览", res);
        //         }
        //         if (res.success) {
        //             this.userOverview = res.data;
        //             this.onlineconfig = {
        //                 ...this.onlineconfig,
        //                 number: [res.data.onlineNum]
        //             }
        //             this.config = {
        //                 ...this.config,
        //                 number: [res.data.totalNum]
        //             }
        //             this.offlineconfig = {
        //                 ...this.offlineconfig,
        //                 number: [res.data.offlineNum]
        //             }
        //             this.laramnumconfig = {
        //                 ...this.laramnumconfig,
        //                 number: [res.data.alarmNum]
        //             }
        //             this.switper()
        //         } else {
        //             this.pageflag = false;
        //             this.$Message.warning(res.msg);
        //         }
        //     });
        // },
        //轮询
        getData() {
        this.pageflag = true;
        // 如果不想调用API，可以直接注释掉以下两行
        // currentGET("big2").then((res) => {
        //     if (!this.timer) {
        //         console.log("漏洞总览", res);
        //     }
        //     if (res.success) {
        this.userOverview = {
            alarmNum: 112330, // 固定高危漏洞数量
            offlineNum: 107068, // 固定中危漏洞数量
            onlineNum: 19436, // 固定低危漏洞数量
            totalNum: 247331, // 固定总漏洞数
        };
        this.onlineconfig.number = [this.userOverview.onlineNum];
        this.config.number = [this.userOverview.totalNum];
        this.offlineconfig.number = [this.userOverview.offlineNum];
        this.laramnumconfig.number = [this.userOverview.alarmNum];
        this.switper();
        //     } else {
        //         this.pageflag = false;
        //         this.$Message.warning(res.msg);
        //     }
        // });
    },
        switper() {
            if (this.timer) {
                return
            }
            let looper = (a) => {
                this.getData()
            };
            this.timer = setInterval(looper, this.$store.state.setting.echartsAutoTime);
        },
    },
};
</script>
<style lang='scss' scoped>
.user_Overview {
    li {
        flex: 1;

        p {
            text-align: center;
            height: 16px;
            font-size: 16px;
        }

        .user_Overview_nums {
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            font-size: 22px;
            margin: 50px auto 30px;
            background-size: cover;
            background-position: center center;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
            }

            &.bgdonghua::before {
                animation: rotating 14s linear infinite;
            }
        }

        .allnum {

            // background-image: url("../../assets/img/left_top_lan.png");
            &::before {
                background-image: url("../../assets/img/left_top_lan.png");

            }
        }

        .online {
            &::before {
                background-image: url("../../assets/img/left_top_lv.png");

            }
        }

        .offline {
            &::before {
                background-image: url("../../assets/img/left_top_huang.png");

            }
        }

        .laramnum {
            &::before {
                background-image: url("../../assets/img/left_top_hong.png");

            }
        }
    }
}
</style>