<template>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe60b;</div>
      <div class="docker__title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe61b;</div>
      <div class="docker__title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe619;</div>
      <div class="docker__title">订单</div>
      </span>
    <span class="docker__item">
      <div class="iconfont">&#xe75e;</div>
      <div class="docker__title">我的</div>
      </span>
  </div>
</template>

<style lang="scss">
.docker {
  display:flex;
  box-sizing: border-box;
  position:absolute;
  padding:0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 1px solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: 20px;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>
