package data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="questions")
public class Questions
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String topic;
	private String question;
	public Questions()
	{
	}
	public Questions(int id, String topic, String question)
	{
		super();
		this.id = id;
		this.topic = topic;
		this.question = question;
	}
	public int getId()
	{
		return id;
	}
	public void setId(int id)
	{
		this.id = id;
	}
	public String getTopic()
	{
		return topic;
	}
	public void setTopic(String topic)
	{
		this.topic = topic;
	}
	public String getQuestion()
	{
		return question;
	}
	public void setQuestion(String question)
	{
		this.question = question;
	}
	@Override
	public String toString()
	{
		return "Questions [id=" + id + ", topic=" + topic + ", question=" + question + "]";
	}
}
