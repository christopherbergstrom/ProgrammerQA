package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public class QADAO
{	
	@PersistenceContext
	private EntityManager em;
	
	public List<Questions> getQuestions(String type)
	{
		return em.createQuery("SELECT q FROM Questions q WHERE q.topic like :type", Questions.class).setParameter("type", type).getResultList();
	}
	public List<Answers> getAnswers(String question_number)
	{
		return em.createQuery("SELECT a FROM Answers a WHERE a.question_number like :question_number", Answers.class).setParameter("question_number", question_number).getResultList();
	}
	public Boolean postQuestion(Questions question)
	{
		em.persist(question);
		if (!em.contains(question))
		{
			return false;
		} 
		else
		{
			return true;
		}
	}
	public Boolean postAnswer(Answers answer)
	{
		em.persist(answer);
		if (!em.contains(answer))
		{
			return false;
		} 
		else
		{
			return true;
		}
	}
}
