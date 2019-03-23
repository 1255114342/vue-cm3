<template>
  <div class="newsinfo">
        <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | datefmt }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content">{{newsinfo.content}}</div>
    <Comment :id="id"></Comment>
  </div>
</template>

<script>
import Comment from "./Comment"

export default {
  data: () => ({
    id: '',
    newsinfo:[]
  }),
  components:{
      Comment
  },
  created(){
    // this.id = this.$route.params.id  
    this.id = this.$route.query.id  
    this.getnew()
  },
  methods: {
    async getnew(){
      const {data:{status,message}} = await this.$http.get('api/getnew/'+this.id)
      console.log(message)
      if(status === 0){
        this.newsinfo = message
      }else {
        Toast('请求新闻列表数据失败')
      }
    }
  }
};
</script>

<style lang="less">
.newsinfo {
  // padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>