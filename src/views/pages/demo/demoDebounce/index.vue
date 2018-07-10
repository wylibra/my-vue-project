<template>
  <div class="demo-debounce">
    <h2>防抖动与节流</h2>
    <div>
      <h3>防抖动：</h3>
      <h5>实现：限制下次函数调用之前必须等待的时间间隔</h5>
      <span>1、只有当高频事件停止，最后一次事件触发的超时调用才能在delay时间后执行</span>
      <div id="div1">
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
      </div>

      <span>2、立即执行函数，停止n秒之后，再触发执行</span>
      <div id="div2">
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
      </div>
    </div>
    <div>
      <h3>节流：</h3>
      <h5>实现：允许一个函数在规定的时间内只执行一次</h5>
      <span>1、时间戳 - 事件触发时，每delay秒执行一次</span>
      <div id="div3">
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
      </div>
      <span>2、定时器 - 事件触发时，每delay秒执行一次</span>
      <div id="div4">
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
      </div>
      <span>3、综合 - 立即执行，最后一次触发执行</span>
      <div id="div5">
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
        测试测试测试测试测试测试测试测试测试
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {

  },
  data () {
    return {
    }
  },
  mounted () {
    document.title = '防抖动与节流'
    var ele1 = document.getElementById('div1')
    ele1.addEventListener('scroll', this.debounce1(this.foo, 3000))

    var ele2 = document.getElementById('div2')
    ele2.addEventListener('scroll', this.debounce2(this.foo, 3000, true))

    var ele3 = document.getElementById('div3')
    ele3.addEventListener('scroll', this.debounce3(this.foo, 3000))

    var ele4 = document.getElementById('div4')
    ele4.addEventListener('scroll', this.debounce4(this.foo, 3000))

    var ele5 = document.getElementById('div5')
    ele5.addEventListener('scroll', this.debounce5(this.foo, 3000))
  },
  methods: {
    // 每一次事件被触发，都会清除当前的 timer 然后重新设置超时调用,这就会导致每一次高频事件都会取消前一次的超时调用，导致事件处理程序不能被触发
    debounce1 (fn, delay) {
      var timer = null
      return function () {
        clearTimeout(timer)
        timer = setTimeout(function () {
          fn()
        }, delay)
      }
    },
    debounce2 (fn, delay, immediate) {
      var timer = null
      return function () {
        if (timer) {
          clearTimeout(timer)
        }
        if (immediate) {
          var doNow = !timer // 有定时器不执行
          timer = setTimeout(() => {
            timer = null
          }, delay)
          if (doNow) {
            fn()
          }
        } else {
          timer = setTimeout(function () {
            fn()
          }, delay)
        }
      }
    },
    // 时间戳 最后一次函数执行若是小于delay时间 就不会触发事件
    debounce3 (fn, delay) {
      var prev = Date.now()
      return function () {
        var now = Date.now()
        if (now - prev >= delay) {
          fn()
          prev = Date.now()
        }
      }
    },
    // 定时器 第一次会隔delay时间后执行；由于定时器的delay延迟，最后一次的触发还会执行
    debounce4 (fn, delay) {
      var timer = null
      return function () {
        if (!timer) {
          timer = setTimeout(function () {
            fn()
            timer = null
          }, delay)
        }
      }
    },
    // 综合 功能 立即执行，最后一次触发执行
    debounce5 (fn, delay) {
      var timer = null
      var prev = Date.now()
      return function () {
        var now = Date.now()
        var remaining = delay - (now - prev)
        console.log(remaining)
        clearTimeout(timer)
        if (remaining <= 0) {
          fn()
          prev = Date.now()
        } else {
          timer = setTimeout(fn, remaining)
        }
      }
    },
    foo () {
      console.log('you scrolling')
    }
  }
}
</script>
<style lang="less">
.demo-debounce {
  margin-left: 50px;
  color: #606266;
  #div1, #div2, #div3, #div4, #div5 {
    height: 80px;
    width: 150px;
    border: 1px solid pink;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-bottom: 20px;
  }
}
</style>
