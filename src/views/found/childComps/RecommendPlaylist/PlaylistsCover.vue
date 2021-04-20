<template>
  <cover class="cover">
    <img slot="img" src="~assets/img/me.jpg" />
    <div class="amount" slot="amount">
      <van-icon name="play" />
      <span>101万</span>
    </div>
    <p slot="text">春天是向无人路过的樱花要一场</p>
  </cover>
</template>

<script>
import Cover from "components/common/Cover/Cover.vue";
export default {
  components: { Cover },
};
</script>

<style>
.amount {
  display: flex;
  align-items: center;
  color: #fff;
}
</style>
