<!--
 * @Author: daidai
 * @Date: 2022-02-28 16:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-25 09:18:22
 * @FilePath: \web-pc\src\pages\big-screen\view\indexs\left-center.vue
-->
<template>
  <Echart id="leftCenter" :options="options" class="left_center_inner" v-if="pageflag" ref="charts" />
  <Reacquire v-else @onclick="getData" style="line-height:200px">
    重新获取
  </Reacquire>
</template>

<!-- <script>
import { currentGET } from 'api/modules'
export default {
  data() {
    return {
      options: {},
      countUserNumData: {
        lockNum: 0,
        onlineNum: 0,
        offlineNum: 0,
        totalNum: 0
      },
      pageflag: true,
      timer: null
    };
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
    getData() {
      this.pageflag = true
      // this.pageflag =false

      currentGET('big1').then(res => {
        //只打印一次
        if (!this.timer) {
          console.log("设备总览", res);
        }
        if (res.success) {
          this.countUserNumData = res.data
          this.$nextTick(() => {
            this.init()
          })

        } else {
          this.pageflag = false
          this.$Message({
            text: res.msg,
            type: 'warning'
          })
        }
      })
    },
    //轮询
    switper() {
      if (this.timer) {
        return
      }
      let looper = (a) => {
        this.getData()
      };
      this.timer = setInterval(looper, this.$store.state.setting.echartsAutoTime);
      let myChart = this.$refs.charts.chart
      myChart.on('mouseover', params => {
        this.clearData()
      });
      myChart.on('mouseout', params => {
        this.timer = setInterval(looper, this.$store.state.setting.echartsAutoTime);
      });
    },
    init() {
      let total = this.countUserNumData.totalNum;
      let colors = ["#ECA444", "#33A1DB", "#56B557"];
      let piedata = {
        name: "用户总览",
        type: "pie",
        radius: ["42%", "65%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 4,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 2,
        },

        color: colors,
        data: [
          // {
          //   value: 0,
          //   name: "告警",
          //   label: {
          //     shadowColor: colors[0],
          //   },
          // },
          {
            value: this.countUserNumData.lockNum,
            name: "中危组件",
            label: {
              shadowColor: colors[0],
            },
          },
          {
            value: this.countUserNumData.onlineNum,
            name: "高危组件",
            label: {
              shadowColor: colors[2],
            },
          },
          {
            value: this.countUserNumData.offlineNum,
            name: "低危组件",
            label: {
              shadowColor: colors[1],
            },
          },


        ],
      };
      this.options = {
        title: {
          // zlevel: 0,
          text: ["{value|" + total + "}", "{name|组件总数}"].join("\n"),
          top: "center",
          left: "center",
          textStyle: {
            rich: {
              value: {
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "bold",
                lineHeight: 20,
              },
              name: {
                color: "#ffffff",
                lineHeight: 20,
              },
            },
          },
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,.6)",
          borderColor: "rgba(147, 235, 248, .8)",
          textStyle: {
            color: "#FFF",
          },
        },
        legend: {
          show: false,
          top: "5%",
          left: "center",
        },
        series: [
          //展示圆点
          {
            ...piedata,
            tooltip: { show: true },
            label: {
              formatter: "   {b|{b}}   \n   {c|{c}个}   {per|{d}%}  ",
              //   position: "outside",
              rich: {
                b: {
                  color: "#fff",
                  fontSize: 12,
                  lineHeight: 26,
                },
                c: {
                  color: "#31ABE3",
                  fontSize: 14,
                },
                per: {
                  color: "#31ABE3",
                  fontSize: 14,
                },
              },
            },
            labelLine: {
              length: 20, // 第一段线 长度
              length2: 36, // 第二段线 长度
              show: true,
            
            },
              emphasis: {
                show: true,
              },
          },
          {
            ...piedata,
            tooltip: { show: true },
            itemStyle: {},
            label: {
              backgroundColor: "inherit", //圆点颜色，auto：映射的系列色
              height: 0,
              width: 0,
              lineHeight: 0,
              borderRadius: 2.5,
              shadowBlur: 8,
              shadowColor: "auto",
              padding: [2.5, -2.5, 2.5, -2.5],
            },
            labelLine: {
              length: 20, // 第一段线 长度
              length2: 36, // 第二段线 长度
              show: false,
            },
          },
        ],
      };
    },
  },
};
</script> -->
<script>
export default {
  data() {
    return {
      options: {},
      pageflag: true,
      timer: null,
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.pageflag = true;
      // TODO: 设置数据
      // 设置固定的组件数据
      this.countUserNumData = {
        lockNum: 50,    // 固定的中危组件数量
        onlineNum: 100, // 固定的高危组件数量
        offlineNum: 30, // 固定的低危组件数量
        totalNum: 180   // 固定的组件总数
      };

      this.$nextTick(() => {
        this.init();
      });
    },
    init() {
      let total = this.countUserNumData.totalNum;
      let colors = ["#ECA444", "#33A1DB", "#56B557"];
      let piedata = {
        name: "用户总览",
        type: "pie",
        radius: ["42%", "65%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 4,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 2,
        },

        color: colors,
        data: [
          {
            value: this.countUserNumData.lockNum,
            name: "中危组件",
            label: {
              shadowColor: colors[0],
            },
          },
          {
            value: this.countUserNumData.onlineNum,
            name: "高危组件",
            label: {
              shadowColor: colors[2],
            },
          },
          {
            value: this.countUserNumData.offlineNum,
            name: "低危组件",
            label: {
              shadowColor: colors[1],
            },
          },
        ],
      };
      this.options = {
        title: {
          text: ["{value|" + total + "}", "{name|组件总数}"].join("\n"),
          top: "center",
          left: "center",
          textStyle: {
            rich: {
              value: {
                color: "#ffffff",
                fontSize: 24,
                fontWeight: "bold",
                lineHeight: 20,
              },
              name: {
                color: "#ffffff",
                lineHeight: 20,
              },
            },
          },
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,.6)",
          borderColor: "rgba(147, 235, 248, .8)",
          textStyle: {
            color: "#FFF",
          },
        },
        legend: {
          show: false,
          top: "5%",
          left: "center",
        },
        series: [
          {
            ...piedata,
            tooltip: { show: true },
            label: {
              formatter: "   {b|{b}}   \n   {c|{c}个}   {per|{d}%}  ",
              rich: {
                b: {
                  color: "#fff",
                  fontSize: 12,
                  lineHeight: 26,
                },
                c: {
                  color: "#31ABE3",
                  fontSize: 14,
                },
                per: {
                  color: "#31ABE3",
                  fontSize: 14,
                },
              },
            },
            labelLine: {
              length: 20,
              length2: 36,
              show: true,
            },
            emphasis: {
              show: true,
            },
          },
        ],
      };
    },
  },
};
</script>
<style lang='scss' scoped>
</style>