import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Header", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Footer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
