<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<link rel="stylesheet" href="${pageContext.request.contextPath }/res/front/css/jquery-weui.min.css" /> 
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath }/res/front/css/message.css"/>
		<script type="text/javascript" src="${pageContext.request.contextPath }/res/front/js/jquery.min.js"></script>
		<!--<script type="text/javascript" src="../js/ajax.js" ></script>-->
		<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
		<title>信息补充</title>
	</head>
	<body>
		<div id="shade""></div>
		<div id="unfin" class="box">
			<p>未查询到您的个人信息<br/>请检查姓名输入是否有误</p>
			<span style="background:linear-gradient(45deg,yellowgreen,greenyellow); color:white;">返回修改</span>
		</div>
		<div id="sameId" class="box">
			<h3 style="color:#666;">计算机学院</br>共有XX名学生与您同名</br>请选择你的身份信息</h3>
			<table>
				<tr>
					<th>姓名</th>
					<th>身份证后六位</th>
					<th>选择</th>
				</tr>
				<tr>
					<td style="border-bottom: 1px solid greenyellow;">路人甲</td>
					<td style="border-bottom: 1px solid greenyellow;">154654</td>
					<td class="sele" style=" padding-top: 0.5rem; background:url(../img/icon_locked_03.png) no-repeat center center; border-bottom: 1px solid greenyellow;background-size: 1rem auto;"></td>
				</tr>
				<tr>
					<td >路人甲</td>
					<td >451544</td>
					<td class="sele" style=" padding-top: 1.5rem; background: url(../img/icon_unlock_06.png) no-repeat center center;background-size: 1rem 1rem;"></td>
				</tr>
			</table>
			<div class="btn">
				<span style="background-color:#fff; border:1px solid greenyellow; color:#AAF12F;">取消</span>
				<span style="background:linear-gradient(45deg,yellowgreen,greenyellow); color:white;">确认</span>
			</div>
		</div>
		<div id="succeed" class="box">
			<h3>提交成功</h3>
			<p>我们已将您的学号，宿舍号发送</br>至您的手机，请注意查收</p>
			<div>确认</div>
		</div>
		<div id="check" class="box" >
			<h3>请核对信息是否有误</h3>
			<ul id="message">
				<li><span>学生姓名：</span><span style="color:#4afa21;">888<span></li>
				<li>毕业中学：555</li>
				<li>学生电话：222</li>
				<li>家长姓名：233</li>
				<li>家长电话：656</li>
				<li>家庭住址：广州省惠州市惠东县平山镇街道79号</li>
			</ul>
			<div class="btn">
				<span style="padding:  0.4rem 0.2rem; background-color:#fff; color:#AAF12F;">返回修改</span>
				<span style="background:linear-gradient(45deg,yellowgreen,greenyellow); color:white;">确认</span>
			</div>
		</div>
		<div id="wrap">
			<div style="height: 5%;"></div>
			<div id="main">
				<h1 id="college">计算机工程学院</h1>
				<h2>2017级新生信息确认补充</h2>
				<form id="textForm">
					<div class="text" id="name" style="margin-top:5%;">
						<div class="hid" style="display: none;"></div>
						<img class="textIco" src="${pageContext.request.contextPath }/res/front/img/icon-studentName.png" />
						<input  maxlength="5" type="text"  onfocus="myFunction1(this);" onblur="myFunctionOnblur(this);" value="请输入学生姓名"/>
						<p>姓名不能是符号，表情等</p>
					</div>
					<div class="text">
						<div class="hid"></div>
						<img class="textIco" src="${pageContext.request.contextPath }/res/front/img/icon_phone_03.png" />
						<input maxlength="11" type="text" onfocus="myFunction2(this);" onblur="myFunction2(this);"  value="请输入学生电话"/>
						<p>请输入11位纯数字</p>
					</div>
					<div class="text">
						<div class="hid"></div>
						<img class="textIco" src="${pageContext.request.contextPath }/res/front/img/icon-parentsName_03.png" />
						<input maxlength="5" type="text" onfocus="myFunction3(this);" onblur="myFunction3(this);"  value="请输入家长姓名" />
						<p >姓名不能是符号，表情等</p>
					</div>
					<div class="text">
						<div class="hid"></div>
						<img class="textIco" src="${pageContext.request.contextPath }/res/front/img/icon_phone_03.png" />
						<input maxlength="11" type="text" onfocus="myFunction4(this);" onblur="myFunction4(this);"  value="请输入家长电话" />
						<p>请输入11位纯数字</p>
					</div>
					<div class="text" >
						<div class="hid"></div>
						<img class="textIco" src="${pageContext.request.contextPath }/res/front/img/icon_address_03.png" />
						<input id="city-picker" placeholder="请选择家庭地址的省市区县" type="text" onfocus="myFunction5(this);" onblur="myFunction5(this);"  />					
					</div>
					<div class="text" style="margin-bottom: 2px;display:none;">
						<div class="hid" style="display: none;"></div>
						<img class="textIco" />
						<input type="text" maxlength="200" onfocus="myFunction6(this);" onblur="myFunction6(this);" value="请输入详细地址（具体到门牌）" />
					</div>
					
				</form>
				<div style="position: relative;">
					<div class="hid" style="position: absolute;"></div>
					<button id="textButton"  type="submit">提交</button>
				</div>	
				</div>
			<p class="footer">&copy;2013-2017 天高工作室</p>
			
		</div>
		
		
		
	</body>
		<script type="text/javascript" src="${pageContext.request.contextPath }/res/front/js/message.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath }/res/front/js/ajax.js" ></script>
		<script type="text/javascript" src="${pageContext.request.contextPath }/res/front/js/city-picker.min.js"></script>
		<script type="text/javascript" src="${pageContext.request.contextPath }/res/front/js/jquery-weui.min.js"></script>
		<script type="text/javascript">${requestScope.tokenJs}</script>
</html>
