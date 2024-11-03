<!--
 * @Author: Lyq 
 * @Date: 2024-10-24 19:46:34
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-11-02 22:22:46
-->
<script lang="tsx">
import { defineComponent, ref } from "vue";
import Chlidren from "./Chlidren.vue";

const TheWelcome = defineComponent({
  setup() {
    const count = ref(0);
    const testRef = ref<any>();
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    const reset = (value: any) => {
      console.log(value,"value");
      
      value ? (count.value = value) : (count.value = 0);
      console.log("Reset triggered");
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
        <Chlidren count={count.value} onReset={reset} ref={testRef} />
      </div>
    );
  },
});
export default TheWelcome;
</script>
