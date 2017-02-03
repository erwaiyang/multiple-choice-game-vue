<template>
  <div id="app">
    <top></top>
    <hello></hello>
  </div>
</template>

<script>
import Top from './components/Top';
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
    Top,
  },
};
</script>

<style>
@import "normalize.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
