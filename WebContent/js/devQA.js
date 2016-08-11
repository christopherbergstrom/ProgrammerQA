var ask;
var send;
var body;
var container;
var answerContainer;
var type;
var topicDiv;
var questionBoxDiv;
var questionBoxLengthDiv;
var answerBoxDiv;
var answerSelectDiv;
var answerBoxLengthDiv;
window.onload = function()
{
    $("#more").click(function()
    	      {
    	        // $("#list").css("display", "block");
    	        $("#list").toggleClass("show");
    	      });
    	      $(document).click(function(e)
    	      {
    	        if(!e.target.matches('#more'))
    	        {
    	          $("#list").removeClass("show");
    	        }
    	      });
  body = document.querySelector("body");
  topicDiv = document.getElementById("topicDiv");
  questionBoxDiv = document.getElementById("questionBoxDiv");
  questionBoxLengthDiv = document.getElementById("questionBoxLengthDiv");
  answerSelectDiv = document.getElementById("answerSelectDiv");
  answerBoxDiv = document.getElementById("answerBoxDiv");
  answerBoxLengthDiv = document.getElementById("answerBoxLengthDiv");
  container = document.getElementById("container");
  answerContainer = document.getElementById("answerContainer");
  type = document.getElementById("type");
  ask = document.getElementById("ask");
  send = document.getElementById("send");
  if (type)
  {
    getQuestions(loadContent);
  }
  if (ask)
  {
    ask.addEventListener("click", function()
    {
      var topic = document.getElementById("topic");
      var question = document.getElementById("questionBox");
      var topicValue = topic.value;
      var questionValue = question.value;
      var pass = validateQuestion(topicValue, questionValue);
      questionValue = checkForTagsAndLines(questionValue);
      if (pass)
      {
        // console.log(topicValue+" "+questionValue);
        var questionObj = {topic:topicValue, question:questionValue};
        post("POST", "rest/postQuestion/", questionObj);
      }
    });
  }
  if (send)
  {
	  send.addEventListener("click", function()
	  {
		  var comment = document.getElementById("questionBox");
		  var commentValue = comment.value;
		  var pass = validateComment(commentValue);
		  commentValue = checkForTagsAndLines(commentValue);
		  if (pass)
		  {
			  // console.log(topicValue+" "+questionValue);
			  var commentObj = {comment:commentValue};
			  post("POST", "rest/postComment/", commentObj);
		  }
      });
  }
};
function validateQuestion(topicValue, questionValue)
{
  // console.log("in validateQuestion");
  // console.log(topicValue+" "+questionValue);
  questionValue =  questionValue.trim();
  topicDiv.innerHTML="";
  questionBoxDiv.innerHTML="";
  questionBoxLengthDiv.innerHTML="";
  if (topicValue === "" && questionValue === "")
  {
    topicDiv.innerHTML="Please select a topic";
    questionBoxDiv.innerHTML="Please enter a question";
    return false;
  }
  else if (topicValue === "")
  {
    topicDiv.innerHTML="Please select a topic";
    return false;
  }
  else if (questionValue === "")
  {
    questionBoxDiv.innerHTML="Please enter a question";
    return false;
  }
  else if (topicValue !== "" && questionValue.length < 11)
  {
    questionBoxLengthDiv.innerHTML="Question must be longer than 10 characters";
    return false;
  }
  else
  {
    return true;
  }
}
function validateAnswer(answerValue)
{
  // console.log("in validateAnswer");
  // console.log(answerValue);
  answerValue = answerValue.trim();
  answerBoxDiv.innerHTML="";
  answerBoxLengthDiv.innerHTML="";
  if (answerValue === "")
  {
    answerBoxDiv.innerHTML="Please enter an answer";
    return false;
  }
  else if (answerValue.length < 11)
  {
    answerBoxLengthDiv.innerHTML="Answer must be longer than 10 characters";
    return false;
  }
  else
  {
    return true;
  }
}
function validateComment(commentValue)
{
	// console.log("in validateAnswer");
	// console.log(answerValue);
	commentValue = commentValue.trim();
	questionBoxDiv.innerHTML="";
	questionBoxLengthDiv.innerHTML="";
	if (commentValue === "")
	{
		questionBoxDiv.innerHTML="Please enter a comment";
		return false;
	}
	else if (commentValue.length < 11)
	{
		questionBoxLengthDiv.innerHTML="Comment must be longer than 10 characters";
		return false;
	}
	else
	{
		return true;
	}
}
function checkForTagsAndLines(value)
{
  var value1 = value.replace(/</g, "&lt;");
  var value2 = value1.replace(/>/g, "&gt;");
  var value3 = value2.replace(/\n/g, "<br>")
  return value3;
}
function getQuestions(loadContent)
{
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "rest/getQuestions/"+type.value);
  xhr.onreadystatechange = function()
  {
    if (xhr.readyState == 4 && xhr.status < 400)
    {
      var questionsArray = JSON.parse(xhr.responseText);
      loadContent(questionsArray);
    }
  };
  xhr.send(null);
}
function getAnswers(question_number, loadAnswers)
{
  // console.log("in get answers");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "rest/getAnswers/"+question_number);
  xhr.onreadystatechange = function()
  {
    if (xhr.readyState == 4 && xhr.status < 400)
    {
      var answersArray = JSON.parse(xhr.responseText);
      // return answersArray;
      // console.log(answersArray);
      loadAnswers(answersArray, question_number);
    }
  };
  xhr.send(null);
}

function loadAnswers(answersArray, question_number)
{
  // console.log("in loadAnswers "+question_number);
  if (answersArray.length > 0)
  {
    // console.log("answersArray > 0");
    for (var j=0; j<answersArray.length; j++)
    {
      // console.log(answersArray[j].question_number);
      // console.log(answersArray[j].answer);
      // console.log(question_number);
      // if (answersArray.id === question_number)
      // {
        // console.log("passed");
        var answerLabel = document.createElement("div");
        answerLabel.innerHTML="Answer";
        answerLabel.setAttribute("class", "answerLabel");
        var answer = document.createElement("div");
        answer.innerHTML=answersArray[j].answer;
        answer.setAttribute("class", "answer");
        var qaContainerId = "qaContainer"+question_number;
        var qaContainer = document.getElementById(qaContainerId);
        qaContainer.appendChild(answerLabel);
        qaContainer.appendChild(answer);
      // }
    }
  }
}

function loadContent(questionsArray)
{
  var radioButtonsArray = [];
  for (var i=0; i<questionsArray.length; i++)
  {
    // // console.log(questionsArray[i].id);
    var qaContainer = document.createElement("div")
    var qaContainerId = "qaContainer"+questionsArray[i].id;
    qaContainer.setAttribute("id", qaContainerId);
    qaContainer.setAttribute("class", "qaContainer");
    var questionLabel = document.createElement("div");
    questionLabel.innerHTML="Question";
    questionLabel.setAttribute("class", "questionLabel");
    var question = document.createElement("div");
    question.setAttribute("class", "question");
    question.innerHTML=questionsArray[i].question;
    var radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", "radioButton");
    radio.setAttribute("value", questionsArray[i].id);
    radio.setAttribute("class", "askSelectButton");
    // radio.setAttribute("class", "buttons");
    radioButtonsArray.push(radio);
    question.appendChild(radio);
    qaContainer.appendChild(questionLabel);
    qaContainer.appendChild(question);
    container.appendChild(qaContainer);
    // console.log("before getAnswers");
    getAnswers(questionsArray[i].id, loadAnswers);
    // console.log("after getAnswers");
    // var answersArray = getAnswers(questionsArray[i].id);
    // // console.log(answersArray);
    // if (answersArray)
    // {
    //   for (var j=0; j<answersArray.length; j++)
    //   {
    //     if (answersArray.id === questionsArray.id)
    //     {
    //       // console.log("passed");
    //       var answerLabel = document.createElement("div");
    //       answerLabel.innerHTML="Answer";
    //       answerLabel.setAttribute("class", "answerLabel");
    //       var answer = document.createElement("div");
    //       answer.innerHTML=answersArray[i].answer;
    //       answer.setAttribute("class", "answer");
    //       container.appendChild(answerLabel);
    //       container.appendChild(answer);
    //     }
    //   }
    // }
  }
  var answerBox = document.createElement("textarea");
  answerBox.setAttribute("id", "answerBox");
  answerBox.setAttribute("placeholder", "Answer question here");
  // answerBox.setAttribute("id", i);
  answerBox.setAttribute("rows", "6");
//  answerBox.setAttribute("cols", "100");
  var answerBtn = document.createElement("button");
  answerBtn.innerHTML="Answer";
  answerBtn.setAttribute("id", "answerBtn");
  // answerBtn.setAttribute("id", i);
  answerContainer.appendChild(answerBox);
  answerContainer.appendChild(answerBtn);
  answerBtn.addEventListener("click", function()
  {
    for (var k=0; k<radioButtonsArray.length; k++)
    {
      answerSelectDiv.innerHTML="";
      if (radioButtonsArray[k].checked === true)
      {
        var id = radioButtonsArray[k].value;
        var answerBox = document.getElementById("answerBox");
        // // console.log("in click");
        // // console.log(answerBox);
        // // console.log(answerBox.value);
        var answerValue = answerBox.value;
        var pass = validateAnswer(answerValue);
        answerValue = checkForTagsAndLines(answerValue);
        if (pass)
        {
          // console.log("passed");
          // console.log(answerValue);
          var answerObj = {question_number:id, answer:answerValue};
          post("POST", "rest/postAnswer/", answerObj);
        }
      }
      else
      {
        answerSelectDiv.innerHTML="Please select a question";
      }
    }
  });
}
function post(method, url, object, callback)
{
  var xhr = new XMLHttpRequest();
  xhr.open(method,url);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange=function ()
  {
    // // console.log(xhr.status);
    // // console.log(xhr.readyState);
    // // console.log(xhr.responseText);
    // // console.log(xhr.getAllResponseHeaders());
  }
  if (object)
  {
    xhr.send(JSON.stringify(object));
  }
  else
  {
    xhr.send(null);
  }
  location.reload();
}
