describe("check products page", () => {
  beforeEach(() => {
    cy.visit("/products");
  });
  it("should", () => {
    cy.url().should("eq", "https://automationexercise.com/products");
    // سلکتور ترکیبی
    // 💡Reason : برای اینکه مطمئن بشم کلاس سلکتور تایتل برای باکس فیچر آیتم هست
    cy.get(".features_items .title").contains("All Products");
    // سلکتور ترکیبی با آیدی سلکتور
    // 💡Reason : آیدی یونیک برای دکمه سابمیت سرچ
    cy.get("#submit_search").should("be.visible");
    //کلاس سلکتور
    // 💡Reason : کلاس رو انتخاب کردم چون انتخاب تگ دیو هوشمندانه نبود، دیوهای زیادی در صفحه اصلی وجود دارد پس کلاس یونیک تر بود نسبت به دیو
    cy.get(".col-sm-4").should("have.length.at.least", 1);
    // Descendant Selector
    // 💡Reason : تا جای ممکن سعی کردم هم مسیر کوتاه باشه هم چون آیدی نداشتیم و کلاس بود(چون کارت های مختلفی وجود دارد) از کلاس استفاده کردم که مختص کارت باشه
    cy.get(".single-products > .productinfo > p ").should("not.be.empty");
    // Child selector
    // 💡Reason : اول سکشن رو انتخاب کردم و چون در این سکشن فرزندان دیگه هم مثل هدر وجود دارد ، دیو را انتخاب کردم
    cy.get(".features_items").children("div").should("be.visible");
    // پیدا کردن حداقل یک
    // view product در صفحه
    // 💡Reason : در توضیحات گفته شده لینک برای همین مشخص کردم این متن در تگ ای وجود داشته باشد
    cy.contains("a", "View Product").should("be.visible");
    // selector multiple attrs
    // 💡Reason : از دو اتریبیوت استفاده کردم که هم متن پلیس هولدر رو چک کنه هم خود اینپوت آیدی
    cy.get("[id='search_product'][placeholder='Search Product']").should(
      "be.visible",
    );
  });
});
