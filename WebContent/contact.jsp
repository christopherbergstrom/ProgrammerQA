<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
  	<jsp:include page="_head.jsp"></jsp:include>
    <title>&lt;Contact Us/&gt;</title>
  </head>
  <body>
    <jsp:include page="_menu.jsp"></jsp:include>
    <h1>&lt;Contact Us/&gt;</h1>
    <div class="leftAd"></div>
    <div class="rightAd"></div>
    <div id="questionContainer">
      <div id="questionBoxDiv" class="error"></div>
      <div id="questionBoxLengthDiv" class="error"></div>
      <textarea id="questionBox" rows="6" placeholder="Type your comment here"></textarea>
      <button id="send">Send</button>
    </div>
    <script src="js/devQA.js"></script>
  </body>
</html>
