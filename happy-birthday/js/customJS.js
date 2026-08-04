
		function testDownload(){
			var DownloadPwd = prompt('这个App是给女朋友做的哦~   其他人可以下载下面的小游戏~','请输入六位数专属密码');
			
			if(DownloadPwd=='161120') {
			    window.location.href="2018.2.14(专属版).apk";
			}else{
				alert('嘿!请输入正确的密码吧~');
			}
		}
	 // 响应式布局????   这样的做法好Low
		$(function(){
			test();
			window.setInterval(test,500);
			function test(){
				var windowTidth = window.outerWidth;
				var contentCss = {
					'margin-top':'100px',
					'width':'910px',
					'height':'1700px'
				}
				var loveHeartCss={
					'float':'left',
					'margin-left':'100px'
				}
				var codeCss={
					'font-size':'25px',
					'width':'800px',
					'margin-top':'100px',
					'margin-left':'60px'
				}
				if(windowTidth<600) {
					$('#myContent').css(contentCss);
					$('#code').css(codeCss);
					$('#loveHeart').css(loveHeartCss);
					// $('#mobileClient').hide();
				}
				console.log(windowTidth)
			}
		})