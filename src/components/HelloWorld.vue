<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <select v-model="carrier">
	    <option v-for="carrier in carrierList" v-bind:key="carrier" :value=carrier>{{carrier}}</option>
    </select>
    <input type="text" v-model="orderNum" placeholder="订单号">
    <br/>
    <button v-on:click="enter">查找</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '请输入运单号',
      orderNum: null,
      carrier: '4px',
      carrierList: ['4px', '华夏', 'EWE', '方舟'],
      urlList: 
        {
          '4px': 'http://api.transrush.com.au/m/track?numbers=',
          '华夏': 'http://www.auvanda.com/barCodeDetail.html?code=',
          'EWE': 'https://www.ewe.com.au/html/track.html?cno=',
          '方舟': 'http://www.arkexpress.com.au/searchOrder?orderNo='          
        }
    }
  },
  methods: {
    enter(){
      if(this.orderNum === null){
        alert('运单号不能为空')
      } else{
        this.search()
        console.log(this.carrier)
      }
    },
    search(){
      var url = this.urlList[this.carrier] + this.orderNum
      if(this.carrier === 'EWE'){
        url = url + '#track-results'
      }
      window.location.href = url
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
