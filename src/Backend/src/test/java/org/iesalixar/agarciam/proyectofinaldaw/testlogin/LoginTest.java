package org.iesalixar.agarciam.proyectofinaldaw.testlogin;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class LoginTest {
	
	private WebDriver driver;
	
	@Given("browser is open")
	public void browser_is_open() {
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/drivers/chromedriver.exe");
		//System.setProperty("webdriver.chrome.driver", "C:\\Users\\Antonio\\OneDrive\\Escritorio\\DAW2\\Proyecto Final\\Backend\\proyectoFinalDaw_BMV\\src\\test\\resources\\drivers\\chromedriver.exe");
		
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.google.com");
	}
	
	@And("user is on login page")
	public void user_is_on_login_page() {
		driver.navigate().to("https://localhost:4200");
	}

	@When("user enters (.*) and (.*)")
	public void user_logs_in(String username, String password) {
		
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
	}
	
	@And("user clicks on login")
	public void user_clicks_login() {
		driver.findElement(By.id("login")).click();
	}
	
	@Then("user is navigated to the home page")
	public void login_successful() {
		driver.findElement(By.id("logout")).isDisplayed();
		
		driver.close();
		driver.quit();
	}
}
