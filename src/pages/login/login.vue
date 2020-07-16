<template>
  <div class="login">
    <div class="middle-wrapper">
      <div class="title-wrapper">
        <!-- <div class="title">后台管理系统</div> -->
      </div>
      <div class="login-form">
        <el-form
          ref="loginForm"
          :model="form"
          :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入账号">
              <i slot="prefix" class="el-input__icon el-icon-adm-user" style="font-size: 18px;"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :type="passwordType" v-model="form.password" placeholder="请输入密码">
              <i slot="prefix" class="el-input__icon el-icon-adm-password" style="font-size: 18px;"></i>
              <i slot="suffix" class="el-input__icon el-icon-view" style="cursor: pointer;"
                 @click="_togglePasswordType"></i>
            </el-input>
          </el-form-item>
          <el-form-item style="margin-bottom: 0;">
            <el-col :span="12" :offset="8">
                <el-button
                  type="primary"
                  class="login-btn"
                  @click="loginHandle('loginForm')">
                  登陆系统
                </el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    created () {
    },
    data () {
      return {
        passwordType: 'password',
        checkCode: '',
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '账号不能为空', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      _togglePasswordType () {
        if (this.passwordType === 'password') {
          this.passwordType = 'text';
        } else {
          this.passwordType = 'password';
        }
      },
      loginHandle (formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.login();
          }
        });
      },
      login () {
        let token = 'a94756da-2962-40ae-bdea-787fd02c9d92';

        this.$store.commit('SET_TOKEN', token);
        this.$router.replace('home');
      }
    }
  };
</script>
<style lang="scss" scoped>
  .login {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url('../../assets/img/login_background.jpg') no-repeat;
	background-size: 100% 100%;

    .middle-wrapper {
      position: fixed;
      width: 100%;
      left: 20%;
      top: 60%;
      transform: translateY(-60%);

      .title-wrapper {
        margin-top: 50px;
        margin-bottom: 30px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        color: #ffffff;
      }
      .login-form {
        position: relative;
        margin: 0 auto;
        width: 420px;
		height: 300px;
        padding: 30px 50px;
        box-sizing: border-box;
        border-radius: 5px;
        background-color: #ffffff;
		.el-form{
			margin-top: 40px;
		}
        .el-row {
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .login-btn {
            // width: 100%;
          }
        }

        .check-code-wrapper {
          display: flex;
          justify-content: space-between;
          height: 40px;

          .yanzhengma-wrapper {
            flex: 0 1 auto;
          }

          .validate-code-wrapper {
            flex: 0 0 160px;
          }
        }
      }
    }
  }
</style>
