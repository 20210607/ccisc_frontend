<template>
  <div v-if="pageflag" class="right_center_wrap beautify-scroll-def" :class="{ 'overflow-y-auto': !sbtxSwiperFlag }">
    <component :is="components" :data="list" :class-option="defaultOption">
      <ul class="right_center">
        <li class="right_center_item" v-for="(item, i) in list" :key="i">
          <span class="orderNum">{{ i + 1 }}</span>
          <div class="inner_right">
            <div class="dibu"></div>
            <div class="flex">
              <div class="info">
                <span class="labels">漏洞编号：</span>
                <span class="contents zhuyao">{{ item.gatewayno }}</span>
              </div>
              <!-- <div class="info">
                <span class="labels">危险程度：</span>
                <span class="contents warning">{{ item.alertvalue | montionFilter }}</span>
              </div> -->
            </div>
            <div class="flex">
              <div class="info">
                <span class="labels">增强内容：</span>
                <span class="contents ciyao" :class="{ warning: item.alertdetail }">{{ item.alertdetail || '无' }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </component>
  </div>
  <Reacquire v-else @onclick="getData" style="line-height:200px" />
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll';
import Kong from '../../components/kong.vue';

export default {
  components: { vueSeamlessScroll, Kong },

  data() {
    return {
      list: [
        // 固定的数据列表
        { gatewayno: 'CVE-2024-3094', alertvalue: '高', alertdetail: '漏洞描述：在xz项目的源代码中，自5.6.0版本起，发现了一系列恶意代码。攻击者利用了复杂的混淆技术，通过构建过程中的一个伪装的测试文件，提取出一个预编译的对象文件，然后利用这个对象文件修改了特定函数，从而可能导致任意代码执行的缓冲区溢出漏洞。这种漏洞的隐蔽性和潜在危害可能远大于已知的后门，因为它允许恶意的xz文件与任何其他无关软件的发布进行链式攻击。' },
        { gatewayno: 'CVE-2023-47038', alertvalue: '', alertdetail: '影响组件：Perl' },
        { gatewayno: '003', alertvalue: '低', alertdetail: '存在低风险漏洞' },
        { gatewayno: '003', alertvalue: '低', alertdetail: '存在低风险漏洞' },
        // 更多固定数据...
      ],
      pageflag: true,
      defaultOption: {
        ...this.$store.state.setting.defaultOption,
        limitMoveNum: 3,
        singleHeight: 250,
        step: 0,
      },
    };
  },
  computed: {
    sbtxSwiperFlag() {
      let ssyjSwiper = this.$store.state.setting.ssyjSwiper;
      this.components = ssyjSwiper ? vueSeamlessScroll : Kong;
      return ssyjSwiper;
    },
  },
};
</script>

<style lang='scss' scoped>
.right_center {
  width: 100%;
  height: 100%;
  .right_center_item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 10px;
    font-size: 14px;
    color: #fff;
    .orderNum {
      margin: 0 20px 0 -20px;
    }
    .inner_right {
      position: relative;
      height: 100%;
      width: 400px;
      flex-shrink: 0;
      line-height: 1.5;
      .dibu {
        position: absolute;
        height: 2px;
        width: 104%;
        background-image: url("../../assets/img/zuo_xuxian.png");
        bottom: -12px;
        left: -2%;
        background-size: cover;
      }
    }
    .info {
      margin-right: 10px;
      display: flex;
      align-items: center;
      .labels {
        flex-shrink: 0;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.6);
      }
      .zhuyao {
        color: $primary-color;
        font-size: 15px;
      }
      .ciyao {
        color: rgba(255, 255, 255, 0.8);
      }
      .warning {
        color: #E6A23C;
        font-size: 15px;
      }
    }
  }
}

.right_center_wrap {
  overflow: hidden;
  width: 100%;
  height: 250px;
}

.overflow-y-auto {
  overflow-y: auto;
}
</style>