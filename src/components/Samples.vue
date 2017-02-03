<template>
  <section class="samples">
    <ul>
      <li class="sample-questions" v-for="q in questions">
        <div class="question" v-html="compiledMd(q.q)"></div>
        <ol class="answers">
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
section{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sample-questions{
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid grey;
}
.answers li{
  display: inline-block;
  width: 15%;
  margin: 0 1rem;
  border-radius: 15px;
  border: 1px solid grey;
}
@media only screen and (max-width: 768px){
  .answers li{
    display: block;
    width: 100%;
    margin: 1rem 0;
  }
}
</style>
