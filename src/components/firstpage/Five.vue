<template>
  <div class="table">
    <div class="table-title">▎ 这里是表五</div>
    <el-scrollbar style="height: 100%; width: 100%">
      <!-- 滚动条 -->
      <el-table
        :data="tableData"
        style="height: 100%; color: #49494a"
        ref="multipleTable"
        :row-class-name="tableRowClassName"
        :header-cell-style="getRowClass"
      >
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <span>{{ scope.row.a }}</span>
          </template>
        </el-table-column>
        <el-table-column label="性别">
          <template slot-scope="scope">
            <span>{{ scope.row.b }}</span>
          </template>
        </el-table-column>

        <el-table-column label="年龄">
          <template slot-scope="scope">
            <span>{{ scope.row.g }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-scrollbar>
  </div>
</template>


<script>
export default {
  name: "Five",
  data() {
    return {
      tableData: [
        {
          a: "张三",
          b: "男",
          g: "45",
        },
        {
          a: "张三",
          b: "男",
          g: "45",
        },
        {
          a: "张三",
          b: "男",
          g: "45",
        },
        {
          a: "张三",
          b: "男",
          g: "45",
        },
        {
          a: "张三",
          b: "男",
          g: "45",
        },
        {
          a: "张三",
          b: "男",
          g: "45",
        },
        {
          a: "张三",
          b: "男",
          g: "45",
        },
        {
          a: "张三",
          b: "男",
          g: "45",
        },
      ],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if ((rowIndex + 1) % 2 === 0) {
        return "double";
      } else {
        return "single";
      }
    },
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#ebeaef";
      } else {
        return "";
      }
    },
  },
};
</script>
<style>
.table {
  width: 100%;
  height: 90%;
}

/*更改表格颜色*/
.double {
  background: #f6f6f6 !important;
}
.single {
  background: #ccc !important;
}
.table-title {
  font-size: 18px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 5px;
}
</style>
