import client from "../lib/contentful";

export async function getProducts() {
  const res = await client.getEntries({ content_type: "products" });
  return res.items;
}