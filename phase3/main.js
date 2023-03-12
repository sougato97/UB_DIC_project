const mainPanel = document.querySelector(".main-panel");
const buyBtn = mainPanel.querySelector("#buy-btn");

const subPanel = document.querySelector(".sub-panel");
const cartProducts = subPanel.querySelector(".products");
const cartTotal = subPanel.querySelector(".total");
const suggested = subPanel.querySelector(".suggested-products");

let allProducts = [];
const arr = [];
let products = [];

class CustomSelect {
  constructor(originalSelect) {
    this.originalSelect = originalSelect;
    this.originalOptions = Array.from(this.originalSelect.querySelectorAll("option"));

    this.customSelect = document.createElement("div");
    this.customSelect.classList.add("select");

    this.originalOptions.forEach((optionElement) => {
      const itemElement = document.createElement("div");

      itemElement.classList.add("select__item");
      itemElement.textContent = optionElement.textContent;
      this.customSelect.appendChild(itemElement);

      if (optionElement.selected) {
        this._select(itemElement);
      }

      itemElement.addEventListener("click", () => {
        if (
          this.originalSelect.multiple &&
          itemElement.classList.contains("select__item--selected")
        ) {
          console.log("Trigger");
          this._deselect(itemElement);
        } else {
          this._select(itemElement);
        }
      });
    });

    this.originalSelect.insertAdjacentElement("afterend", this.customSelect);
    this.originalSelect.style.display = "none";

    // products, their price and their respective recommendations
    allProducts = this.originalOptions.map((option) => {
      if (option.value === "ROSES REGENCY TEACUP AND SAUCER") {
        return {
          name: option.value,
          price: 2.95,
          related: "PINK REGENCY TEACUP AND SAUCER",
        };
      }
      if (option.value === "GREEN REGENCY TEACUP AND SAUCER") {
        return {
          name: option.value,
          price: 2.95,
          related: "ROSES REGENCY TEACUP AND SAUCER",
        };
      }
      if (option.value === "PINK REGENCY TEACUP AND SAUCER") {
        return {
          name: option.value,
          price: 2.95,
          related: "ROSES REGENCY TEACUP AND SAUCER",
        };
      }
      if (option.value === "GARDENERS KNEELING PAD CUP OF TEA") {
        return {
          name: option.value,
          price: 1.45,
          related: "GARDENERS KNEELING PAD KEEP CALM",
        };
      }
      if (option.value === "GARDENERS KNEELING PAD KEEP CALM") {
        return {
          name: option.value,
          price: 1.65,
          related: "GARDENERS KNEELING PAD CUP OF TEA",
        };
      }
      if (option.value === "DOLLY GIRL LUNCH BOX") {
        return {
          name: option.value,
          price: 1.95,
          related: "'SPACEBOY LUNCH BOX",
        };
      }
      if (option.value === "SPACEBOY LUNCH BOX") {
        return {
          name: option.value,
          price: 1.95,
          related: "DOLLY GIRL LUNCH BOX",
        };
      }
      if (option.value === "ALARM CLOCK BAKELIKE PINK") {
        return {
          name: option.value,
          price: 3.75,
          related: "ALARM CLOCK BAKELIKE RED",
        };
      }
      if (option.value === "ALARM CLOCK BAKELIKE RED") {
        return {
          name: option.value,
          price: 4.13,
          related: "ALARM CLOCK BAKELIKE PINK",
        };
      }
    });

    !arr.length && buyBtn.setAttribute("disabled", null);
  }
  // Selecting items in the webpage
  _select(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);

    if (!this.originalSelect.multiple) {
      this.customSelect.querySelectorAll(".select__item").forEach((el) => {
        el.classList.remove("select__item--selected");
      });
    }

    this.originalOptions[index].selected = true;
    // console.log(this.originalSelect.querySelectorAll("option")[index].value);
    arr.push(this.originalSelect.querySelectorAll("option")[index].value);
    
    // products, their price and their respective recommendations
    products = arr.map((item) => {
      if (item === "ROSES REGENCY TEACUP AND SAUCER") {
        return {
          name: item,
          price: 2.95,
          related: "PINK REGENCY TEACUP AND SAUCER",
        };
      }

      if (item === "GREEN REGENCY TEACUP AND SAUCER") {
        return {
          name: item,
          price: 2.95,
          related: "ROSES REGENCY TEACUP AND SAUCER",
        };
      }

      if (item === "PINK REGENCY TEACUP AND SAUCER") {
        return {
          name: item,
          price: 2.95,
          related: "ROSES REGENCY TEACUP AND SAUCER",
        };
      }

      if (item === "GARDENERS KNEELING PAD CUP OF TEA") {
        return {
          name: item,
          price: 1.45,
          related: "GARDENERS KNEELING PAD KEEP CALM",
        };
      }

      if (item === "GARDENERS KNEELING PAD KEEP CALM") {
        return {
          name: item,
          price: 1.65,
          related: "GARDENERS KNEELING PAD CUP OF TEA",
        };
      }

      if (item === "DOLLY GIRL LUNCH BOX") {
        return {
          name: item,
          price: 1.95,
          related: "SPACEBOY LUNCH BOX",
        };
      }

      if (item === "SPACEBOY LUNCH BOX") {
        return {
          name: item,
          price: 1.95,
          related: "DOLLY GIRL LUNCH BOX",
        };
      }

      if (item === "ALARM CLOCK BAKELIKE PINK") {
        return {
          name: item,
          price: 3.75,
          related: "ALARM CLOCK BAKELIKE RED",
        };
      }

      if (item === "ALARM CLOCK BAKELIKE RED") {
        return {
          name: item,
          price: 4.13,
          related: "ALARM CLOCK BAKELIKE PINK"
        };
      }
    });

    itemElement.classList.add("select__item--selected");

    !arr.length ? buyBtn.setAttribute("disabled", null) : buyBtn.removeAttribute("disabled", null);
  }

  // Deselecting items in the webpage
  _deselect(itemElement) {
    const index = Array.from(this.customSelect.children).indexOf(itemElement);
    const filteredIndex = arr.findIndex(
      (item) => item === this.originalSelect.querySelectorAll("option")[index].value
    );

    this.originalSelect.querySelectorAll("option")[index].selected = false;
    itemElement.classList.remove("select__item--selected");

    if (filteredIndex > -1) arr.splice(filteredIndex, 1);

    !arr.length ? buyBtn.setAttribute("disabled", null) : buyBtn.removeAttribute("disabled", null);
  }
}

// invoke the above class
document.querySelectorAll(".custom-select").forEach((selectElement) => {
  new CustomSelect(selectElement);

  console.log(allProducts);
});

function sendDataToPython() {
  let total = 0;
  let suggestedProducts = [];

  if (!subPanel.classList.contains("hidden")) {
    subPanel.classList.add("hidden");
    mainPanel.classList.remove("hidden");
    return;
  }

  subPanel.classList.remove("hidden");
  mainPanel.classList.add("hidden");

  cartProducts.innerHTML = products.reduce(
    (domString, item, index) =>
      (domString += `<div>${index + 1}. ${item.name} - £${item.price}</div>`),
    ""
  );

  total = products.reduce((total, product) => (total += product.price), 0);
  cartTotal.innerHTML = `Total: £${total.toFixed(2)}`;

  // let total = 0;
  // for (let [key, value] of Object.entries(products)) {
  //   total += value.price;
  // }

  allProducts.forEach((product) => {
    products.forEach((prod) => {
      if (prod.related === product.name) suggestedProducts.push(product);
    });
  });

  suggestedProducts = [
    ...new Map(suggestedProducts.map((product) => [product.name, product])).values(),
  ];

  suggested.innerHTML = suggestedProducts.reduce(
    (domString, item, index) =>
      (domString += `<div>${index + 1}. ${item.name} - £${item.price}</div>`),
    ""
  );

  console.log(allProducts, products);
  console.log(suggestedProducts);
}

buyBtn.addEventListener("click", (ev) => sendDataToPython());
