<template>
  <div class="photolist">
    <!-- 滑动导航 -->
    <van-tabs @click="getimages">
      <van-tab
        v-for="item in cates"
        :title="item.title"
        :key="item.id"
        @click="getimages"
      >
      <!-- 图片详情 -->
      <router-link v-for="item in imageList" :key="item.id"  :to="'/home/photoinfo/'+item.id">
         <img  v-lazy="item.img_url" >
      </router-link>
       
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
      // 滑动导航 
    cates: [],
    // 图片详情
    imageList:[]
  }),
  created() {
    this.getnewslist();
    // 默认显示全部页面
    this.getimages(0);
  },
  methods: {
        // 滑动导航 
    async getnewslist() {
      const {
        data: { status, message }
      } = await this.$http.get("/api/getimgcategory");
      if (status === 0) {
        message.unshift({ id: 0, title: "全部" });
        // console.log(message);
        this.cates = message;
      } else {
        Toast("请求数据失败");
      }
    },
    // 图片详情
    async getimages(index) {
      const {
        data: { status, message }
      } = await this.$http.get("/api/getimages/" + index);
      if (status === 0) {
        console.log(message);
        this.imageList = message;
      } else {
        Toast("请求图片失败");
      }
    }
  }
};
</script>

<style  scoped>
</style>