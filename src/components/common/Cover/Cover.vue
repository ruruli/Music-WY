<template>
  <div class="playlistsCover">
    <div class="cover">
      <slot name="img"></slot>
      <div class="label">
        <slot name="amount"></slot>
      </div>
    </div>
    <div class="txt">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.playlistsCover {
  width: 120px;
  font-size: 12px;
}
.cover {
  position: relative;
}
.cover > img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.label {
  border: none;
  background-color: rgb(0 0 0 /0.1);
  position: absolute;
  top: 5px;
  right: 10px;
  border-radius: 25px;
  padding: 3px 5px;
}
</style>
