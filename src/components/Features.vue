<template>
  <section class="features">
    <ul>
      <li class="feature" v-for="feature in data">
        <h3>{{ feature.title }}</h3>
      </li>
    </ul>
  </section>
</template>

<script>
import data from 'data/features';

export default {
  name: 'features',
  data() {
    return {
      data,
    };
  },
};
</script>

<style scoped>
section{
  padding: 1rem;
}
ul{
  display: flex;
  flex-direction: row;
}
.feature{
  flex: 1 0 auto;
}
@media only screen and (max-width: 768px){
  ul{
    flex-direction: column;
  }
}
</style>
