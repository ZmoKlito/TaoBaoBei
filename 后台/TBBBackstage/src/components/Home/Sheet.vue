<template>
  <div id="tab">
    <template>
      <el-table :data="tableData" style="width: 100%" max-height="500">
        <el-table-column fixed prop="date" label="序号" width="150">
        </el-table-column>
        <el-table-column prop="name" label="商品名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="商品价格" width="120">
        </el-table-column>
        <el-table-column prop="city" label="会员优惠折" width="120">
        </el-table-column>
        <el-table-column prop="address" label="商品分类" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="商品库存" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template >
              <el-button type="danger" plain>下架</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
  </div>
</template>

<script>
export default {
  name: "Sheet",
  methods: {
    deleteRow(index, rows) {
        console.log(index, rows);
      rows.splice(index, 1);
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
  },
};
</script>

<style>
</style>