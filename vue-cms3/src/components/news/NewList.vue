<template>

  <div class="newlist">
    <router-link :to="'/home/NewsInfo/?id='+item.id" v-for="item in newslist" :key="item.id">
      <van-card
        title="商品标题"
        :thumb="item.img_url"
      >
      <div slot="price">
         <span>发表时间:{{item.add_time}}</span>
      </div>
       <div slot="num">
         <span>数量:{{item.click}}</span>
      </div>
      </van-card>
    </router-link>
    
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data: () => ({
     newslist: [] 
  }),
  created() {
    this.getnewslist()
  },
  methods: {
    async getnewslist(){
      const {data:{status,message}}= await this.$http.get('/api/getnewslist')
      if(status===0){
          this.newslist=message
      }else{
        Toast('请求数据失败')
      }
    }
  },
};
</script>

<style lang="less"  scoped>

</style>