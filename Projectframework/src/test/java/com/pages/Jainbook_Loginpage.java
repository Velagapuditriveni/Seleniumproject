package com.pages;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
//import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import com.excelutility.ExcelTestdata;

public class Jainbook_Loginpage {
WebDriver driver;
	
	By login=By.linkText("Login");
	By Email=By.xpath("/html/body/form/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[1]/input");
	By password=By.xpath("/html/body/form/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[2]/input");
	By loginsubmit=By.xpath("/html/body/form/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[3]/input");
	By Myaccount=By.xpath("//*[@id=\"form1\"]/div[3]/header/div[2]/div/div[1]/div/ul/li/a/span[1]");
	By logout=By.xpath("//*[@id=\"logout\"]");
	
	public void launch() { // url for launch the chrome
		System.setProperty("webdriver.chrome.driver",  "C:\\Users\\triveni\\Desktop\\Selenium jars\\chromedriver.exe");
		//C:\Users\BLTuser.BLT059\eclipse-workspace\Project_Framework\src\test\resources\Testdata;;;src/test/resources/Driver/chromedriver.exe
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		
	}
	public void LoginPage() //using webdriver get visting the testing website
	{
		driver.get("https://www.jainbookagency.com/india-largest-online-book-store.aspx");
		System.out.println(driver.getTitle());
	}
	
	public void LoginDetails(int i) throws IOException 
	{   ExcelTestdata a =new ExcelTestdata();
		driver.findElement(login).click();
		
		
		driver.findElement(Email).sendKeys(a.excel_username(i)); // passing the vaild mail
		driver.findElement(password).sendKeys(a.excel_password(i)); // passing the vaild password
		driver.findElement(loginsubmit).click();
		
	}
	public void submit() throws InterruptedException, IOException
	{
		Thread.sleep(3000);
		driver.findElement(Myaccount).click();
		WebElement a=driver.findElement(logout);
		Actions act=new Actions(driver);
		act.moveToElement(a).click();
		Thread.sleep(300);	
		Screenshot("C:\\Users\\triveni\\Desktop\\Projectframework\\src\\test\\resources\\Screenshot\\logout1.png");
		driver.close(); // close the current tab
	}
	public void Screenshot(String path) throws IOException
	{
		TakesScreenshot ts=((TakesScreenshot)driver);
		File source=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source, new File(path));
	}
}
