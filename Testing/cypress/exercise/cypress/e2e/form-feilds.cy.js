describe("Form Feilds", () => {
  it("should submit the form successfully", () => {
    cy.log("وارد صفحه شوید");
    cy.visit("https://practice-automation.com/form-fields");
    cy.log("فیلد Name را پیدا کنید و مقدار Cypress User را وارد کنید");
    // Reason : اتریبیوت تست آیدی پایدارترین و یونیک ترین
    cy.get('[data-cy="name-input"]')
      .type("Cypress User")
      .should("have.value", "Cypress User");
    cy.log("مقدار فیلد Name را پاک کنید");
    cy.get('[data-cy="name-input"]').clear().should("not.have.value");
    cy.log("مقدار QA Intern را مجدداً در فیلد Name وارد کنید");
    cy.get('[data-cy="name-input"]')
      .type("QA Intern")
      .should("have.value", "QA Intern");
    cy.log("فیلد Password را با یک مقدار دلخواه تکمیل کنید");
    // Reason : فقط یک عدد فیلد تایپ پسورد در تمام صفحه داریم
    cy.get("[type='password']").type("qa123").should("have.value", "qa123");
    cy.log("در بخش «نوشیدنی مورد علاقه»، گزینه Coffee را انتخاب کنید");
    // Reason : برای اینکه مطمئن شویم درینک 3 همان فیلد قهوه است اول بررسی میکنیم با اسرشن سپس انتخاب می‌شود
    // اتریبوت اسم رو هم انتخاب میکنیم تا مطمئن شویم این نوشیدنی برای بخش نوشیدنی موردعلاقه است
    cy.get('[data-cy="drink3"][name="fav_drink"]')
      .as("fav-drink-coffee")
      .should("have.value", "Coffee")
      .check()
      .should("be.checked");
    cy.log("انتخاب گزینه Coffee را لغو کنید");
    // Reason : اول انتخاب میکنم گزینه ها رو بعد در آخر چک میکنیم که هر دو چک شده باشند
    // اتریبیوت اسم رو هم انتخاب میکنیم چون مطمئن شویم که دیتایی که داره میره هر دو برای نوشیدنی مورد علاقه هستند
    cy.get("@fav-drink-coffee").uncheck().should("not.be.checked");
    cy.log("دو گزینه Water و Coffee را انتخاب کنید");
    cy.get("@fav-drink-coffee").should("have.value", "Coffee").check();
    cy.get('[data-cy="drink1"][name="fav_drink"]')
      .as("fav-drink-water")
      .should("have.value", "Water")
      .check();
    cy.get("@fav-drink-coffee").should("be.checked");
    cy.get("@fav-drink-water").should("be.checked");
    cy.log("در بخش «رنگ مورد علاقه»، گزینه Yellow را انتخاب کنید");
    cy.get('[data-cy="color3"][name="fav_color"]')
      .should("have.value", "Yellow")
      .check()
      .should("be.checked");
    cy.log("از لیست کشویی «Do you like automation?» گزینه Yes را انتخاب کنید");
    //Reason : برای اینکه مطمئن شویم دیتایی که به سمت بک اند میرود با فرانت یکی است
    cy.get('[data-cy="automation"]').select("Yes").should("have.value", "yes");
    cy.log("فیلد Email را با یک ایمیل معتبر تکمیل کنید");
    //Reason : پایدارترین سلکتور
    cy.get('[data-cy="email"]')
      .type("faeze.chenani@gmail.com")
      .should("have.value", "faeze.chenani@gmail.com");
    cy.log("در فیلد Message یک متن دلخواه وارد کنید");
    //Reason : پایدارترین سلکتور
    cy.get('[data-cy="message"]')
      .type("I am a qa intern")
      .should("have.value", "I am a qa intern");
    cy.log("روی دکمه Submit کلیک کنید");
    //Reason : پایدارترین سلکتور
    cy.get('[data-cy="submit-btn"]').click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.eq("Message received!");
    });
  });
});
