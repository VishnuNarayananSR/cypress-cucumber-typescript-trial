import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
  cy.addTestContext("Additional Context")
  cy.addTestContext({
    title: "test",
    value: "test"
  })
  console.log(`There were items found in the todo-list`);

  assert.deepEqual({}, {});
});