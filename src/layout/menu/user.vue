<template>
  <div class="user">
    <div class="login-trigger" @click="onOpenModal" v-if="!isLogin">
      <i class="user-icon iconfont icon-yonghu" />
      <p class="user-name">未登陆</p>
    </div>
    <div class="logined-user" @click="onLogout" v-else>
      <img v-lazy="$utils.genImgUrl(user.avatarUrl, 80)" class="avatar" />
      <p class="user-name">{{ user.nickname }}</p>
    </div>

    <!-- 弹窗 -->

  </div>
</template>

<script>
import storage from 'good-storage'
import {
  mapActions,
  mapState,
  mapGetters
} from '@/store/user'
export default {
  created(){
  },
  data() {
    return {
      visible: false,
      loading: false,
      uid: '516055073',
    }
  },
  methods:{
    onOpenModal() {
      this.visible = true
    },
  },
  computed:{
    ...mapGetters(['isLogin']),
  }
}
</script>

<style lang="scss" scoped>
.user {
  padding: 16px;
  padding-bottom: 0;
  margin-bottom: 12px;

  .login-trigger {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .user-icon {
    font-size: 24px;
  }

  .user-name {
    margin-left: 24px;
  }

  .login-body {
    .input {
      margin-bottom: 16px;
    }

    .login-help {
      .help {
        margin-bottom: 4px;
      }
    }
  }

  .login-btn {
    width: 100%;
    padding: 8px 0;
  }

  .logined-user {
    display: flex;
    align-items: center;
    cursor: pointer;

    .avatar {
      @include round(40px);
    }
  }
}
</style>