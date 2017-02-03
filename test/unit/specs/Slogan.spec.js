import Vue from 'vue';
import Slogan from 'src/components/Slogan';

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Slogan),
    });
    expect(vm.$el.querySelector('.slogan h1').textContent)
      .to.equal('The Simplest but Funniest Game.');
  });
});
