<!--
 * @Author: Lyq 
 * @Date: 2024-10-29 22:11:31
 * @LastEditors: Lyq 
 * @LastEditTime: 2024-11-02 22:19:55
-->
<script lang="tsx">
import { defineComponent, reactive, type PropType } from "vue";

const Chlidren = defineComponent({
  props: {
    count: { type: Number },
    onReset: {
      type: Function as PropType<(value: any) => void>,
      required: true,
    },
  },
  emits: ["reset"],
  setup(props, context) {
    const info = reactive({
      name: "lq",
      age: "20",
    });
    const handelClick = () => {
      //调用父组件传递过来的方法，传入参数修改父组件的值
      context.emit("reset",100);
    };

    context.expose({ info });
    return () => (
      <div>
        <button onClick={handelClick}>子组件按钮</button>
      </div>
    );
  },
});

export default Chlidren;
</script>
