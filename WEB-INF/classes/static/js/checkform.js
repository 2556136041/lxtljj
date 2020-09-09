// JavaScript Document


//用户名验证
function focus_username() { 
    var resultObj=document.getElementById('result_username'); 
    resultObj.innerHTML="非空白字符"; 
    resultObj.style.color="black"; 
    document.form.username.style="border:1px solid red"; 
 }  
function blur_username() { 
    var resultObj=document.getElementById('result_username');  
    var pre=document.form.username.value; 
    var reg=/^\S{1,}$/;
    // var reg=/^[A-Z]\w{6,12}$/; 
    if (pre=='') { 
    resultObj.innerHTML="(必填项)用户名不能为空"; 
    resultObj.style.color="red"; 
    return false; 
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="用户名字符输入不合法"; 
    resultObj.style.color="red"; 
    return false; 
    }else{ 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green"; 
    return true; 
    } 
} 

//密码
function focus_pwd() { 
   var resultObj=document.getElementById('result_userpwd'); 
   resultObj.innerHTML="6位以上的非特殊字符"; 
   resultObj.style.color="black"; 
   document.form.password.style="border:1px solid red"; 
}  
function blur_pwd() {  
    var resultObj=document.getElementById('result_userpwd');  
    var pre=document.form.password.value; 
    var reg=/^\w{6,}$/; 
    if (pre=='') { 
    resultObj.innerHTML="密码不能为空"; 
    resultObj.style.color="red"; 
    return false; 
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="密码字符输入不合法"; 
    resultObj.style.color="red"; 
    return false; 
    }else{ 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green"; 
    return true; 
    } 
}

//重复密码
function focus_repwd() { 
   var resultObj=document.getElementById('result_repwd'); 
   resultObj.innerHTML="与初次输入密码相同"; 
   resultObj.style.color="black"; 
   document.form.repwd.style="border:1px solid red"; 
 }  
function blur_repwd() { 
    var resultObj=document.getElementById('result_repwd');  
    var pre=document.form.repwd.value; 
    var reg=/^\w{6,}$/; 
    if (pre=='') { 
    resultObj.innerHTML="密码不能为空"; 
    resultObj.style.color="red"; 
    return false; 
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="密码字符输入不合法"; 
    resultObj.style.color="red"; 
    return false; 
    }else if(document.form.password.value!=document.form.repwd.value){ 
    resultObj.innerHTML="两次密码输入不一致"; 
    resultObj.style.color="red"; 
    return false; 
    }else {resultObj.innerHTML="ok"; 
    resultObj.style.color="green"; 
    return true; 
    }   
} 

 //真实姓名验证
function focus_birth() { 
    var resultObj=document.getElementById('result_birth'); 
    resultObj.innerHTML="请输入你的出生年月日"; 
    resultObj.style.color="black"; 
    document.form.truename.style="border:1px solid red"; 
}  

//判断年月日正确与否的正则表达式方法
var checkBirth = function (val) {
	  var pattern = /^((19[2-9]\d{1})|(20((0[0-9])|(1[0-8]))))\-((0?[1-9])|(1[0-2]))\-((0?[1-9])|([1-2][0-9])|30|31)$/;
	  if(pattern.test(val)) {
	    var date = new Date(val);
	    var month = val.substring(val.indexOf("-")+1,val.lastIndexOf("-"));
	    return date && (date.getMonth()+1 == parseInt(month));
	  }
	  return false;
	}
function blur_birth() {  
    var resultObj=document.getElementById('result_birth');  
    var pre=document.form.birth.value; 
    //var reg=/^1|2[0-9]{3}-[0-9]{1}-3[0-9]{2}$/; 
    var reg=/^((19[0-9]\d{1})|(20((0[0-9])|(1[0-8]))))\-((0?[1-9])|(1[0-2]))\-((0?[1-9])|([1-2][0-9])|30|31)$/;
    if (pre=='') { 
    resultObj.innerHTML="生日不能为空"; 
    resultObj.style.color="red";   
    return false;
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="生日输入不合法"; 
    resultObj.style.color="red";   
    return false;
    }else { 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green"; 
    return true;
    }   
} 

 //手机号验证
function focus_Mobile() { 
    var resultObj=document.getElementById('result_Mobile'); 
    resultObj.innerHTML="请输入你11位数的手机号码"; 
    resultObj.style.color="black"; 
    document.form.tel.style="border:1px solid red"; 
}  
function blur_Mobile() {  
    var resultObj=document.getElementById('result_Mobile');  
    var pre=document.form.tel.value; 
    var reg=/^(13|14|15|17|18)[0-9]{9}$/; 
    if (pre=='') { 
    resultObj.innerHTML="手机号码不能为空"; 
    resultObj.style.color="red";  
    return false;
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="手机号码字符输入不合法"; 
    resultObj.style.color="red";   
    return false;
    }else { 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green"; 
    return true;
    }   
} 

 //QQ
function focus_qq() { 
    var resultObj=document.getElementById('result_qq'); 
    resultObj.innerHTML="请输入你的QQ"; 
    resultObj.style.color="black"; 
    document.form.qq.style="border:px solid red"; 
}  
function blur_qq() {  
    var resultObj=document.getElementById('result_qq');  
    var pre=document.form.qq.value; 
    var reg=/\d{5,10}/; 
    if (pre=='') { 
    resultObj.innerHTML="QQ不能为空"; 
    resultObj.style.color="red"; 
    return false;
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="QQ输入不合法"; 
    resultObj.style.color="red"; 
    return false;
    }else { 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green";   
    return true;
    }   
} 

//邮箱验证
function focus_email() { 
    var resultObj=document.getElementById('result_email'); 
    resultObj.innerHTML="请输入你的邮箱号码"; 
    resultObj.style.color="black"; 
    document.form.email.style="border:1px solid red"; 
}  
function blur_email() {  
    var resultObj=document.getElementById('result_email'); 
    var pre=document.form.email.value; 
    var reg=/^[0-9a-zA-Z-][0-9a-zA-Z-\._]+@[a-z0-9]+\.(com)(\.(cn))?$/; 
    if (pre=='') { 
    resultObj.innerHTML="邮箱号码不能为空"; 
    resultObj.style.color="red"; 
    return false;
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="邮箱号码字符输入不合法"; 
    resultObj.style.color="red"; 
    return false;
    }else { 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green";
    return true;
    }   
} 

//身份证验证
function focus_ID() { 
    var resultObj=document.getElementById('result_ID'); 
    resultObj.innerHTML="(必填项)请输入你18位的二代身份证号码"; 
    resultObj.style.color="black"; 
    document.form.ID.style="border:px solid red"; 
}  
function blur_ID() {  
    var resultObj=document.getElementById('result_ID'); 
    var pre=document.form.ID.value; 
    var reg=/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/; 
    if (pre=='') { 
    resultObj.innerHTML="(必填项)二代身份证号码字符不能为空"; 
    resultObj.style.color="red"; 
    return false; 
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="二代身份证号码字符输入不合法"; 
    resultObj.style.color="red"; 
    return false; 
    }else { 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green"; 
    return true; 
    }   
} 

 //地址验证
function focus_address() { 
    var resultObj=document.getElementById('result_address'); 
    resultObj.innerHTML="请输入你的地址"; 
    resultObj.style.color="black"; 
    document.form.address.style="border:1px solid red"; 
}  
function blur_address() {  
    var resultObj=document.getElementById('result_address'); 
    var pre=document.form.address.value; 
    var reg=/./; 
    if (pre=='') { 
    resultObj.innerHTML="地址不能为空"; 
    resultObj.style.color="red"; 
    return false;
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="地址字符输入不合法"; 
    resultObj.style.color="red"; 
    return false;
    }else { 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green"; 
    return true;
    }   
} 


//标签验证
function focus_usermark() { 
    var resultObj=document.getElementById('result_usermark'); 
    resultObj.innerHTML="请输入你的个人标签"; 
    resultObj.style.color="black"; 
    document.form.usermark.style="border:1px solid red"; 
}  
function blur_usermark() {  
    var resultObj=document.getElementById('result_usermark'); 
    var pre=document.form.usermark.value; 
    var reg=/^.{1,100}$/; 
    if (pre=='') { 
    resultObj.innerHTML="不能为空"; 
    resultObj.style.color="red"; 
    return false;
    }else if (!reg.test(pre)) { 
    resultObj.innerHTML="多于100个字"; 
    resultObj.style.color="red"; 
    return false;
    }else { 
    resultObj.innerHTML="ok"; 
    resultObj.style.color="green"; 
    return true;
    }   
}  

//兴趣必选


 //表单提交事件
 function checkForm(){ 
    var flag_username=blur_username(); 
    var flag_pwd=blur_pwd(); 
    var flag_repwd=blur_repwd(); 
    var flag_Mobile=blur_Mobile(); 
    var flag_email=blur_email(); 
    
	if (flag_username==true && flag_pwd==true && flag_email==true && flag_Mobile==true) { 
	    return true; 
	}else{ 
	    return false; 
	}
  
    
} 
