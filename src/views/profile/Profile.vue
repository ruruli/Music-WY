<template>
  <div id="profile">
    <nav-bar>
      <div slot="left">
        <div class="mybadge">
          <van-badge dot>
            <van-icon name="wap-nav" size="30px" />
          </van-badge>
        </div>
      </div>
    </nav-bar>
    <!-- 个人信息 -->
    <div class="my_info flex">
      <div class="img-box">
        <img src="~assets/img/me.jpg" alt="头像" />
      </div>
      <div class="txt-box">
        <p>茹茹</p>
        <p class="flex">
          <img src="~assets/img/vip.png" alt="vip开通" />
          <span> Lv.9 </span>
        </p>
      </div>
      <div>
        <van-icon name="arrow" size="20" />
      </div>
    </div>
    <!-- 功能快 -->
    <div class="domain flex">
      <div v-for="item in 8" class="domain-item flex_c">
        <img src="./imgs/local.png" alt="" />
        <p>本地/下载</p>
      </div>
    </div>
    <!-- 我喜欢的 -->
    <div class="favorite flex">
      <div class="f-thumbnail">
        <div class="img-mask"></div>
        <van-icon name="like" color="#fff" size="20" />
      </div>
      <div class="f-numb flex_c">
        <p>我最喜欢的音乐</p>
        <p class="flex">
          <van-icon name="passed" color="#5cb8eb" />
          <span> 54首</span>
          <span> 已下载：2首 </span>
        </p>
      </div>
      <div class="f-pattern flex_c">
        <div class="flex">
          <van-icon name="like-o" />
          <p>心动模式</p>
        </div>
      </div>
    </div>
    <!-- 歌单 -->
    <div class="song_sheet">
      <div class="s-title flex">
        <p>创建歌单</p>
        <p style="color: #d8d8d8">｜</p>
        <p class="tip">收藏歌单</p>
        <div class="s-mask"></div>
        <p>歌单助手</p>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },
  name: "Profile",
};
</script>
<style scoped lang="less">
#profile {
  background-color: #f2f2f2;
  height: 100vh;
  width: 100vw;
  padding-left: 15.625px;
  padding-right: 15.625px;
  > div {
    border-radius: 8px;
  }
}
.mybadge {
  height: 30px;
  text-align: left;
}
.my_info {
  padding: 15.625px 0;
}
.img-box {
  width: 48.61px;
  height: 48.61px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  margin-left: 10.416px;
  margin-right: 10.416px;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.txt-box {
  flex: 1;
  :first-child {
    font-size: 16px;
  }
  > :last-child {
    height: 15.972px;
    margin-top: 6.944px;
    > img {
      height: 100%;
    }
    > span {
      background-color: #ffffff;
      height: 100%;
      width: 31.25px;
      border-radius: 15px;
      text-align: center;
      line-height: 15.972px;
      margin-left: 3.472px;
      color: #2b2b2b;
    }
  }
}
.domain {
  background-color: #ffffff;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  > .domain-item {
    width: 82.291px;
    height: 85.069px;
    justify-content: space-evenly;
    align-items: center;
    > img {
      width: 29.513px;
      height: 29.513px;
    }
  }
}
.favorite {
  background-color: #ffffff;
  margin: 13.888px 0;
  padding: 15.625px;
  > div {
    height: 48.611px;
  }
  .f-thumbnail {
    width: 48.611px;
    background-size: contain;
    background-image: url("~assets/img/me.jpg");
    position: relative;
    border-radius: 8px;
    .img-mask {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(00, 00, 00, 0.5);
      border-radius: 8px;
    }
    > i {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .f-numb {
    margin-left: 10.416px;
    justify-content: space-evenly;
    flex: 1;
    :first-child {
      font-size: 14px;
    }
    :last-child {
      color: #a9a9a9;
    }
    i {
      padding-right: 6.25px;
    }
  }
  .f-pattern {
    justify-content: center;
    > div {
      border-radius: 25px;
      border: 1px solid #eaeaea;
      width: 77.43px;
      height: 24.305px;
      justify-content: space-evenly;
    }
  }
}
.song_sheet {
  font-size: 18px;
  color: #4a4a4a;
  .s-title {
    justify-content: space-evenly;
  }
}
</style>