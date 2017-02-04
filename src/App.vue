<template>
  <div id="app">
    <top></top>
    <slogan></slogan>
    <samples></samples>
    <create-your-own></create-your-own>
    <features></features>
  </div>
</template>

<script>
import Top from './components/Top';
import Slogan from './components/Slogan';
import Samples from './components/Samples';
import CreateYourOwn from './components/CreateYourOwn';
import Features from './components/Features';

export default {
  name: 'app',
  components: {
    Top,
    Slogan,
    Samples,
    CreateYourOwn,
    Features,
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
  margin: 0;
  padding: 0;
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
