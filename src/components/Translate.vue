<template>
	<div class="warp">
		<p>Translate</p>
		<el-form label-width="140px" :inline="true"  :model="formInline">
			<el-form-item label="选择翻译源语言">
				<el-select v-model="formInline.from" placeholder="选择翻译源语言">
					<el-option label="自动识别" value="auto"></el-option>
					<el-option label="中文" value="zh"></el-option>
					<el-option label="英语" value="en"></el-option>
					<el-option label="日语" value="jp"></el-option>
					<el-option label="韩语" value="kor"></el-option>
					<el-option label="泰语" value="th"></el-option>
					<el-option label="越南语" value="vie"></el-option>
					<el-option label="俄语" value="ru"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="选择翻译目标语言">
				<el-select v-model="formInline.to" placeholder="选择翻译目标语言">
					<el-option label="中文" value="zh"></el-option>
					<el-option label="英语" value="en"></el-option>
					<el-option label="日语" value="jp"></el-option>
					<el-option label="韩语" value="kor"></el-option>
					<el-option label="泰语" value="th"></el-option>
					<el-option label="越南语" value="vie"></el-option>
					<el-option label="俄语" value="ru"></el-option>
				</el-select>
			</el-form-item>
			<textarea placeholder="输入文字" v-model="origin"></textarea>
			<textarea placeholder="" id="translate" v-model="target"></textarea>
			<br />
			<button @click="translate">翻译</button>
		</el-form>
	</div>
</template>

<script>
// import $axios from 'axios';
import $axios from 'jquery';
import MD5 from 'md5';
export default {
	name: 'index',
	data() {
		return {
			origin: '',
			target: '',
			formInline: {
				from: 'auto',
				to:''
			}
		};
	},
	methods: {
		translate() {
			let appid = '20180427000151308';
			let key = 'ohOSSCROw_oNxIRudFGQ';
			let salt = new Date().getTime();
			let query = this.origin;

			let from = this.formInline.from;
			let to = this.formInline.to;
			let str1 = appid + query + salt + key;
			let sign = MD5(str1);

			// $axios
			// 	.get(`/api`, {
			// 		params: {
			// 			q: query,
			// 			appid: appid,
			// 			salt: salt,
			// 			from: from,
			// 			to: to,
			// 			sign: sign
			// 		}
			// 	})
			// 	.then(res => {
			// 		console.log(res);
			// 		this.target = res.data.trans_result[0].dst;
			// 		console.log(this.target);
			// 	});

      $axios.ajax({
              url: "https://api.fanyi.baidu.com/api/trans/vip/translate",
              type: "get",
              dataType: "jsonp",
              data: {
                q: query,
                appid: appid,
                salt: salt,
                from: from,
                to: to,
                sign: sign,
              },
              success: function (data) {
                console.log(data);
                console.log(data.trans_result[0].dst);
                // this.target = data.trans_result[0].dst
                document.querySelector("#translate").value = data.trans_result[0].dst;
              },
            });
		}
	}
};
</script>

<style scoped>
.warp {
	width: 1000px;
	height: 600px;
}
p {
	font-size: 40px;
	color: #00ffff;
	width: 100%;
	margin-left: 30px;
	box-sizing: border-box;
}
textarea {
	width: 400px;
	height: 200px;
	margin: 40px;
}
button {
	width: 80px;
	height: 40px;
	font-size: 20px;
	line-height: 40px;
	color: #0000ee;
	margin-left: 40px;
}
</style>
