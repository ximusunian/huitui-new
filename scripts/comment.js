/*
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-12-14 16:21:55
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-12-15 15:46:41
 */
$(function () {
  function setRem() {
    let baseSize = 100;
    let vW = window.innerWidth;
    let basePc;
    if (vW > 1000) {
      basePc = baseSize / 1920;
    } else {
      basePc = baseSize / 750;
    }
    let rem = vW * basePc;
    document.documentElement.style.fontSize = rem + "px";
  }

  function showType() {
    let vW = window.innerWidth;
    let pc = document.getElementById("pc")
    let web = document.getElementById("web")
    if (vW > 1000) {
      pc.style.display = "block"
      web.style.display = "none"
    } else {
      pc.style.display = "none"
      web.style.display = "block"
    }
  }

  // 初始化
  setRem();
  showType()

  // 改变窗口大小时重新设置 rem
  window.onresize = function () {
    setRem()
    showType()
  };
})
