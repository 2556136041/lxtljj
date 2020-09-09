
       $(document).ready(function(){
	    
	        $("#addbtn").click(function(){
	             $("#addform").css("display","block");
	        });
	        $("#closeform").click(function(){
	             $("#addform").css("display","none");
	        });
	        $(".paybtn").click(function(){
	        	 $("#cover").css("display","block");
	        	 $("#paymodal").css("display","block");
	        });
	        $("#pay_closer").click(function(){
	        	 $("#cover").css("display","none");
	        	 $("#paymodal").css("display","none");
	        });
	    });
	    
	    function delcfm() {
	        if (!confirm("确认删除！")) {
	            window.event.returnValue = false;
	        }
	    }
	   
	   //ajax 删除购物车
	   /*
		function delCart(id){

		    $.get("<%=path%>/servlet1/CartServlet",
			    {"id":id,"action":"delete"},
			    function(data){
			           if(data=="1"){
				              setTimeout(function(){
				                    alert('成功！'); 
				                    window.location="servlet1/CartServlet?action=show";
				             },1000);
				        }else{
				             alert('失败');
				        }  
		       });

		}
		*/
		//ajax 提交送货地址ַ
		function submit_addr(){
		    var username=$('#username').val();
		    var myaddr=$('#myaddr').val();
		    var tel=$('#tel').val();
		    if(username=="" && addr=="" && tel==""){
		         alert("不能为空");
	             $('#username').focus();
	             return false;
		       }else{
		             $.post("<%=path %>/servlet1/SubmitUserAddrServlet",
					    {"username":username,"myaddr":myaddr,"tel":tel},
					    function(data){
					           if(data=="1"){
						              alert('提交成功'); 
						              window.location.assign("<%=path %>/servlet1/CartServlet?action=show");
						        }else if(data=="0"){
						              alert('提交失败'); 
						        }
				        });
		       }
		}
		//ajax 提交常用邮箱
		function submit_ajax(){
		    var email=$('#email').val();
		    if(email!=""){
		       var reg=/^[0-9a-zA-Z-][0-9a-zA-Z-\._]+@[a-z0-9]+\.(com)(\.(cn))?$/;
		       if(!reg.test(email)){
		             alert("不合法");
		             $('#email').val('');
		             return false;
		       }else{
		             $.post("<%=path %>/servlet1/SubmitEmailServlet",
					    {"email":email},
					    function(data){
					           if(data=="1"){
						              alert('提交成功'); 
						              $('#email').val('');
						        }else if(data=="0"){
						              alert('不要重复提交或者有重名邮箱！'); 
						              $('#email').val('');
						        }
				        });
		       }
				        
		    }else{
		        alert("不能为空");
		        $("#email").focus();
		    }
		}	
		
		//ajax 删除送货地址ַ
		function deladdr(id){
		    //alert(id);
		    $.get("<%=path %>/servlet1/ShipAddrDelServlet",
			    {"id":id},
			    function(data){
			           if(data=="1"){
				              alert('成功删除'); 
				              window.location.assign("<%=path %>/servlet1/CartServlet?action=show");
				              
				        }else if(data=="0"){
				              alert('删除失败'); 
				        }
			});
		
		}	
		
		
		//ajax 支付
			function pay_ajax(){
			    var money=$('#money').val();
			    if(money!=""){
			       //小数点保留两位小数点
			       var reg=/^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/;
			       if(!reg.test(money)){
			             alert("不合法");
			             $('#money').val('');
			             return false;
			       }else{
			             $.post("<%=path %>/servlet1/SubmitMoneyServlet",
						    {"money":money},
						    function(data){
						           if(data=="1"){
							              alert('支付֧成功'); 
//							              $('#money').val('');
							        }else if(data=="0"){
							              alert('֧支付失败'); 
							              $('#email').val('');
							        }
						           alert(data);
					        });
			       }
					        
			    }else{
			        alert("不能为空");
			        $("#money").focus();
			    }
			}