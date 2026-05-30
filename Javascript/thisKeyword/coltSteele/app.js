const conan = {
  name: "Conan",
  city: "LA",
  sing: function () {
    console.log("This is:", this);
    console.log(`${this.name} sing La La La`);
  },
};

const btn = document.querySelector("#btn-click-me");
btn.addEventListener("click", conan.sing.bind(conan));
btn.addEventListener("click", conan.sing.bind);
