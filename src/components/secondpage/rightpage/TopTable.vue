<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      row-key="id"
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      max-height="330"
      :header-cell-style="{ background: '#161522' }"
    >
      <el-table-column prop="statistics" label="统计" sortable width="180">
      </el-table-column>
      <el-table-column prop="reject" label="拒绝量" sortable width="180">
      </el-table-column>
      <el-table-column prop="rejection" label="拒绝占比" sortable width="180">
      </el-table-column>
      <el-table-column prop="health" label="健康度" sortable width="180">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          statistics: "机房A",
          reject: 190,
          rejection: "59.997%",
          health: "93.223%",
        },
        {
          id: 2,
          statistics: "机房B",
          reject: 96,
          rejection: "28.829%",
          health: "94.333%",
        },
        {
          id: 3,
          statistics: "机房C",
          reject: 94,
          rejection: "27.445%",
          health: "98.227%",
          children: [
            {
              id: 31,
              statistics: "机器A",
              reject: 90,
              rejection: "20.445%",
              health: "93.889%",
            },
            {
              id: 32,
              statistics: "机器B",
              reject: 4,
              rejection: "7%",
              health: "99.335%",
            },
          ],
        },
        {
          id: 4,
          statistics: "机房B",
          reject: 96,
          rejection: "28.829%",
          health: "94.333%",
        },
        {
          id: 5,
          statistics: "机房B",
          reject: 96,
          rejection: "28.829%",
          health: "94.333%",
        },
        {
          id: 6,
          statistics: "机房B",
          reject: 96,
          rejection: "28.829%",
          health: "94.333%",
        },
      ],
    };
  },
};
</script>

<style scoped>
::v-deep .el-table__body tbody tr {
  background-color: #161522;
}

::v-deep .el-table__fixed-right-patch {
  background-color: #161522;
}
/* // 滚动条的宽度 */
::v-deep .el-table__body-wrapper::-webkit-scrollbar {
  background-color: #161522;
}
/* // 滚动条的滑块 */
::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  background-color: #161522;
  border-radius: 3px;
}
</style>
