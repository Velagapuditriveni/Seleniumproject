package com.Stepdefinition;

import java.io.IOException;

import com.pages.Jainbook_Categoriespages;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Jainbook_Categories {
	Jainbook_Categoriespages cat=new Jainbook_Categoriespages();
	@Given("^launch chrome application$")
	public void launch_chrome_application()  {
	    cat.launch();	
	    cat.launchpage();
	    //cat.login();
	}

	@When("^the user clicks the categories$")
	public void the_user_clicks_the_categories() throws InterruptedException, IOException  {
		cat.login();
	}

	@Then("^the user moves to any one element$")
	public void the_user_moves_to_any_one_element() throws InterruptedException, IOException  {
		 cat.category_cart();
	}

	@Then("^the user click on add to cart$")
	public void the_user_click_on_add_to_cart() throws InterruptedException {
		 cat.Closecategory();
	}

	/*@Then("^user  close and logout the page$")
	public void user_close_and_logout_the_page()  {
cat.();	}
}
*/
}