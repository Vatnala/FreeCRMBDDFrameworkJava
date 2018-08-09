package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	WebDriver driver;

	@Given("User is already on login page$")
	
	public  void user_already_on_loginpage()
	{
		driver = new FirefoxDriver();
		driver.get("https://www.freecrm.com/");
	}
	
	@When("title of login page is Free CRM$")
		public void title_of_login_page_is_Free_CRM()
		{
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
		}
	
	@Then("user enters username and password$")
	public void user_enters_username_nd_password()
	{
		driver.findElement(By.name("username")).sendKeys("JohnThomas");
		driver.findElement(By.name("password")).sendKeys("ThomasJohn");
	}
	
	@Then("user clicks on login button$")
	public void user_clicks_on_login_button()
	{
		driver.findElement(By.xpath(".//*[@id='loginForm']/div/div/input")).click();
	}
	
	@Then("user is on home page$")
	public void user_is_on_homepage()
	{
		String title = driver.getTitle();
		System.out.println("Home page Title:" +title);
		Assert.assertEquals("CRMPRO", title);
	}
	
	@Then("close the browser$")
	public void close_The_Browser()
	{
		driver.quit();
	}
	
	@Given("User is already on home page$")
	public void user_Is_Already_On_Homepgae()
	{
		driver = new FirefoxDriver();
		driver.get("https://www.freecrm.com/");
		driver.findElement(By.name("username")).sendKeys("JohnThomas");
		driver.findElement(By.name("password")).sendKeys("ThomasJohn");
		driver.findElement(By.xpath(".//*[@id='loginForm']/div/div/input")).click();
	}
	
	@When("user mouse over on contact link$")
	public void user_mouse_over_on_contact_Link()
	{
		driver.switchTo().frame("mainpanel");
		Actions act = new Actions(driver);
		act.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
	}
	
	@Then("user clicks on new contact link$")
	public void user_clicks_on_new_Contact_Link()
	{
		driver.findElement(By.linkText("New Contact")).click();
	}
	
	@Then("user enters firstname and lastname$")
	public void user_enters_firstname_and_lastname()
	{
		driver.findElement(By.name("first_name")).sendKeys("Alex");
		driver.findElement(By.name("surname")).sendKeys("Joe");
	}
	
	@Then("user clicks on save button$")
	public void clicks_on_save_button()
	{
		driver.findElement(By.xpath("//input[contains(@class, 'button')] ")).click();
	}
}
