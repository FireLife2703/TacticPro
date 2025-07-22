const fs = require("fs");
const xml2js = require("xml2js");

const xml = fs.readFileSync("public/products.xml", "utf8");

xml2js.parseString(xml, (err, result) => {
  if (err) throw err;

  const items = result.yml_catalog.shop[0].offers[0].offer.map((offer) => ({
    id: offer.$.id,
    name: offer.name[0],
    price: offer.price[0],
    description: offer.description?.[0] || "",
    picture: offer.picture?.[0] || "",
    vendor: offer.vendor?.[0] || "",
    available: offer.$.available === "true",
  }));

  fs.writeFileSync("src/products.json", JSON.stringify(items, null, 2), "utf8");
  console.log("✅ Products converted and saved as src/products.json");
});
