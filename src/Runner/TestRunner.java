package Runner;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(
		features = "E:/Mars_WorkSpace/FreeCRMBDDFrameworkJava/src/Features",
		glue = {"stepDefinitions"},
		format= {"pretty","html:test-outout"}
		)
public class TestRunner {

	
}
