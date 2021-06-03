<template>
	<div class="warp">
	<div class="box">
		<h1>{{title}}</h1>
		<p>{{p}}</p>
		<button @click="toTranslate">{{btn}}</button>
	</div>
	</div>
</template>

<script>
	export default {
	  data () {
	    return {
	      title: 'SuperAnt Translation',
	      p: '欢迎使用翻译',
	      btn: '进入翻译器'
	    }
	  },
	  methods: {
	    toTranslate () {
	      this.$router.push('/translate')
	    }
	  }
	}
</script>

<style scoped>
.warp{
	width: 600px;
	height: 400px;
  margin: 0 auto;
	/* background-color:#00ff7f ; */
}
.box{
	width: 400px;
	height: 200px;
	margin:160px auto;
	/* color:#ffff00; */
	text-align: center;
}
h1{
	color:#206ae5;
}
p{
	font-size: 20px;
}
button{
	width: 120px;
	height: 60px;
	font-size: 20px;
	line-height: 60px;
	background: #ffffff;
	color: #ff55ff;
	border: 1px solid slateblue ;
	box-shadow: 2px 2px #7e7e7e;
	outline: none;
}
</style>
