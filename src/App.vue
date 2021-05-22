<template>
    <div class="app-container">
      <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
      <el-select v-model="ipColumn" placeholder="请选择" clearable>
        <el-option
          v-for="item in tableHeader"
          :key="item.index"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-button type="primary" plain @click.native="submit">添加至扫描列表</el-button>
      <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:30px;">
        <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
      </el-table>
    </div>
</template>
  
<script>
import UploadExcelComponent from './UploadExcel.vue'
export default {
  name: 'UploadExcel',
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      ipColumn: ''
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1
      if (isLt1M) {
        return true
      }
      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    },
    submit() {
      this.tableData.forEach(row => {
        console.log(row[this.ipColumn])
      });
    }
  }
}
</script>