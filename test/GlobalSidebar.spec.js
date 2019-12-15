import { mount } from "@vue/test-utils";
import GlobalSidebar from "@/components/GlobalSidebar.vue";

describe("GlobalSidebar", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(GlobalSidebar);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
