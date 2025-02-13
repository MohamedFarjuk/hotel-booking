package com.farjuk1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.Test;

public class projecttest {
		@Test
		
		public void test()  throws InterruptedException{
			WebDriver driver=new ChromeDriver();
			driver.get("file:///D:/hotel%20booking/index.html");
			driver.manage().window().maximize();
			driver.findElement(By.id("name")).sendKeys("farjuk");
			driver.findElement(By.id("email")).sendKeys("mohdfarjuk@gmail.com");
			driver.findElement(By.id("checkin")).sendKeys("07/06/25");
			driver.findElement(By.id("checkout")).sendKeys("08/06/25");
			driver.findElement(By.xpath("//button[@type='submit']")).click();
		}


}
