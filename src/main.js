import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  mounted: function() {
    let viewHeight = window.innerHeight;
    let viewWidth = window.innerWidth;
    let viewport = document.querySelector("meta[name=viewport]");
    console.log(viewHeight);
    console.log(viewWidth);
    viewport.setAttribute("content", "height=" + viewHeight + ", width=" + viewWidth + ", initial-scale=1.0");
  }
}).$mount('#app');