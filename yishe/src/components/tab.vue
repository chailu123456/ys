<template>
  <div class="tab">
      <ul>
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/appert">预约</router-link>
        <router-link tag="li" to="/about">关于</router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid pink;
}
ul {

  list-style-type: none;
  padding: 0;
  height: 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
li {
  width: 33.3333%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
	  color: #f06;
	}
</style>
