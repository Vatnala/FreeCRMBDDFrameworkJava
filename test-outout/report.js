$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "id": "free-crm-login-feature",
  "description": "",
  "name": "Free CRM Login Feature",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "description": "",
  "name": "Free CRM Login Test Scenario",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "User is already on login page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "title of login page is Free CRM",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "Then ",
  "line": 8
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then ",
  "line": 9
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_loginpage()"
});
formatter.result({
  "duration": 9580539925,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 41567188,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_nd_password()"
});
formatter.result({
  "duration": 346962868,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10023332173,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 38557097,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_The_Browser()"
});
formatter.result({
  "duration": 634392541,
  "status": "passed"
});
formatter.scenario({
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact",
  "description": "",
  "name": "user is able to create a new contact",
  "keyword": "Scenario",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "User is already on home page",
  "keyword": "Given ",
  "line": 14
});
formatter.step({
  "name": "user mouse over on contact link",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "user clicks on new contact link",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "user enters firstname and lastname",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "user clicks on save button",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "verify new contact created",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "location": "LoginStepDefinition.user_Is_Already_On_Homepgae()"
});
formatter.result({
  "duration": 19313236410,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_mouse_over_on_contact_Link()"
});
formatter.result({
  "duration": 200417849,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 300936987,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_firstname_and_lastname()"
});
formatter.result({
  "duration": 2130544482,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clicks_on_save_button()"
});
formatter.result({
  "duration": 293325148,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});