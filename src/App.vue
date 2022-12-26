<template>
    <router-view />
    <FooterMusic></FooterMusic>
</template>

<script>
import FooterMusic from './components/MusicSheet/FooterMusic.vue';

export default {
    components: FooterMusic
  }
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
