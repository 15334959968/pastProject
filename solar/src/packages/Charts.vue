<template>
  <section class="sl-charts">
    <transition name="diffure">
      <div class="center torus"></div>
    </transition>
    <!-- 数据一 -->
    <section class="wrapper top-left top left" :class="{ show: isShow }">
      <div class="table">
        <div class="tr">
          <span class="th">姓名</span>
          <span class="th">上周（排名）</span>
          <span class="th">本周（排名）</span>
        </div>
        <div class="tr" :key="index" v-for="(item, index) of rank">
          <span class="td">{{item.name}}</span>
          <span class="td">{{item.previous}} ( {{item.previousRank}} )</span>
          <span class="td">{{item.current}} ( {{item.currentRank}} )</span>
        </div>
      </div>
      <div class="poly">
        <h3 class="name"> <i class="iconfont icon-cparty"></i> 党员排名</h3>
        <div class="poly-bg"></div>
      </div>
    </section>
    <!-- 数据二 -->
    <section class="wrapper top-right top right" :class="{ show: isShow }">
      <div class="poly">
        <h3 class="name"> <i class="iconfont icon-cparty"></i> 党员分类</h3>
        <div class="poly-bg"></div>
      </div>
      <div class="bar" ref="sector"></div>
    </section>
    <!-- 数据三 -->
    <section class="wrapper bottom-left bottom left" :class="{ show: isShow }">
      <div class="bar" ref="line1"></div>
      <div class="poly">
        <h3 class="name"> <i class="iconfont icon-cparty"></i> 活动对比</h3>
        <div class="poly-bg"></div>
      </div>
    </section>
    <!-- 数据四 -->
    <section class="wrapper bottom-right bottom right" :class="{ show: isShow }">
      <div class="poly">
        <h3 class="name"> <i class="iconfont icon-cparty"></i> 党费缴纳</h3>
        <div class="poly-bg"></div>
      </div>
      <div class="bar" ref="line2"></div>
    </section>

    <div class="dam-board" @click="damClick"></div>
  </section>
</template>

<script>
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/tooltip';

const axisLabel = {
  textStyle: {
    color: '#ddd'
  }
};
const color = ['#34de64', '#f86464', '#34a8ff', '#696ccc', '#fa9022'];

export default {
  name: 'sl-charts',
  props: {
    showData: {
      type: Boolean
    }
  },
  data () {
    return {
      style: {},
      diameter: 20,
      isShow: false,
      rank: []
    };
  },
  methods: {
    getRankList (code) {
      this.$services.charts.getRankList(code).then(data => {
        data.sort((m, n) => m.currentRank - n.currentRank);
        this.rank = data;
      }).catch(error => {
        console.log(error);
      });
    },
    getMemberCategory () {
      this.$services.charts.getMemberCategory().then(data => {
        console.log(data, Math.max(0, this.now + 500 - Date.now()));
        const option = {
          legendData: data.map(item => item.name),
          seriesData: data,
          selected: {}
        };
        setTimeout(() => {
          const myChart = echarts.init(this.$refs.sector);
          myChart.setOption({
            tooltip: {
              trigger: 'item',
              formatter: '{b} : {c} ({d}%)'
            },
            legend: {
              type: 'scroll',
              orient: 'vertical',
              left: 0,
              top: 20,
              bottom: 10,
              data: option.legendData,
              selected: option.selected,
              textStyle: { color: '#ddd' }
            },
            series: [
              {
                name: '姓名',
                type: 'pie',
                radius: '50%',
                center: ['55%', '66%'],
                data: option.seriesData,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ],
            color
          });
        }, Math.max(0, this.now + 500 - Date.now()));
      });
    },
    getActivity () {
      this.$services.charts.getActivity().then(data => {
        setTimeout(() => {
          const myChart = echarts.init(this.$refs.line1);
          myChart.setOption({
            legend: {
              textStyle: { color: '#ddd' },
              top: '10px'
            },
            tooltip: {
              trigger: 'axis',
              showContent: false
            },
            dataset: {
              source: [
                ['product', '1月', '2月', '3月', '4月', '5月'],
                ...data
              ]
            },
            xAxis: {
              type: 'category',
              axisLabel
            },
            yAxis: {
              gridIndex: 0,
              axisLabel
            },
            grid: {
              top: '28%',
              bottom: '20%'
            },
            series: data.map(item => ({
              type: 'line',
              smooth: true,
              seriesLayoutBy: 'row'
            })),
            color
          });
        }, Math.max(0, this.now + 500 - Date.now()));
      });
    },
    getPartyDues () {
      this.$services.charts.getPartyDues().then(data => {
        setTimeout(() => {
          const myChart = echarts.init(this.$refs.line2);
          myChart.setOption({
            legend: {
              textStyle: { color: '#ddd' }
            },
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisLabel
            },
            yAxis: {
              type: 'value',
              axisLabel
            },
            grid: {
              left: '15%',
              top: '16%',
              bottom: '20%'
            },
            series: data.map(item => ({
              data: item,
              type: 'line'
            })),
            color
          });
        }, Math.max(0, this.now + 500 - Date.now()));
      });
    },
    damClick () {
      this.$emit('planetClick', 'aaa');
    }
  },
  watch: {
    showData (newval) {
      this.isShow = newval;
    }
  },
  mounted () {
    setTimeout(() => {
      this.isShow = true;
      this.now = Date.now();
    }, 0);
    this.getRankList();
    this.getMemberCategory();
    this.getActivity();
    this.getPartyDues();
  }
};
</script>

<style lang="scss">
  $chartBg: rgba(255, 255, 255, 0.24);
  .sl-charts {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 166px;
    height: 81px;
    text-align: center;
    transform: translate(-50%, -50%);
    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 5;
    }
    .torus {
      transform: rotateX(60deg);
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: url('../assets/img/torus.png') no-repeat;
        background-size: 100%;
        transform: translate(-50%, -50%);
        animation: torusRotation 6s linear infinite;
      }
      &::before {
        width: 140px;
        height: 140px;
      }
      &::after {
        width: 170px;
        height: 170px;
        animation-duration: 16s;
        animation-direction: reverse;
      }
    }
    .wrapper {
      position: absolute;
      overflow: hidden;
      display: flex;
      width: 0px;
      font-size: 12px;
      text-align: center;
      color: gold;
      transition: width 0.5s;
      &.show {
        width: 480px;
      }
      &.top-left {
        transform: translate(-100%, -100%) translateX(50px);
        .poly-bg {
          transform: rotateY(180deg);
        }
      }
      &.top-right {
        transform: translateY(-100%) translateX(-50px);
      }
      &.bottom-left {
        transform: translateX(-100%) translateX(50px);
        .poly-bg {
          transform: rotate(180deg) translateY(28px);
        }
      }
      &.bottom-right {
        transform: translateX(-50px);
        .poly-bg {
          transform: rotateX(180deg) translateY(28px);
        }
      }
      &.top .poly {
        align-self: flex-end;
      }
      &.left .name {
        margin-right: 24%;
      }
      &.bottom {
        top: 100%;
        .name {
          transform: translateY(24px);
        }
      }
      &.right {
        left: 100%;
        .name {
          margin-left: 24%;
        }
      }
      .poly {
        min-width: 120px;
      }
      .iconfont {
        font-size: 12px;
      }
      .name {
        margin: 0 5px;
        padding: 8px 0;
        text-shadow: 0 0 20px gold, 0 0 20px gold;
        transform: translateY(5px);
      }
      .poly-bg {
        padding-bottom: 55%;
        background: url('../assets/img/polyline.png') no-repeat center bottom;
        background-size: 100%;
      }
      .bar {
        width: 360px;
        height: 200px;
        padding: 0 20px;
        border-radius: 5px;
        background: $chartBg;
      }
    }
    .table {
      overflow-y: auto;
      overflow-x: hidden;
      width: 360px;
      height: 200px;
      padding: 0 20px;
      border: solid transparent;
      border-width: 20px 0;
      border-radius: 5px;
      background: $chartBg;
      color: #fff;
      &::-webkit-scrollbar {
        width: 0px;
        height: 100px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #28b0d2;
      }
      &::-webkit-scrollbar-track {
        border-radius: 0px;
        background: transparent;
      }
      .tr {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 20px;
        border-radius: 3px;
        background: rgba(255, 255, 255, 0.15);
        &:nth-of-type(even) {
          background: rgba(168, 194, 196, 0.3);
        }
        & + .tr {
          margin-top: 3px;
        }
      }
      .th,
      .td {
        flex: 1;
        min-width: 100px;
        text-align: center;
      }
      .th {
        font-size: 14px;
        font-weight: 700;
      }
    }
    .dam-board {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 5;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
    .diffure-enter-active,
    .diffure-leave-active {
      transition: opacity 0.4s, transform 0.5s;
    }
    .diffure-enter,
    .diffure-leave-to {
      opacity: 0;
      transform: rotateX(60deg) scale(8.88);
    }
  }
</style>
