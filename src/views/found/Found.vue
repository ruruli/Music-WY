<template>
  <div id="found">
    <!-- 搜索 -->
    <nav-bar class="found-nav">
      <div slot="center">搜索</div>
    </nav-bar>
    <!-- 轮播 -->
    <found-swiper class="found-swiper" :banners="banners"></found-swiper>
    <!-- 图标入口 -->
    <recommend-view :recommend="recommend"></recommend-view>
    <!-- 推荐歌单 -->
    <recommend-playlist class="playlist"></recommend-playlist>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import FoundSwiper from "./childComps/FoundSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import RecommendPlaylist from "./childComps/RecommendPlaylist/RecommendPlaylist.vue";
import {
  getFoundMultidata,
  getFoundRecommend,
  getFoundPlaylist,
  getLogin,
} from "network/found.js";
export default {
  name: "Found",
  components: { NavBar, FoundSwiper, RecommendView, RecommendPlaylist },
  data() {
    return {
      banners: [],
      recommend: [],
      // playlistComps: [],
    };
  },
  created() {
    // 登录
    var info = {
      email: "kbd_nssb@163.com",
      password: "yunru228.",
    };
    getLogin(info).then((res) => {
      console.log(res);
    });
    // 首页-发现-轮播图
    getFoundMultidata().then((res) => {
      var bannerArr = [];
      res.data.banners.forEach((element) => {
        bannerArr.push({
          link: element.url,
          image: element.pic,
        });
      });
      this.banners = bannerArr;
    });
    //首页-发现-圆形图标入口列表
    getFoundRecommend().then((res) => {
      var resD = res.data;
      if (resD.code == 200) {
        this.recommend = resD.data;
      }
    });
    // 推荐歌单
    getFoundPlaylist().then((res) => {
      // console.log(res);
    });
  },
};
</script>
<style scoped>
.found-nav {
  background: #dadee1;
  background: -moz-linear-gradient(top, #dadee1 0%, #fefefe 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #dadee1),
    color-stop(100%, #fefefe)
  );
  background: -webkit-linear-gradient(top, #dadee1 0%, #fefefe 100%);
  background: -o-linear-gradient(top, #dadee1 0%, #fefefe 100%);
  background: -ms-linear-gradient(top, #dadee1 0%, #fefefe 100%);
  background: linear-gradient(to bottom, #dadee1 0%, #fefefe 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dadee1', endColorstr='#fefefe',GradientType=0 );
}
.found-swiper {
  margin: 2px 4%;
  border-radius: 15px;
}
.playlist {
  margin: 2px 4%;
}
</style>
