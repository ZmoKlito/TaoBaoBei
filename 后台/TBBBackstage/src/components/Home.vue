<template>
  <div id="Home">
    <el-container class="content">
      <el-header>
        <h2 style="line-height: 50%; display: inline-block">后台管理系统</h2>
        <div class="personal">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>
                <div @click="signOut">退出登录</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ personal.sel_store }}</span>
        </div>
      </el-header>
      <el-container class="content">
        <!-- 导航菜单 -->
        <el-aside width="200px">
          <el-menu router>
            <el-submenu index="1">
              <template slot="title"
                ><i class="el-icon-notebook-2"></i>商品</template
              >
              <el-menu-item-group>
                <el-menu-item index="/home/sheet"><i class="el-icon-view"></i>查看所有商品</el-menu-item>
                <el-menu-item index="1-2"><i class="el-icon-document-add"></i>上架商品</el-menu-item>
                <el-menu-item index="1-3"><i class="el-icon-plus"></i>增加库存</el-menu-item>
                <el-menu-item index="1-4"><i class="el-icon-data-line"></i>查看交易量</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-menu"></i>货物类型</template
              >
              <el-menu-item-group>
                <el-menu-item index="2-1"><i class="el-icon-circle-plus-outline"></i>新增货物类型</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 展示区 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      personal: {},
    };
  },
  mounted() {
    this.personal = JSON.parse(window.sessionStorage.getItem("personal"));
  },
  methods: {
    signOut() {
      window.sessionStorage.removeItem('personal')
      this.$router.push({
        name: "Login",
      });
    },
  },
};
</script>

<style>
html,
body {
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