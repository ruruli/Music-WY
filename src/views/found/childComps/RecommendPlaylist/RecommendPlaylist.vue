<template>
  <div class="recommendPlaylist">
    <div class="play_title">
      <p>推荐歌单</p>
      <van-button class="play_title_btn" round type="default">
        <span>更多</span>
        <van-icon name="arrow" />
      </van-button>
    </div>
    <div class="play_content">
      <playlists-cover></playlists-cover>
    </div>
  </div>
</template>

<script>
import PlaylistsCover from "./PlaylistsCover.vue";
export default {
  components: { PlaylistsCover },
};
</script>

<style>
.recommendPlaylist .play_title {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
}
.play_title > p {
  font-size: 18px;
  font-weight: 600;
}
.play_title_btn {
  height: 30px;
}
.van-button__text {
  display: flex;
  align-items: center;
}
</style>
