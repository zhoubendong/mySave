
  // 初始化 Firebase 对象
  var config = {
    apiKey: "AIzaSyAG1b_Ybny3d82h8AbAydhPLMIEdadeayU",
    authDomain: "contactform-1d3e5.firebaseapp.com",
    databaseURL: "https://contactform-1d3e5.firebaseio.com",
    projectId: "contactform-1d3e5",
    storageBucket: "contactform-1d3e5.appspot.com",
    messagingSenderId: "939333810915"
  };
  firebase.initializeApp(config);

//  创建一个callection
	var messageRef = firebase.database().ref('message');
 
//  添加submit事件
document.getElementById('contactForm').addEventListener("submit",submitForm);
function submitForm(e) {
	e.preventDefault();
	// 获取inout中的值
	var name = getInputVal('name');
	var company = getInputVal('company');
	var email = getInputVal('email');
	var phone = getInputVal('phone');
	var message = getInputVal('message');
	//  存储数据
	
	if(name == '' || phone == '') {
		alert('请输入姓名和电话');
	}else {
		saveMessage(name,company,email,phone,message);
		document.querySelector('.alert').style.display = 'block';
		setTimeout(function() {
				document.querySelector('.alert').style.display = 'none';
				document.getElementById('contactForm').reset(); //  清空表单
			},3000)
		}

}
function getInputVal(id) {
	return document.getElementById(id).value;
}
function saveMessage(name,company,email,phone,message) {
	messageRef.push({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	})
}