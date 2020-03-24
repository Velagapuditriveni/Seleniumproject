package com.Stepdefinition;

import com.pages.Jainbook_Addtocartpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Jainbook_Addtocart {
	Jainbook_Addtocartpage cart=new Jainbook_Addtocartpage();
	
	@Given("^launch the chrome application$")
	public void launch_the_chrome_application() throws InterruptedException  {
		cart.url();
		cart.launchpage();
		cart.login();
	}

	@When("^the user clicks add to cart$")
	public void the_user_clicks_add_to_cart() throws Throwable  {
		cart.add();	}

	@Then("^the user gets the cart details$")
	public void the_user_gets_the_cart_details() throws Throwable {
		cart.cdetails();
		}
	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
		cart.close_search();
	}

}
