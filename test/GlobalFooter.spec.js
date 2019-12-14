import { mount } from "@vue/test-utils";
import GlobalFooter from "@/components/GlobalFooter.vue";

describe("GlobalFooter", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(GlobalFooter);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
