<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
  	<jsp:include page="_head.jsp"></jsp:include>
    <title>&lt;Ask a Question/&gt;</title>
  </head>
  <body>
    <jsp:include page="_menu.jsp"></jsp:include>
    <h1>&lt;Ask a Question/&gt;</h1>
    <div class="leftAd"></div>
    <div class="rightAd"></div>
    <div id="questionContainer">
      <div id="topicDiv" class="error"></div>
      <div id="questionBoxDiv" class="error"></div>
      <div id="questionBoxLengthDiv" class="error"></div>
      <select id="topic">
        <option value="">Select a Topic</option>
        <option>Java</option>
        <option>JavaScript</option>
        <option>SQL</option>
        <option value="cSharp">C#</option>
        <option>Python</option>
        <option value="cPlusPlus">C++</option>
        <option>PHP</option>
        <option value="IOS">iOS</option>
        <option value="RubyRails">Ruby/Rails</option>
        <option value="HTMLCSS">HTML/CSS</option>
        <option>Git</option>
      </select>
      <textarea id="questionBox" rows="6" placeholder="Ask your question here"></textarea>
      <button id="ask">Ask</button>
    </div>
    <script src="js/devQA.js"></script>
  </body>
</html>
