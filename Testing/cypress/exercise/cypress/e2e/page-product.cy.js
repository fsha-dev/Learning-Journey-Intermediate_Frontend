describe("check products page", () => {
  before(() => {
    cy.visit("https://automationexercise.com/products");
  });
  it("should", () => {
    // Step 1 :بررسی ورود به صفحه محصولات
    cy.url().should("eq", "https://automationexercise.com/products");
    // Step 2: عنوان بخش محصولات را پیدا کنید و بررسی کنید که متن
    // All Products نمایش داده می‌شود.
    // Selector: سلکتور ترکیبی
    // 💡Reason : برای اینکه مطمئن بشم کلاس سلکتور تایتل برای باکس فیچر آیتم هست
    cy.get(".features_items .title").contains("All Products");
    // Step 3: فیلد جستجوی محصولات را پیدا کنید و بررسی کنید که قابل مشاهده است.
    // Selector:   آیدی سلکتور
    // 💡Reason : آیدی یونیک برای فیلد  سرچ
    cy.get("#search_product").should("be.visible");
    // Step 4: دکمه جستجو را پیدا کنید و بررسی کنید که قابل مشاهده است.
    // Selector: Attribute Selector
    // 💡Reason : آیدی یونیک برای دکمه سابمیت سرچ
    cy.get("[id='submit_search']").should("be.visible");
    // Step 5: کارت‌های محصولات را پیدا کنید و بررسی کنید که حداقل یک محصول در صفحه نمایش داده می‌شود.
    // Selector: Class Selector
    // 💡Reason : کلاس رو انتخاب کردم چون انتخاب تگ دیو هوشمندانه نبود، دیوهای زیادی در صفحه اصلی وجود دارد پس کلاس یونیک تر بود نسبت به دیو
    cy.get(".col-sm-4").should("have.length.at.least", 1);
    // Step 6: نام محصولات را در داخل کارت‌های محصول پیدا کنید و بررسی کنید که نمایش داده می‌شوند.
    // Selector: Descendant Selector
    // 💡Reason : تا جای ممکن سعی کردم هم مسیر کوتاه باشه هم چون آیدی نداشتیم و کلاس بود(چون کارت های مختلفی وجود دارد) از کلاس استفاده کردم که مختص کارت باشه
    cy.get(".single-products > .productinfo > p ").should("not.be.empty");
    // Step 7:ساختار نمایش محصولات را بررسی کنید.
    // محصولاتی را پیدا کنید که فرزند مستقیم بخش نمایش محصولات هستند
    // Selector: Child selector
    // 💡Reason : اول سکشن رو انتخاب کردم و چون در این سکشن فرزندان دیگه هم مثل هدر وجود دارد ، دیو را انتخاب کردم
    cy.get(".features_items").children("div").should("be.visible");
    // Step 8: لینک مشاهده جزئیات محصولات را پیدا کنید.
    //پیدا کردن حداقل یک
    // view product در صفحه
    // Contains
    // 💡Reason : در توضیحات گفته شده لینک برای همین مشخص کردم این متن در تگ ای وجود داشته باشد
    cy.contains("a", "View Product").should("be.visible");
    // Step 9: فیلد جستجو را یک بار دیگر پیدا کنید.
    // Selector: multiple attrs
    // 💡Reason : از دو اتریبیوت استفاده کردم که هم متن پلیس هولدر رو چک کنه هم خود اینپوت آیدی
    cy.get("[id='search_product'][placeholder='Search Product']").should(
      "be.visible",
    );
  });
});
