package data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="comments")
public class Comments
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String comment;
	
	public Comments()
	{
	}
	
	public Comments(int id, String comment)
	{
		super();
		this.id = id;
		this.comment = comment;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getComment()
	{
		return comment;
	}

	public void setComment(String comment)
	{
		this.comment = comment;
	}

	@Override
	public String toString()
	{
		return "Comments [id=" + id + ", comment=" + comment + "]";
	}
}
