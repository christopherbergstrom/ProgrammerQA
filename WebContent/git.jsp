<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
  	<jsp:include page="_head.jsp"></jsp:include>
    <title>&lt;Git Q&A/&gt;</title>
  </head>
  <body>
    <input type = "hidden" id = "type" value = "Git"/>
    <jsp:include page="_menu.jsp"></jsp:include>
    <h1>&lt;Git Q&A/&gt;</h1>
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
