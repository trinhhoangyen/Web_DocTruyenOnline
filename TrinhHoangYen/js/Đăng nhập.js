function error( element) {
			if( element.value == "") {
				var count = 0;
				var time = setInterval( function() {
		
				if( element.style.border == "")
					element.style.border = "1px solid red";
				else  element.style.border = "";
				count++;
				if( count == 10) {
					clearInterval(time);
					count = 0;
				}
				}, 500);
				return true;
			} else {
				alert('Bạn đã đăng nhập thành công.\nQuay về trag chủ để bắt đầu đọc truyện');
				return false; 
			}
		}
function check() {
	var a = document.getElementById("email");
	var b = document.getElementById("pass");
	error(a);
	error(b);
}
