<template>
	<view class="index">
		<view>
			<musichead title="景德镇陶瓷大学" :icon="false"></musichead>
			<!-- 这是首页可以滚动的区域 -->
			<view class="container">
				<!-- 表示沿着y轴可以进行滚动 -->
				<scroll-view scroll-y="true">
					<view class="index-search">
						<i class="iconfont icon-fangdajing"></i>
						<input type="text" placeholder="搜索歌曲">
					</view>
					<view class="index-list">
						<!-- 遍历的是当前的整个数据结构 -->
						<!-- 在vue中可以使用v-for -->
						<view class="index-list-item" v-for="(item,index) in topList" :key="index" @tap="handleToList">
							<view class="index-list-img">
								<img :src="item.coverImgUrl" alt="">
							</view>
							<view class="index-list-text">
								<view v-for="(item,index) in item.tracks" :key="index">
									{{index+1}}.{{item.first}}-{{item.second}}
								</view>
							</view>
						</view>
					</view>	
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import "../../static/iconfont/iconfont.css"
	import musichead from "../../components/musichead/musichead.vue"
	import {topList} from "../../common/api.js"
	export default {
		data() {
			return {
				topList:[]
			}
		},
		components:{
			musichead
		},
		onLoad() {
			// 当页面加载的时候需要触发
			// 触发了事件之后接收 topList的数据 看是否拿到
			topList().then((res)=>{
				if(res.length){
					// this的指向:谁调用我 我就执行谁
					// console.log(this.topList)
					this.topList = res
					console.log(res) // 前端的页面中已经拿到了数据
				}
			})
		},
		methods: {
			handleToList(){
				uni.navigateTo({
					url:"../list/list"
				})
			}
		}
	}
</script>

<!-- 表示在当前这个页面中的css 不会影响到其他页面的样式 -->
<style scoped>
	.index-search{
		height: 37px;
		background: #f7f7f7;
		margin:15px;
		display: flex;
		align-items: center;
		border-radius: 20px;
	}
	.index-search i{
		margin-left: 14px;
	}
	.index-search input{
		margin-left: 12px;
		font-size: 12px;
	}
	/* 这是首页的结构 */
	.index-list-item{
		margin: 0 15px 17px;
		display: flex;;
	}
	.index-list-img{
		width: 106px;
		height: 106px;
	}
	.index-list-img img{
		width: 100%;
	}
	.index-list-text view{
		margin: 10px 8px;
		width: 200px;
		display: block;
		white-space: nowrap;
		/* 省略号 */
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
