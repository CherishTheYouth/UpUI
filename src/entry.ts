import { App } from "vue";
import MyButton from "./MyButton";
import UpButton from "./UpButton/index.vue";
import JSXButton from "./JSXButton";

export { MyButton, UpButton, JSXButton };

export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(UpButton.name, UpButton);
    app.component(JSXButton.name, JSXButton);
  },
};
