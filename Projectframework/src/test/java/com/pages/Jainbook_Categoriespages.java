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

public class Jainbook_Categoriespages {
	WebDriver driver;
	By login=By.linkText("Login");
	By Email=By.xpath("/html/body/form/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[1]/input");
	By password=By.xpath("/html/body/form/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[2]/input");
	By loginsubmit=By.xpath("/html/body/form/div[3]/div[1]/div[1]/div/div/div/div[2]/div/div/div[1]/div/div[3]/input");
	By category = By.xpath("//*[@id=\"navigation\"]/ul/li[2]/a");
	By select = By.xpath("//*[@id=\"category_menu\"]/li[2]/ul/li[4]/a");
	By cart = By.xpath("//*[@id=\"ContentPlaceHolder1_products\"]/div[2]/div/div[4]/div[2]/a/i");
	By continueshop = By.xpath("//*[@id=\"btn_ContinueShopping\"]");
	By Myaccount=By.xpath("//span[@class='uname']");
    By logout=By.xpath("//*[@id=\"logout\"]");
	
	public void launch() 
	{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\triveni\\Desktop\\Selenium jars\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}
	
	public void launchpage()
	{
		driver.get("https://www.jainbookagency.com/india-largest-online-book-store.aspx");
		System.out.println(driver.getTitle());
	}
	public void login() 
    {
    	
		driver.findElement(login).click();
		driver.findElement(Email).sendKeys("trivenivspd@gmail.com"); // passing the vaild mail
		driver.findElement(password).sendKeys("Triveni@17"); // passing the vaild password
		driver.findElement(loginsubmit).click();
    }
	
	public void category_cart() throws InterruptedException, IOException
	{
		WebElement link =driver.findElement(category);
		WebElement link1=driver.findElement(select);
		Actions action = new Actions(driver);
		action.moveToElement(link);
		action.moveToElement(link1).click().build().perform();
		driver.findElement(cart).click();
		driver.findElement(continueshop).click();
		Thread.sleep(2000);
		
		Screenshot("C:\\Users\\triveni\\Desktop\\Projectframework\\src\\test\\resources\\Screenshot\\Categories1.jpg");
	}
	
	public void Closecategory() throws InterruptedException 
	{
		driver.findElement(Myaccount).click();
		WebElement a=driver.findElement(logout);
		Actions act=new Actions(driver);
		act.moveToElement(a).click();
		Thread.sleep(300);	
		driver.close(); //Close the current tab
	}
	
	public void Screenshot(String path) throws IOException
	{
		TakesScreenshot ts=((TakesScreenshot)driver);
		File source=ts.getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(source, new File(path));
	}
	
}
