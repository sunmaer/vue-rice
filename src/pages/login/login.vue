<template>
  <div class="mod_login">
    <div class="login_mask"></div>
    <!-- 登录 -->
    <el-card v-if="type === 'login'" class="login_box" key="login">
      <div slot="header" class="login_header">
        <span>欢迎登录水稻病害识别系统</span>
      </div>
      <el-form>
        <el-form-item>
          <el-input
            v-model="loginForm.name"
            prefix-icon="fa fa-user fa-lg"
            placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="loginForm.password"
            prefix-icon="fa fa-lock fa-lg"
            placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox
            v-model="loginForm.check"
            label="记住密码">
          </el-checkbox>
          <span class="login_reg" @click="goRegister">注册账号</span>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login_button"
            @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 注册 -->
    <el-card v-else class="login_box reg_box" key="register">
      <div slot="header" class="login_header">
        <span>用户注册</span>
      </div>
      <el-form>
        <el-form-item>
          <el-input
            v-model="registerForm.name"
            prefix-icon="fa fa-user"
            placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="registerForm.password"
            type="password"
            prefix-icon="fa fa-lock"
            placeholder="请输入密码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="registerForm.conPassword"
            type="password"
            prefix-icon="fa fa-check-square"
            placeholder="请确认密码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="registerForm.telephone"
            prefix-icon="fa fa-phone"
            placeholder="请输入手机号码">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="registerForm.email"
            prefix-icon="fa fa-envelope"
            placeholder="请输入邮箱">
          </el-input>
        </el-form-item>
        <el-form-item>
          <span class="login_reg" @click="goLogin">返回登录</span>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="login_button"
            @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { LOGIN } from '@/store/types'
  import { baseUrl } from '@/config/api'

  export default {
    data () {
      return {
        // 登录或注册
        type: 'login',
        loginForm: {
          name: '',
          password: '',
          check: false
        },
        registerForm: {
          name: '',
          password: '',
          conPassword: '',
          telephone: '',
          email: ''
        }
      }
    },
    methods: {
      login () {
        this.$ajax({
          method: 'POST',
          url: `${baseUrl}/login`,
          data: this.loginForm
        }).then((res) => {
          if(res.data.status && res.data.data) {
            // 用户名写入 vuex
            this.$store.commit(LOGIN, res.data.data.list[0].name)
            this.$message.success(res.data.msg)
            setTimeout(() => {
              this.$router.push({
                path: decodeURIComponent(this.$route.query.redirect || '/recongnition')
              })
            }, 500)
          } else {
            this.$message.error(res.data.msg)
          }
        }).catch((err) => {
          this.$message.error(`登录失败 ${err}`)
        })
      },
      register () {
        this.$ajax({
          method: 'POST',
          url: `${baseUrl}/register`,
          data: this.registerForm
        }).then((res) => {
          if(res.data.status && res.data.data) {
            this.$message.success(res.data.msg)
          } else {
            this.$message.error(res.data.msg)
          }
        }).catch((err) => {
          this.$message.error(`注册失败 ${err}`)
        })
      },
      // 返回登录
      goLogin () {
        this.type = 'login'
      },
      // 注册用户
      goRegister () {
        this.type = 'register'
      }
    }
  }
</script>


<style scoped lang="scss">
  @import '../../style/base.scss';

  .mod_login {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/rice.jpg');
    background-size: cover;
    .login_mask {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
    }
    .login_box {
      position: absolute;
      top: 50%;
      left: calc((100% - 400px)/2);
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      width: 400px;
      .login_header {
        font-weight: bold;
        text-align: center;
      }
      .login_reg {
        float: right;
        color: #657180;
        cursor: pointer;
        &:hover {
          color: $color-primary;
        }
      }
      .login_button {
        width: 100%;
      }
    }
    .reg_box {
      width: 500px;
      left: calc((100% - 500px)/2);
    }
  }
</style>