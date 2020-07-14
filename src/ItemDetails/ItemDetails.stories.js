import React from "react";
import ItemDetails from "./ItemDetails";

export default {
  title: "ItemDetails",
};

const basicItem = {
  nameEnglish: "Rice",
  nameChinese: "白饭",
  price: 5.5,
};

const languages = ["English", "Chinese"];

export const basic = () => {
  return <ItemDetails item={basicItem} languages={languages} currency="SGD"></ItemDetails>;
};

export const moreLanguages = () => {
  const moreLanguages = ["English", "Chinese", "Malay", "Tamil"];
  return <ItemDetails item={basicItem} languages={moreLanguages} currency="SGD"></ItemDetails>;
};

export const longValues = () => {
  const itemWithLongName = {
    ...basicItem,
    nameEnglish: "Really Really Really Really Really Long Long Long Name Instead Of Rice"
  }
  return <ItemDetails item={itemWithLongName} languages={languages} currency="SGD"></ItemDetails>;
};

export const currencySymbol = () => {
  return <ItemDetails item={basicItem} languages={languages} currency="$"></ItemDetails>;
};
