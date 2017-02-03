<template>
  <section class="samples">
    <ul>
      <li v-for="q in questions">
        <div class="question" v-html="compiledMd(q.q)"></div>
        <ol>
          <li v-for="ans in q.answers" v-html="compiledMd(ans)">
          </li>
        </ol>
      </li>
    </ul>
  </section>
</template>

<script>
import marked from 'marked';
import data from 'data/samples';

export default {
  name: 'samples',
  data() {
    return {
      questions: data,
    };
  },
  methods: {
    compiledMd(plainText) {
      return marked(plainText, { sanitize: true });
    },
  },
};
</script>

<style scoped>
</style>
