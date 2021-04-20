<template>
    <tab-bar>
      <tab-bar-item path="/Found" activeColor="#C10D0C">
        <img slot="item-icon" src="~assets/img/tabbar/found.svg" alt="发现" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/found_active.svg"
          alt="发现"
        />
        <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item path="/Podcast" activeColor="#C10D0C">
        <img slot="item-icon" src="~assets/img/tabbar/podcast.svg" alt="播客" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/podcast_active.svg"
          alt="播客"
        />
        <div slot="item-text">播客</div>
      </tab-bar-item>
      <tab-bar-item path="/Profile" activeColor="#C10D0C">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="我的" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt="我的"
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
      <tab-bar-item path="/KSong" activeColor="#C10D0C">
        <img slot="item-icon" src="~assets/img/tabbar/kSong.svg" alt="K歌" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/kSong_active.svg"
          alt="K歌"
        />
        <div slot="item-text">K歌</div>
      </tab-bar-item>
      <tab-bar-item path="/Cloud" activeColor="#C10D0C">
        <img slot="item-icon" src="~assets/img/tabbar/cloud.svg" alt="云村" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/cloud_active.svg"
          alt="云村"
        />
        <div slot="item-text">云村</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  components: { TabBar, TabBarItem },
  name: "MainTabBar",
};
</script>
<style scoped></style>
