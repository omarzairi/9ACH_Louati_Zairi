import Product from "../Models/ProductModel.js";
import fetch from "node-fetch";

async function getProds() {
  const prods = await fetch(
    "https://www.asos.com/api/product/search/v2/categories/3606?currency=USD&lang=en-GB&limit=2&offset=80&rowlength=3&store=ROW"
  );
  const data = await prods.json();
  console.log(data.categoryName);
  data.products.map((elem) => {
    elem.imageUrl = "https://" + elem.imageUrl;
    const prod = new Product({
      id: elem.id,
      name: elem.name,
      categId: 6992,
      categorie: data.categoryName,
      price: {
        current: {
          value: elem.price.current.value,
          text: elem.price.current.text,
        },
        prev: {
          value: elem.price.previous.value,
          text: elem.price.previous.text,
        },
      },
      isInStock: true,
      isSellingFast: elem.isSellingFast,
      dateCreation: new Date(),
      media: [
        { img: elem.imageUrl },
        {
          img: elem.imageUrl.slice(0, elem.imageUrl.indexOf("-1-") + 1) + "2",
        },
        {
          img: elem.imageUrl.slice(0, elem.imageUrl.indexOf("-1-") + 1) + "3",
        },
        {
          img: elem.imageUrl.slice(0, elem.imageUrl.indexOf("-1-") + 1) + "4",
        },
      ],
      brandName: elem.brandName,
      comments: [],
    });
    prod.save();
  });
}
export default getProds;
