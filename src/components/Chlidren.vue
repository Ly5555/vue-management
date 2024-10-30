<!--
 * @Author: Lyq 
 * @Date: 2024-10-29 22:11:31
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-10-30 22:37:13
-->
<script lang="tsx">
import { defineComponent,  reactive,  } from "vue";
export default defineComponent({
  name: "Chlidren",
  props: { count: Number, onFunc: Function },
  setup(props, { emit,expose }) {
    let info = reactive({
      name: "lq",
      age: "20",
    });
    const handelClick = () => {
      //调用父组件传递过来的方法，传入参数修改父组件的值
     emit("onFunc", 100);
    };

    expose({ info });
    return () => (
      <div>
        <button onClick={handelClick}>子组件按钮</button>
      </div>
    );
  },
});
</script>
