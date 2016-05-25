package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import data.Answers;
import data.QADAO;
import data.Questions;

@Controller
public class QAController
{
	@Autowired
	private QADAO qadao;
	
	@ResponseBody
	@RequestMapping("ping")
	public String ping()
	{
		return "pong";
	}
	
	// get everything depending on type
	@ResponseBody
	@RequestMapping(path="getQuestions/{type}")
	public List<Questions> getQuestions(@PathVariable String type)
	{
		System.out.println("in getQuestions");
		System.out.println(type);
		List<Questions> questions = qadao.getQuestions(type);
		System.out.println("returned questions: "+questions);
		return questions;
	}
	
	@ResponseBody
	@RequestMapping(path="getAnswers/{question_number}")
	public List<Answers> getAnswers(@PathVariable String question_number)
	{
		System.out.println("in getAnswers");
		System.out.println(question_number);
		List<Answers> answers = qadao.getAnswers(question_number);
		System.out.println("returned answers: "+answers);
		return answers;
	}
	
	// post new question
	@ResponseBody
	@RequestMapping(path = "postQuestion", method = RequestMethod.POST)
	public Boolean postQuestion(@RequestBody Questions question)
	{
		System.out.println("in postQuestions");
		System.out.println(question);
		return qadao.postQuestion(question);
	}
	
	// post new answer
	@ResponseBody
	@RequestMapping(path = "postAnswer", method = RequestMethod.POST)
	public Boolean postAnswer(@RequestBody Answers answer)
	{
		System.out.println("in postAnswers");
		System.out.println(answer);
		return qadao.postAnswer(answer);
	}
}
