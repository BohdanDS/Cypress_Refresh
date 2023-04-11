describe("open home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/")
  })
  it("Check H1 text contains correct text", () => {
    cy.get("h1")
      .should("exist")
      .contains("Testing Next.js Applications with Cypress")
  })
  it("Check H1 assertion", () => {
    cy.get("h1").should("contain", "Testing Next.js Applications with Cypress")
  })
  it("Get H1 by test-data attribute", () => {
    cy.getByData("hero-heading").should(
      "contain",
      "Testing Next.js Applications with Cypress"
    )
  })
  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).should("contain", "4 Courses")
  })
  context("Subscruption Cases", () => {
    it("Enter valid email in subscribe form", () => {
      cy.getByData("email-input").type("fake_email@gmail.com")
      cy.getByData("submit-button").click()
      cy.getByData("success-message")
        .should("exist")
        .should("contain", "fake_email@gmail.com")
    })
    it("Enter existing email in subscribe form", () => {
      cy.getByData("email-input").type("john@example.com")
      cy.getByData("submit-button").click()
      cy.getByData("server-error-message")
        .should("exist")
        .should("contain", "john@example.com")
    })
  })
  context("Course Sections", () => {
    it("Course: Testing your first Next.js application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it("Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })
    it("Cypress Foundations", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})
