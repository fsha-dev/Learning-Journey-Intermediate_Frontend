describe("Product Page", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/products");
  });
  it("Open product page", () => {
    //وارد صفحه محصولات شوید
    cy.url().should("equal", "https://automationexercise.com/products");
  });
  it("Find title product page", () => {
    // عنوان بخش محصولات را پیدا کنید و بررسی کنید که این بخش در صفحه وجود دارد
    cy.get(".title").as("product-page-title").should("exist");
    // بررسی کنید که عنوان بخش محصولات برای کاربر قابل مشاهده است
    cy.get("@product-page-title").should("be.visible");
    //متن عنوان بخش محصولات را بررسی کنید و مطمئن شوید متن نمایش داده‌شده دقیقاً برابر با ALL PRODUCTS است
    cy.get("@product-page-title").should("have.text", "All Products");
    cy.get("@product-page-title").should(
      "have.css",
      "text-transform",
      "uppercase",
    );
    //بررسی کنید که متن عنوان بخش محصولات شامل عبارت PRODUCTS باشد
    cy.get("@product-page-title")
      .should("contain.text", "Products")
      .should("have.css", "text-transform", "uppercase");
  });
  it("find product cards", () => {
    cy.get(".features_items")
      .children(".col-sm-4")
      .should("have.length.greaterThan", 0);
  });
  it("find search product feild", () => {
    // فیلد جستجوی محصولات را پیدا کنید و بررسی کنید که دارای Attribute مربوط به name است
    cy.get("#search_product").as("search").should("have.attr", "name");
    //عبارت Blue Top را در فیلد جستجو وارد کنید و بررسی کنید که مقدار واردشده در فیلد ذخیره شده است
    cy.get("@search").type("Blue Top").should("have.value", "Blue Top");
  });
  it("search product item in search feild", () => {
    cy.get("#search_product").as("search").should("have.attr", "name");
    cy.get("@search").type("Blue Top");
    cy.get("#submit_search").click();
    cy.get(".features_items").find("p").should("contain.text", "Blue Top");
    cy.get("@search").clear();
    cy.get("@search").type("abcdefg12345");
    cy.get("#submit_search").click();
    cy.get(".features_items").should("not.contain.text", "Blue Top");
    cy.get(".title").should("have.text", "Searched Products");
  });
});
