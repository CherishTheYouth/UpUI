import MyButton from "../MyButton";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("MyButton", () => {
  test("mount", () => {
    const wrapper = shallowMount(MyButton, {
      slots: {
        default: "MyButton",
      },
    });

    expect(wrapper.text()).toBe("MyButton");
  });
});
