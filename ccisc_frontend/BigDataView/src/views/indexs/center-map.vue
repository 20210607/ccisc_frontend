
<template>
  <div class="centermap">
    <div class="maptitle">
      <div class="zuo"></div>
      <span class="titletext">{{ maptitle }}</span>
      <div class="you"></div>
    </div>
    <div class="mapwrap">
      <dv-border-box-13>
        <Echart id="CenterMap" :options="options" ref="CenterMap" />
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      maptitle: "系统数据对比",
      options: {},
  
    };
  },
  created(){},
  mounted() {
    this.loadChart();
  },
  methods: {
    loadChart() {
      const dataBJ = [
        [8326, 9251, 2433, 7448, 9070],
        // [10000, 10000, 10000, 10000, 10000],
        
        
        // Add more data points here...
      ];
      const dataSH = [
      [10000, 10000, 10000, 10000, 10000],
      ];
      // const dataSH = [
      //   [91, 45, 125, 0.82, 34, 23, 1],
      //   [65, 27, 78, 0.86, 45, 29, 2],
      //   [83, 60, 84, 1.09, 73, 27, 3],
      //   // Add more data points here...
      // ];
      const lineStyle = {
        width: 1,
        opacity: 0.5
      };
      
      this.options = {
        // backgroundColor: ,
        title: {
          // text: this.maptitle,
          left: 'center',
          textStyle: {
            color: '#eee'
          }
        },
        legend: {
          bottom: 5,
          data: ['NVD', '擎源'],
          itemGap: 20,
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          selectedMode: 'single'
        },
        radar: {
          indicator: [
            { name: '参考链接大于1条', max: 10000 },
            { name: 'CWE编号', max: 10000 },
            { name: '漏洞补丁', max: 10000 },
            { name: 'CVSS V2', max: 10000 },
            { name: 'CVSS V3', max: 10000 },
            
          ],
          shape: 'circle',
          splitNumber: 5,
          axisName: {
            color: 'rgb(238, 197, 102)'
          },
          splitLine: {
            lineStyle: {
              color: [
                'rgba(238, 197, 102, 0.1)',
                'rgba(238, 197, 102, 0.2)',
                'rgba(238, 197, 102, 0.4)',
                'rgba(238, 197, 102, 0.6)',
                'rgba(238, 197, 102, 0.8)',
                'rgba(238, 197, 102, 1)'
              ].reverse()
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(238, 197, 102, 0.5)'
            }
          }
        },
        series: [
          {
            name: 'NVD',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataBJ,
            symbol: 'none',
            itemStyle: {
              color: '#F9713C'
            },
            areaStyle: {
              opacity: 0.1
            }
          },
          {
            name: '擎源',
            type: 'radar',
            lineStyle: lineStyle,
            data: dataSH,
            symbol: 'none',
            itemStyle: {
              color: '#B3E4A1'
            },
            areaStyle: {
              opacity: 0.05
            }
          },
          // {
          //   name: 'Guangzhou',
          //   type: 'radar',
          //   lineStyle: lineStyle,
          //   data: dataGZ,
          //   symbol: 'none',
          //   itemStyle: {
          //     color: 'rgb(238, 197, 102)'
          //   },
          //   areaStyle: {
          //     opacity: 0.05
          //   }
          // }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.centermap {
  margin-bottom: 30px;

  .maptitle {
    height: 60px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    box-sizing: border-box;

    .titletext {
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 6px;
      background: linear-gradient(
        92deg,
        #0072ff 0%,
        #00eaff 48.8525390625%,
        #01aaff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 10px;
    }

    .zuo,
    .you {
      background-size: 100% 100%;
      width: 29px;
      height: 20px;
      margin-top: 8px;
    }

    .zuo {
      background: url("../../assets/img/xiezuo.png") no-repeat;
    }

    .you {
      background: url("../../assets/img/xieyou.png") no-repeat;
    }
  }

  .mapwrap {
    height: 548px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
  }
}
</style>