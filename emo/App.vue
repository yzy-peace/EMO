<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.container{
		width: 100%;
		/* css3中的计算属性使用加减的时候符号前后需要使用空格 乘除不需要 */
		/* vw + vh viewport height/width 视口宽度 和 视口高度 */
		/* 设置百分百 默认沾满了全屏 内部即使再多  */
		height:calc(100vh - 44px );
		overflow: hidden;
	}
	.container scroll-view{
		height: 100%;
	}
</style>
