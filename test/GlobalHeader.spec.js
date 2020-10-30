import { mount } from "@vue/test-utils";
import GlobalHeader from "@/components/GlobalHeader.vue";

describe("GlobalHeader", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(GlobalHeader, {
      stubs: [
        "b-navbar",
        "b-navbar-brand",
        "b-navbar-toggle",
        "b-collapse",
        "b-navbar-nav",
        "b-nav-item",
      ],
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
