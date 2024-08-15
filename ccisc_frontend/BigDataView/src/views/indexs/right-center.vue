<template>
  <div class="right_bottom">
    <dv-capsule-chart :config="config" style="width:100%;height:260px" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      gatewayno: '',
      config: {
        showValue: true,
        unit: "次",
        // 在这里直接定义固定的数据
        data: [
          { name: "CVE-2016-1409", value:  4891},
          { name: "CVE-2017-6770", value: 3788 },
          { name: "CVE-2016-6380", value: 3334 },
          { name: "CVE-2017-12240", value:  2762},
          { name: "CVE-2017-6736", value: 2056 },
          { name: "CVE-2020-3201", value: 1917 },
          { name: "CVE-2019-1761", value: 1762 },
          { name: "CVE-2021-34705", value: 1722 },
        ]
      },
    };
  },
  methods: {
    // 如果不再需要轮询或获取数据，可以删除相关方法
    // clearData() {
    //   if (this.timer) {
    //     clearInterval(this.timer)
    //     this.timer = null
    //   }
    // },
    // getData() {
    //   this.pageflag = true
    //   currentGET('big7', { gatewayno: this.gatewayno }).then(res => {
    //     if (res.success) {
    //       this.config = {
    //         ...this.config,
    //         data: res.data
    //       }
    //       this.switper()
    //     } else {
    //       this.pageflag = false
    //       this.srcList = []
    //       this.$Message({
    //         text: res.msg,
    //         type: 'warning'
    //       })
    //     }
    //   })
    // },
  },
};
</script>

<style lang='scss' scoped>
.list_Wrap {
  height: 100%;
  overflow: hidden;
  :deep(.kong)   {
    width: auto;
  }
}

.sbtxSwiperclass {
  .img_wrap {
    overflow-x: auto;
  }
}

.right_bottom {
  box-sizing: border-box;
  padding: 0 16px;
  .searchform {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    .searchform_item {
      display: flex;
      justify-content: center;
      align-items: center;
      label {
        margin-right: 10px;
        color: rgba(255, 255, 255, 0.8);
      }
      button {
        margin-left: 30px;
      }
      input {}
    }
  }
  .img_wrap {
    display: flex;
    box-sizing: border-box;
    padding: 0 0 20px;
    li {
      width: 105px;
      height: 137px;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;
      flex-shrink: 0;
      margin: 0 10px;
      img {
        flex-shrink: 0;
      }
    }
  }
  .noData {
    width: 100%;
    line-height: 100px;
    text-align: center;
    color: rgb(129, 128, 128);
  }
}
</style>