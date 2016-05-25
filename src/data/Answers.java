package data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="answers")
public class Answers
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String question_number;
	private String answer;
	
	public Answers()
	{
	}

	public Answers(int id, String question_number, String answer)
	{
		super();
		this.id = id;
		this.question_number = question_number;
		this.answer = answer;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getQuestion_number()
	{
		return question_number;
	}

	public void setQuestion_number(String question_number)
	{
		this.question_number = question_number;
	}

	public String getAnswer()
	{
		return answer;
	}

	public void setAnswer(String answer)
	{
		this.answer = answer;
	}

	@Override
	public String toString()
	{
		return "Answers [id=" + id + ", question_number=" + question_number + ", answer=" + answer + "]";
	}
}
