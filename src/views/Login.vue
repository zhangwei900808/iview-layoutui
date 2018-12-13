<style lang="postcss" scoped>
.login-container{
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100%);
    & .bg-wrap{
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        position: relative;
    }
    & .card-wrap{
        position: absolute;
        right:100px;
        top:200px;
    }
    & .icon-cls{
        font-weight:bold;
        width:20px;
        font-size:18px;
    }
}
</style>
<template>
<section class="login-container">
    <div class="bg-wrap" :style="{backgroundImage:`url(${login_img})`}">
        <div class="card-wrap">
        <Card style="width:350px" :dis-hover="true">
            <p slot="title">
                <Icon type="log-in"></Icon>
                欢迎登录
            </p>
            <Form ref="userForm" :model="userForm" :rules="ruleCustom">
                <FormItem prop="username">
                    <Input v-model.trim="userForm.username" placeholder="请输入" size="large">
                        <Icon type="ios-person-outline" slot="prepend" class="icon-cls"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model.trim="userForm.password" placeholder="请输入密码" size="large">
                        <Icon type="ios-lock-outline" slot="prepend"  class="icon-cls"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="btn_login()" long :loading="login_loading">登录</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
    </div>
</section>
</template>
<script>

export default {
    data(){
        return {
            login_loading:false,
            login_img:require("@/assets/login-bg.jpg"),
            userForm:{
                username:'',
                password:''
            },
            ruleCustom: {
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        btn_login(){
            this.$router.push('/')
        }
    }
}
</script>

