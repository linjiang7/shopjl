<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>↓ 请输入客户信息 ↓</p>
    <select v-model="carrier">
	    <option v-for="carrier in carrierList" :key="carrier" :value="carrier">{{carrier}}</option>
    </select>
    <input type="text" v-model="orderNum" placeholder="订单号">
    <input type="text" v-model="mobile" placeholder="手机号">
    <br/>
    <button v-on:click="enter">发送</button>
    <div :style="css">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
export default {
  name: 'Manager',
  data () {
    return {
      msg: '欢迎美丽的JL',
      mobile: null,
      carrier: null,
      orderNum: null,
      carrierList: ['4px', '华夏', 'EWE', '方舟'],
      urlList: 
        {
          '4px': 'http://api.transrush.com.au/m/track?numbers=',
          '华夏': 'http://www.auvanda.com/barCodeDetail.html?code=',
          'EWE': 'https://www.ewe.com.au/html/track.html?cno=',
          '方舟': 'http://www.arkexpress.com.au/searchOrder?orderNo='          
        },
      css: 'background-image: url(https://firebasestorage.googleapis.com/v0/b/firstbot-505d6.appspot.com/o/background.jpg?alt=media&token=1602f88d-965d-4d72-80ac-d447051663cd);',
    }
  },
  methods: {
    enter(){
      if(this.carrier === null || this.mobile === null || this.orderNum === null){
        alert('运单号，手机号不能为空')
      } else{
        this.sendData()
      }
    },
    sendData(){
      var vm = this
      console.log(vm.carrier)
      firebase.database().ref(vm.mobile).set({
        carrier: vm.carrier,
        orderNum: vm.orderNum
      }, function(error) {
        if (error) {
          // The write failed...
          console.log(error.code)
        } else {
          // Data saved successfully!
          alert('成功添加')
          vm.carrier = null;
          vm.orderNum = null;
          vm.mobile = null;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
