<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
	<jsp:include page="_head.jsp"></jsp:include>
    <title>&lt;Programmer Q&A/&gt;</title>
  </head>
  <body>
	<%-- <jsp:include page="_menu.jsp"></jsp:include> --%>
	<div class="menu">
		<div>
			<a class="a active" href="index.jsp">Home</a><!-- 
			 --><a class="a" href="java.jsp">Java</a><!-- 
			 --><a class="a" href="javascript.jsp">JavaScript</a><!-- 
			 --><a class="a" href="sql.jsp">SQL</a><!-- 
			 --><a class="a" href="csharp.jsp">C#</a><!-- 
			 --><a class="a" href="python.jsp">Python</a><!-- 
			 --><a class="a" href="cplusplus.jsp">C++</a><!-- 
			 --><a class="a" href="php.jsp">PHP</a><!-- 
			 --><a class="a" href="ios.jsp">iOS</a><!-- 
			 --><a class="a" href="rubyrails.jsp">Ruby/Rails</a><!-- 
			 --><a class="a" href="htmlcss.jsp">HTML/CSS</a><!-- 
			 --><a class="a" href="git.jsp">Git</a><!-- 
			 --><a class="a" id="more" href="#">More</a>
		</div>
		<div id="list" class="items">
			<a class="moreA" href="question.jsp">Ask a Question</a>
			<a class="moreA" href="contact.jsp">Contact Us</a>
		</div>
	</div>
    <h1>&lt;Programmer Q&A/&gt;</h1>
    <div class="leftAd"></div>
    <div class="rightAd"></div>
    <div id="container">
      <div class="questionLabel">What is Programmer Q&A?</div>
      <div class="answer qaContainer">
        <p>Programmer Q&A is the website that I wish was available to me when I was learning to code. It provides accurate and detailed
          answers to the questions that programmers want answered using the most popular programming languages.</p>
      </div>

      <div class="questionLabel">How does it work?</div>
      <div class="answer qaContainer">
        <p>This is a website where you can ask questions about specific coding languages and those who know the answers can come answer
           the questions posted.</p>
      </div>

      <div class="questionLabel">How do I ask a question?</div>
      <div class="answer qaContainer">
        <p>Click on the "Ask a Question" button, fill out the form, and click the "Ask" button. Your question will be answered soon
        by other users of the website.</p>
      </div>

      <div class="questionLabel">How do I answer a question?</div>
      <div class="answer qaContainer">
        <p>Click the bubble next to the question you want to answer, fill out the form, and click the "Answer" button. Your answer
        will appear immediately.</p>
      </div>
    </div>
    <script src="js/devQA.js"></script>
  </body>
</html>
