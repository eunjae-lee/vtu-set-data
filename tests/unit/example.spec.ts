import { mount } from '@vue/test-utils';

const Comp = {
  template: `
    <div>{{state.items.join(",")}}</div>
  `,
  data() {
    return {
      state: {
        items: ['1'],
      },
    };
  },
};

describe('provide', () => {
  it('works in an object form', async () => {
    const wrapper = mount(Comp);
    expect(wrapper.html()).toMatchInlineSnapshot(`<div>1</div>`);

    await wrapper.setData({ state: { items: ['2', '3'] } });
    expect(wrapper.html()).toMatchInlineSnapshot(`<div>2,3</div>`);
  });
});
