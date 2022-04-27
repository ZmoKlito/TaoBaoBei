<template>
  <div>
    <div class="box">
      <div class="box_img">
        <img
          class="box_log"
          src="https://img0.baidu.com/it/u=500399153,1042598262&fm=253&fmt=auto&app=120&f=JPEG?w=660&h=429"
          alt=""
        />
      </div>
      <div class="box_from">
        <h1 class="title">BACKGROUND LOGIN</h1>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="userName" class="item">
            <el-input
              class="input"
              type="text"
              v-model="ruleForm.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              class="input"
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="sub"
              type="primary"
              @click="submitForm('ruleForm')"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.ruleForm.pass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        pass: "",
      },
      rules: {
        userName: [{ validator: validatePass, trigger: "blur" }],
        pass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post("http://localhost:8080/backstage/dologin", {
              user: this.ruleForm.userName,
              pwd: this.ruleForm.pass,
            })
            .then(
              (response) => {
                if (response.data.length > 0) {
                  this.open2();
                  this.$router.push({
                    name:"Home",
                  })
                  window.sessionStorage.setItem('personal',JSON.stringify(response.data[0]));
                }else{
                  this.open4();
                }
              },
              (error) => {
                console.log("请求失败");
              }
            );
        } else {
          return false;
        }
      });
    },
    open2() {
      this.$message({
        message: "登录成功！",
        type: "success",
      });
    },
    open4() {
        this.$message.error('用户名或密码错误！');
      }
  },
};
</script>

<style>
.box {
  width: 70%;
  height: 400px;
  margin: 0 auto;
  padding-top: 150px;
}
.box_img {
  width: 50%;
  height: 100%;
  float: left;
}
.box_from {
  width: 50%;
  height: 100%;
  float: left;
  background-color: #324157;
  padding: 20px;
  padding-top: 50px;
  box-sizing: border-box;
  border-radius: 0px 20px 20px 0px;
}
.box_log {
  width: 100%;
  height: 100%;
  border-radius: 20px 0px 0px 20px;
}
.el-form-item__label {
  color: white !important;
}
.sub {
  width: 90% !important;
}
.input {
  width: 90% !important;
}
.title {
  margin: 0 auto;
  margin-bottom: 70px;
  text-align: center;
  color: #afeeee;
}
</style>