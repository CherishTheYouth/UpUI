import { createApp, h } from 'vue/dist/vue.esm-bundler.js'
import UpUI from './entry'
// import MyButton from './button'

createApp({
  template: `
    <div>
      <MyButton>普通按钮</MyButton>
      <MyButton color="red" icon="search">普通按钮</MyButton>
      <MyButton color="yellow" icon="edit">普通按钮</MyButton>
      <MyButton color="green" icon="check">普通按钮</MyButton>
      <MyButton color="blue" icon="message">普通按钮</MyButton>
      <MyButton color="indigo" icon="star-off">普通按钮</MyButton>
      <MyButton color="purple" icon="delete">普通按钮</MyButton>
      <MyButton color="pink" icon="add">普通按钮</MyButton>
      <MyButton color="gray" icon="share">普通按钮</MyButton>
    </div>
  `
}).use(UpUI).mount('#app')
