<template>
    <div class="card text-dark-Light mb-3">
        <div class="card-header">联系我们</div>
        <div class="card-body">
            <h4 class="card-title">联系我们</h4>
            <p card-text>联系人：&nbsp;东羽</p>
            <router-link :to="{name:'phoneNumber'}">电话</router-link>&nbsp;&nbsp;&nbsp;
            <router-link :to="{name:'personName'}">邮箱</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>
