<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
  	<jsp:include page="_head.jsp"></jsp:include>
    <title>&lt;Python Q&A/&gt;</title>
  </head>
  <body>
    <input type = "hidden" id = "type" value = "Python"/>
    <%-- <jsp:include page="_menu.jsp"></jsp:include> --%>
    <div class="menu">
	<div>
		<a class="a" href="index.jsp">Home</a><!-- 
		 --><a class="a" href="java.jsp">Java</a><!-- 
		 --><a class="a" href="javascript.jsp">JavaScript</a><!-- 
		 --><a class="a" href="sql.jsp">SQL</a><!-- 
		 --><a class="a" href="csharp.jsp">C#</a><!-- 
		 --><a class="a active" href="python.jsp">Python</a><!-- 
		 --><a class="a" href="cplusplus.jsp">C++</a><!-- 
		 --><a class="a" href="php.jsp">PHP</a><!-- 
		 --><a class="a" href="ios.jsp">iOS</a><!-- 
		 --><a class="a" href="rubyrails.jsp">Ruby/Rails</a><!-- 
		 --><a class="a" href="htmlcss.jsp">HTML/CSS</a><!-- 
		 --><a class="a" href="git.jsp">Git</a><!-- 
		 --><a class="a" id="more" href="#">More <span class="fa fa-angle-down"></span></a>
	</div>
	<div id="list" class="items">
		<a class="moreA" href="question.jsp">Ask a Question</a>
		<a class="moreA" href="contact.jsp">Contact Us</a>
	</div>
</div>
    <h1>&lt;Python Q&A/&gt;</h1>
    <div class="leftAd"></div>
    <div class="rightAd"></div>
    <div id="container">
    </div>
    <div id="answerContainer">
      <div id="answerSelectDiv" class="error"></div>
      <div id="answerBoxDiv" class="error"></div>
      <div id="answerBoxLengthDiv" class="error"></div>
    </div>
    <script src="js/devQA.js"></script>
  </body>
</html>
