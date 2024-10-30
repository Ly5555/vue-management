<!--
 * @Author: Lyq 
 * @Date: 2024-10-24 19:46:34
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-10-30 22:28:14
-->
<!-- <template>
  <div>
    <h1>计数器</h1>
    <p>当前计数: {{ count }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="reset">重置</button>
    <button @click="reset2">获取子组件传递过来的值</button>
    <Chlidren :count="count" @func="reset"  ref="testRef" />
  </div>
</template> -->
<script lang="tsx">
import { ref } from "vue";
import Chlidren from "./Chlidren.vue";

export default {
  name: "TheWelcome",
  setup() {
    const count = ref(0);
    const testRef = ref<any>();
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    const reset = () => {
      count.value = 0;
    };
    const reset2 = () => {
      const { info } = testRef.value;
      console.log(info);
      
    };
    return () => (
      <div>
        <h1>计数器</h1>
        <p>当前计数: {count.value}</p>
        <button onClick={increment}>增加</button>
        <button onClick={decrement}>减少</button>
        <button onClick={reset}>重置</button>
        <button onClick={reset2}>获取子组件传递过来的值</button>
        <Chlidren count={count.value} onFunc={reset} ref={testRef} />
      </div>
    );
  },
};
</script>
