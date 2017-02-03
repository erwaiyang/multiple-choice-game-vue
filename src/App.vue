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

ul, ol, li{
  list-style-type: none;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  -webkit-padding-start: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
