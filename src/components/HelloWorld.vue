<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>↓ 请输入手机号 ↓</p>
    <input type="text" v-model="mobile" placeholder="手机号">
    <br/>
    <button v-on:click="enter">查找</button>
    <br/><br/>
    <p>↓ 或者选择快递商，输入运单号 ↓</p>
    <select v-model="carrier">
	    <option v-for="carrier in carrierList" v-bind:key="carrier" :value="carrier">{{carrier}}</option>
    </select>
    <input type="text" v-model="orderNum" placeholder="订单号">
    <br/>
    <button v-on:click="enterOrder">查找</button>
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
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎光临JL的小店',
      mobile: null,
      orderNum: null,
      carrier: null,
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
      if(this.mobile === null){
        alert('手机号不能为空')
      } else{
        this.getData()
      }
    },
    enterOrder(){
      if(this.orderNum === null || this.carrier === null){
        alert('快递商、运单号不能为空')
      } else{
        this.searchOrder()
      }
    },
    search(users){
      var vm = this
      var mobile = vm.mobile
      var user = users[mobile];
      var url = vm.urlList[user.carrier] + user.orderNum
      if(user.carrier === 'EWE'){
        url = url + '#track-results'
      }
      window.location.href = url
    },
    searchOrder(){
      var url = this.urlList[this.carrier] + this.orderNum
      if(this.carrier === 'EWE'){
        url = url + '#track-results'
      }
      window.location.href = url
    },
    getData(){
      var vm = this
      var ref = firebase.database().ref();
      ref.on("value", function(snapshot) {
        vm.search(snapshot.val())
      }, function (error) {
        console.log("Error: " + error.code);
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
