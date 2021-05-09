<template>
    <header :class="{login: isLogin ,'no-login':!isLogin}">
        <template v-if="!isLogin">
            <h1>Let's shaer</h1>
            <p>精品博客</p>
            <div class="btns">
                <el-button>立即登录</el-button>
                <el-button>注册账号</el-button>
            </div>
        </template>
        <template v-if="isLogin">
            <h1>Let's shaer</h1>
            <p>精品博客</p>
            <i class="edit el-icon-edit"></i>
            <img class="avatar" :src="user.username" :alt="user.username" :title="user.username">
        </template>
        
    </header>
</template>

<script>
import {mapActions , mapGetters} from 'vuex'

import auth from '../api/auth'
window.auth = auth

export default {
    data(){
        return{}
    },
    computed:{
        ...mapGetters([
            'isLogin',
            'user'
        ])
    },
    methods:{
        ...mapActions([
            'chechLogin'
        ])
    }
}
</script>

<style lang="less">
@import "../assets/base.less";

header.no-login{
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-items: center;

    h1{
        color: #fff;
        font-size: 40px;
        margin: 60px 0 0 0;
        text-transform: uppercase;
    }
    p{
        margin: 15px 0 0 0 ;
        color: #fff;
    }
    button{
        margin: 20px 5px 0;
    }
    .btns{
        margin-top:20px ;
    }
}
header.login{
    background: @bgColor;
    display: flex;
    align-items: center;
    h1{
        margin:0;
        padding: 0;
        color: #fff;
        font-size: 40px;
        text-transform: uppercase;
        flex: 1;
    }
    .edit{
        color: #fff;
        font-size: 30px;
    }
    .avatar{
        width: 40px;
        height: 40px;
        border:1px solid grey;
        border-radius: 50%;
        margin-left: 15px;
    }
}
</style>