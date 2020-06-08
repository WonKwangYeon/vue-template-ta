<template>
  <div class="login-body">
    <div class="login-panel">
      <div class="w-90 mg-t-30px h-35px">
      </div>
      <div class="display-flex-column-center">
        <div class="text-center mg-b-20px mg-t-m30px">
            <div class="login-title">
                <span v-show="login">Login</span>
                <span v-show="login==false">Register</span>
            </div>
        </div>
        <div class="text-center">
          <span class="logo-description">LDCC FrameWork Section</span>
        </div>
      </div>
      <div class="login-2">
        <form v-show="login" ref="loginForm" action="action등록" method="post" class="wrapper-lg">
          <div class="display-flex-column">
            <div class="form-group mb-lg">
              <div class="input-id-pw-form">
                <input name="id" type="text" class="input-id-pw" placeholder="ID" />
              </div>
            </div>
            <div class="form-group mg-b-20">
              <div class="input-id-pw-form">
                <input name="password" type="password" class="input-id-pw" placeholder="Password" />
              </div>
            </div>
            <div class="row mg-t-10px">
              <div class="col-sm-12">
                <button type="submit" class="ta-btn ta-btn-danger w-185px h-50px">로그인</button>
                <button
                  type="button"
                  class="ta-btn ta-btn-default w-185px h-50px mg-l-5px"
                  id="sign-in"
                  @click="signIn()"
                >회원가입</button>
              </div>
            </div>
          </div>
        </form>

        <form
          v-show="login==false"
          ref="signInForm"
          method="post"
          class="wrapper-lg mg-t-10px"
        >
          <div class="display-flex-column" style="width:375px">
            <div class="form-group mb-lg display-flex">
              <label class="flex-none">
                사용자 ID
                <span class="required">*</span>
              </label>
              <input
                v-model="userId"
                name="userId"
                id="userId"
                type="text"
                class="input-signIn-form flex-none"
                placeholder="ID를 입력하세요"
              />
            </div>
            <button
              class="ta-btn ta-btn-neutral mg-b-m20px btn-user-id-check"
              type="button"
              id="userIdCheckBtn"
              data-toggle="tooltip"
              @click="idCheck()"
            >중복 체크</button>
            <div class="form-group mb-lg display-flex">
              <label class="flex-none">
                사용자 이름
                <span class="required">*</span>
              </label>
              <input
                v-model="userName"
                name="userName"
                id="userName"
                type="text"
                class="input-signIn-form flex-none"
                placeholder="사용자 이름을 입력하세요"
              />
            </div>
            <div class="form-group mb-lg display-flex">
              <label class="flex-none">이메일</label>
              <input
                v-model="userEmail"
                name="userEmail"
                id="userEmail"
                type="text"
                class="input-signIn-form flex-none"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div class="form-group mb-lg display-flex">
              <label class="flex-none">
                비밀번호
                <span class="required">*</span>
              </label>
              <input
                v-model="userPassword"
                name="userPassword"
                id="userPassword"
                type="password"
                class="input-signIn-form flex-none"
                placeholder="비밀번호를 입력하세요"
                @keyup="newPassword"
              />
            </div>
            <span v-show="newPasswordText" class="pwdVaild mg-t-m30px mg-b-20px" id="userPasswordText">
              비밀번호는 숫자, 특수문자
              포함 8자리 이상만 가능합니다.
            </span>
            <div class="form-group mb-lg display-flex">
              <label class="flex-none">
                비밀번호 확인
                <span class="required">*</span>
              </label>
              <input
                v-model="userValidPassword"
                name="userValidPassword"
                id="userValidPassword"
                type="password"
                class="input-signIn-form flex-none"
                placeholder="비밀번호를 다시 입력하세요"
                @keyup="checkNewPassword"
              />
            </div>
            <span v-show="checkNewPasswordText" class="pwdVaild mg-t-m30px mg-b-20px" id="userValidPasswordText">
              비밀번호는 숫자, 특수문자 포함 8자리 이상만
              가능합니다.
            </span>
            <span v-show="comparePasswordText" class="pwdVaild mg-t-m15px" id="comparePasswordText">새 비밀번호가 서로 다릅니다.</span>
            <div>
              <div class="display-flex-end">
                <button
                  type="button"
                  class="ta-btn ta-btn-default h-50px w-60px mg-r-5px"
                  @click="prevPage()"
                >닫기</button>
                <button
                  type="button"
                  class="ta-btn ta-btn-danger h-50px w-60px"
                  id="sign-in"
                  @click="saveUser()"
                >저장</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="copyright-2">
        <span class="copyright">
          Copyright ⓒ LOTTE Group All rights
          Reserved
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      login: true,
      userId: '',
      userName: '',
      userEmail: '',
      userPassword: '',
      userValidPassword: '',
      newPasswordText: false,
      checkNewPasswordText: false,
      comparePasswordText: false,
      regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
    }
  },
  methods: {
    signIn () {
      this.login = false
      this.$refs.loginForm.reset()
    },
    prevPage () {
      this.login = true
      this.$refs.signInForm.reset()
      this.userPassword = ''
      this.userValidPassword = ''
      this.newPasswordText = false
      this.checkNewPasswordText = false
      this.comparePasswordText = false
    },
    idCheck () {
      // TODO
    },
    saveUser () {
      // TODO
    },
    newPassword () {
      if (this.regex.test(this.userPassword) === false) {
        this.newPasswordText = true
      } else {
        this.newPasswordText = false
      }
      if (this.userPassword !== this.userValidPassword) {
        this.comparePasswordText = true
      } else {
        this.comparePasswordText = false
      }
    },
    checkNewPassword () {
      if (this.regex.test(this.userValidPassword) === false) {
        this.checkNewPasswordText = true
      } else {
        this.checkNewPasswordText = false
      }
      if (this.userPassword !== this.userValidPassword) {
        this.comparePasswordText = true
      } else {
        this.comparePasswordText = false
      }
    }
  },
  beforeCreate () {
    document.body.className = 'login'
  },
  beforeDestroy () {
    document.body.className = ''
  }
}
</script>

<style>
@import '../assets/css/common.css';
input:focus{
    outline : none;
}

</style>
