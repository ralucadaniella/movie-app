it("should visit this site", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
});

it("should scroll down", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
  cy.scrollTo(0, 2000);
});

it("should open the movies page", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
  cy.get(":nth-child(2) > .nav-link").click();
});

it("should search a movie", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
  cy.get(":nth-child(2) > .nav-link").click();
  cy.get(".form-control").type("avatar");
  cy.get("#search-form > .btn").click();
  cy.get(":nth-child(1) > app-movie > .overlay").click();
});

it("should click a category", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
  cy.get(":nth-child(2) > .nav-link").click();
  cy.scrollTo(0, 500);
  cy.get(":nth-child(4) > li").click();
});

it("should open the watchlist page and should check the checkbox", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
  cy.get(".btn").click();
  cy.scrollTo(0, 200);
  cy.get('[type="checkbox"]').check();
  cy.get('[type="checkbox"]').uncheck();
});

it("should open the watchlist page and delete the first movie", () => {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
  cy.get(".btn").click();
  cy.scrollTo(0, 200);
  cy.get(
    ":nth-child(1) > app-watchlist-item > .wtl-movie-box > .wtl-movie-info > #buttons > #delete"
  ).click();
});
