<template>
  <div>
    <template>
      <el-table
        v-loading="loading"
        :data="tableData2"
        border
        style="width: 100%"
      >
        <el-table-column prop="goods_id" label="商品ID" width="180">
        </el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="180">
        </el-table-column>
        <el-table-column prop="goods_price" label="商品价格（元）">
        </el-table-column>
        <el-table-column prop="goods_discount" label="会员折扣（折）">
        </el-table-column>
        <el-table-column prop="cateDetail_id" label="商品分类">
        </el-table-column>
        <el-table-column prop="goods_stock" label="库存"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >下架</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Sheet",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 1,
      tableData: [],
      tableData2: [],
      loading: true,
      page: 1,
      strip: 5,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      axios
        .get(
          "http://localhost:8080/backstage/home/sheet/getCommodity?selId=" +
            JSON.parse(window.sessionStorage.getItem("personal")).sel_id
        )
        .then(
          (response) => {
            this.tableData = response.data;
            this.tableData2 = response.data.slice(this.page - 1, this.strip);
          },
          (error) => {
            console.log("请求错误");
          }
        );
    }, 1000);
  },
  methods: {
    //下架
    handleDelete(index, row) {
      console.log(index, row);
      this.open(row.goods_name);
    },
    //切换条数
    handleSizeChange(val) {
      this.strip = val;
      this.tableData2 = this.tableData.slice(
        (this.page - 1) * this.strip,
        (this.page - 1) * this.strip + this.strip
      );
    },
    //切换页
    handleCurrentChange(val) {
      this.page = val;
      this.tableData2 = this.tableData.slice(
        (this.page - 1) * this.strip,
        (this.page - 1) * this.strip + this.strip
      );
    },
    //下架成功提示
    open2(tit) {
      this.$message({
        message: "下架“" + tit + "”成功！",
        type: "success",
      });
    },
    //下架弹出框
    open(tit) {
      const h = this.$createElement;
      this.$msgbox({
        title: "温馨提示",
        message: h("p", null, [
          h("span", null, "确定要下架"),
          h("i", { style: "color: red" }, tit),
          h("span", null, "  吗？"),
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 2000);
            console.log("确定了");
            this.handleDeleteAjax(tit);
          } else {
            console.log("取消了");
            done();
          }
        },
      }).then((action) => {
        this.open2(tit);
      });
    },
    //下架发送ajax
    handleDeleteAjax(tit) {
      axios
        .get(
          `http://localhost:8080/backstage/home/sheet/takeDown?goodsName=${tit}&selId=${
            JSON.parse(window.sessionStorage.getItem("personal")).sel_id
          }`
        )
        .then(
          (response) => {},
          (error) => {
            console.log("请求失败");
          }
        );
    },
  },
};
</script>

<style>
th,
td {
  text-align: center !important;
}
.el-main {
  padding: 20px !important;
}
</style>