<template>
    <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.data">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption> 
        </figure>
        <h3>{{blog.title}} <span>{{friendlyDate(blog.createdAt)}}</span></h3> 
        <p>{{blog.description}}</p>
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

<style scoped lang="less" src="./template.less"></style>