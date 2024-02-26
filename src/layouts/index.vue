<script lang="tsx">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "LayoutIndex",
  setup() {
    const count = ref(0);
    return () => (
      <>
        <el-row>
          <el-col span="4"></el-col>
          <el-col span="20"> 123</el-col>
        </el-row>
      </>
    );
  },
});
</script>

<style lang="less" module>
// @import "./index.module.less";
</style>
