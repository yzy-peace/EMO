// 在api.js文件中需要接收到刚刚设置的暴露接口
// 对象方法 可以接收很多的设置 对象是无序的数据集合
import {baseUrl} from './config.js'
// 在这里请求数据 看看有没有返回值
// 拿到数据 需要把数据返回给前端的页面
export function topList(){
	// 使用promise方法返回数据
	// 构造函数方法:new 方法的首字母必须要大写
	return new Promise(function(reslove,reject){
		// uniapp提供的一种方法
		uni.request({
			// 请求的时候需要拼接上地址中的地址 可以使用ES6中的模板字符串
			// ` 在反引号中可以随便书写字符串 ` 	${数据}
			url:`${baseUrl}/toplist/detail`,
			method:"get",
			success:res=>{		
				// 对象下获取的方法 
				let result = res.data.list
				// 拿到的数据长度比较多 在首页上只显示四条数据
				result.length = 4
				// 长度符合的时候就需要把这个数据返回给前端了
				reslove(result)
			},
			fail:res=>{
				
			}
		})
	})
	
}