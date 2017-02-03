<template>
  <div id="app">
    <top></top>
    <slogan></slogan>
  </div>
</template>

<script>
import Top from './components/Top';
import Slogan from './components/Slogan';

export default {
  name: 'app',
  components: {
    Top,
    Slogan,
  },
};
</script>

<style>
@import "normalize.css";

html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
