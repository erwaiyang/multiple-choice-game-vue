<template>
  <header class="header">
    <h1>Multiple Choice Game</h1>
    <ul>
      <li>Sign In / Sign Up</li>
      <li>How to Use</li>
      <li>Github</li>
    </ul>
  </header>
</template>

<script>
export default {
};
</script>

<style scoped>
header{
  display: flex;
}

h1 {
  flex: 1;
  text-align: left;
  font-weight: normal;
}

ul {
  display: inline-flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
