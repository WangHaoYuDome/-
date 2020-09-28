<template>
  <div>
    <van-row>
      <van-col span="8">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="(item,index) in list" :key="index" :title="item.stu" />
        </van-sidebar>
      </van-col>
      <van-col span="16">
            <basr :gu="$store.state.gu"/>
      </van-col>
    </van-row>




    <!-- 购物车 -->
  <div class="db">
      <van-row>
      <van-col span="8"><van-icon name="shopping-cart-o" size="30px" color="#fff" @click="tanchu"/></van-col>
      <van-col span="8">总价：{{qw}}</van-col>
      <van-col span="8" class="jsuan">结算</van-col>
     </van-row>
  </div>

  <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" />

  </div>
</template>

<script>
import axios from "axios"
import basr from "../components/Beisaier"
export default {
  components:{
    basr
  },
  data(){
    return{
      list:[],
      activeKey:0,
      qw:0,
       show: false,
    }
  },
  created(){
    axios.get("http://localhost:8080/list.json",{}).then(res=>{
      console.log(res.data.list)
      this.list=res.data.list
    })
  },
  computed:{
    
  },
  methods:{
    tanchu(){
        this.show = true;
    }
  }
};
</script>

<style scoped>
.db{
  width: 100%;
  height: 50px;
  background: gray;
  text-align: center;
  line-height: 50px;
  position: fixed;
  bottom: 0px;
}
.jsuan{

  background: red;
  color: #fff;

}
</style>
