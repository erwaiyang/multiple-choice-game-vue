<template>
  <section class="slogan">
    <h1>The Simplest but Funniest Game.</h1>
  </section>
</template>

<script>
export default {
};
</script>

<style scoped>
  section{
    background-image: url('../assets/game-time.jpg');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1{
    margin: 0;
    padding: 1rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
</style>
