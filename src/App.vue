<template>
  <div id="app">
    <Header></Header>
    <hello></hello>
  </div>
</template>

<script>
import Header from './components/Header';
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
    Header,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
