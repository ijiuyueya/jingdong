<template>
  <div class="position">
  <span class="iconfont position__icon">&#xe7f1;</span>
    学府花苑 1600弄26号楼402
  <span class="iconfont position__notice">&#xe727;</span>
</div>

<div class="search">
  <div class="iconfont search__icon">&#xe62f;</div>
  <div class="search__text">这是搜索栏</div>
</div>

<div class="banner">
  <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
</div>

<div class="icons">
  <div class="icons__item"
     v-for="item in iconsList"
     :key="item.desc"
  >
    <img
      class="icons__item__img"
      :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
    />
    <p class="icons__item__desc">{{item.desc}}</p>
  </div>
</div>
<div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医药健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' }
    ]
    return { iconsList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper{
  overflow-y:auto;
  position: absolute;
  left:0;
  top:0;
  bottom: .5rem;
  right: 0;
  padding:0 .18rem .1rem .18rem;
}
.position{
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height:.22rem;
  font-size:.16rem;
  @include ellipsis;
  .position__icon{
    position:relative;
    top:.02rem;
    font-size: .2rem;
  }
  .position__notice{
     position: absolute;
     right:0;
     top:.18rem;
     font-size:.2rem;
  }
}
.search{
  margin-bottom:.12rem;
  line-height:.32rem;
  background-color:$search-bgColor;
  color:$search-fontColor;
  border-radius:.16rem;
  .iconfont{
    position: relative;
    top:.02rem;
    display: inline-block;
    padding: 0 .06rem 0 .16rem;
    font-size:.16rem;
  }
  &__text{
    display: inline-block;
    font-size:.14rem;
  }
}

.banner{
  height:0;
  overflow: hidden;
  padding-bottom:25.4%;
  &__img{
    width: 100%;
  }
}

.icons{
  display:flex;
  flex-wrap:wrap;
  margin-top:.16rem;
  &__item{
    width:20%;
    &__img{
      display:block;
      height:.4rem;
      width:.4rem;
      margin:0 auto;
    }
    &__desc{
      padding: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap{
  margin: 0 -.18rem;
  height: .1rem;
  background:$content-bgColor;
}
</style>
