<template>
  <div id="app">
    <top></top>
    <slogan></slogan>
    <samples></samples>
  </div>
</template>

<script>
import Top from './components/Top';
import Slogan from './components/Slogan';
import Samples from './components/Samples';

export default {
  name: 'app',
  components: {
    Top,
    Slogan,
    Samples,
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
