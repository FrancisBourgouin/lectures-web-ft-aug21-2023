/// <reference types="cypress" />

describe("Mega basic app functionality", () => {
  it("should load the app", () => {
    cy.visit("/");

    // Header is OK
    cy.get(".Header h1").should("have.text", "Super Weather App of Destiny v.0.1");

    // CurrentWeather is OK
    cy.get(".CurrentWeather > h1").should("have.length", 1);
    cy.get(".CurrentWeather > h1").should("have.text", "SEARCH FOR A CITY ! :D");

    // CityList is OK
    cy.get(".CityList li").should("not.exist");
  });
});

describe("Search & Button functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should show the weather information when searching for a city", () => {
    cy.get(".CurrentWeather > h1").should("have.text", "SEARCH FOR A CITY ! :D");

    cy.get(".CityForm input").type("Montréal");
    cy.get(".CityForm button").click();

    cy.get(".CurrentWeather > h1").should("not.have.text", "SEARCH FOR A CITY ! :D");
    cy.get(".CurrentWeather > h1").should("have.text", "Current Weather for Montreal");
  });

  it("should not show the weather information when searching for a city", () => {
    cy.get(".CurrentWeather > h1").should("have.text", "SEARCH FOR A CITY ! :D");

    cy.get(".CityForm input").type("Potatinator 2000");
    cy.get(".CityForm button").click();

    cy.get(".CurrentWeather > h1").should("have.text", "SEARCH FOR A CITY ! :D");
  });
  it("should show a new button when searching for a new city", () => {
    cy.get(".CityForm input").type("Montréal{enter}");
    cy.get(".CityForm input").type("Toronto{enter}");
    cy.get(".CityForm input").type("Ottawa{enter}");
    cy.get(".CityForm input").type("Hamilton{enter}");

    cy.get(".CityList li").should("have.length", 4);
  });
  it("should not add a button if we search for a previously searched city", () => {
    cy.get(".CityForm input").type("Hamilton{enter}");
    cy.get(".CityForm input").type("Hamilton{enter}");
    cy.get(".CityForm input").type("Hamilton{enter}");
    cy.get(".CityForm input").type("Hamilton{enter}");

    cy.get(".CityList li").should("have.length", 1);
  });
});
