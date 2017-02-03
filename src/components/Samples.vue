<template>
  <section class="samples">
    <ul>
      <li v-for="q in questions">
        {{ q.q }}
        <ol>
          <li v-for="ans in q.answers">
            {{ ans }}
          </li>
        </ol>
      </li>
    </ul>
  </section>
</template>

<script>
import data from 'data/samples';

export default {
  name: 'samples',
  data() {
    return {
      questions: data,
    };
  },
};
</script>

<style scoped>
</style>
