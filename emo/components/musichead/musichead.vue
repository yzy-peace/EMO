<template>
	<view class="music-head">
		<view class="music-head-icon" v-if="icon">
			<i class="iconfont icon-xiangzuojiantou" @tap="handleToBack"></i>
			<span></span>
			<i class="iconfont icon-shouye" @tap="handleToHome"></i>
		</view>
		<!-- 插值表达式 -->
		{{title}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:["title","icon"],
		methods:{
			handleToBack(){
				uni.navigateBack()
			},
			handleToHome(){
				uni.navigateTo({
					url:"/pages/index/index"
				})
			}
		}
	}
</script>

<style>
	.music-head{
		width: 100%;
		height: 44px;
		position: relative;
		text-align: center;
		line-height: 44px;
	}
	.music-head-icon{
		width: 90px;
		height: 28px;
		border: 1px solid #ccc;
		/* 形成弹性盒 */
		display: flex;
		/* 弹性盒中默认的主轴为x轴 设置所有的空间都是自动分配的 */
		justify-content: space-evenly;
		/* 侧轴是y轴 侧轴对齐的 */
		align-items: center;
		position: absolute;
		left:8px ;
		top: 7px;
		border-radius: 20px;
	}
	.music-head-icon span{
		width: 1px;
		height: 17px;
		background: #ededed;
	}
</style>
