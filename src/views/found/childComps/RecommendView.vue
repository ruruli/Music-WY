<template>
  <div class="recommend">
    <div class="item" v-for="(item, i) in recommend">
      <a :href="item.url">
        <div class="imgBox">
          <img :src="item.iconUrl" alt="" />
          <p v-if="i == 0" class="today">{{ today }}</p>
        </div>
      </a>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      today: "",
    };
  },
  created() {
    // var _this = this; //生命一个变量指向Vue实例this,保证作域一致
    this.today = new Date().getDate();
  },
};
</script>

<style>
.recommend {
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  font-size: 12px;
  padding: 5px 4% 15px;
  border-bottom: 1px solid #eee;
}

.imgBox {
  position: relative;
}
.recommend img {
  background-color: #eb1b00;
  background-image: linear-gradient(90deg, #eb1b00, #ec5f4c);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 5px 8px;
}
.today {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}
</style>
