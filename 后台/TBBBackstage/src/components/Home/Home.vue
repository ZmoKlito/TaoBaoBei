<template>
  <div id="Home">
    <el-container class="content">
      <el-header>
        <div class="personal">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </div>
      </el-header>
      <el-container class="content">
        <!-- 导航菜单 -->
        <el-aside width="200px">
          <el-menu :default-openeds="[]">
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-message"></i>商品</template
              >
              <el-menu-item-group>
                <el-menu-item index="1-1">查看所有商品</el-menu-item>
                <el-menu-item index="1-2">上架商品</el-menu-item>
                <el-menu-item index="1-3">增加库存</el-menu-item>
                <el-menu-item index="1-4">查看交易量</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-menu"></i>货物类型</template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1">新增货物类型</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 展示区 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
html, body {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.content {
  height: 100%;
}
#Home {
  height: 100%;
}
.personal {
  float: right;
  margin-right: 50px;
}
</style>