<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.id"  class="item">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
        <div class="actions">
          <router-link :to="`/edit/${blog.id}`">编辑</router-link>
          <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
      </router-link>
        
    </section>
    <section class="pagination">
        <el-pagination
            :page-size="20"
            @current-change="onPageChange"
            layout="total , prev, pager, next"
            :total="total">
        </el-pagination>
    </section>
  </div>
</template>



<script src="./template.js"></script>

<style src="../My/template.less" lang="less"></style>
