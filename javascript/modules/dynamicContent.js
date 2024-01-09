import getDataFromAPI from "./api.js";
import generateHeaderSection from "./header.js";

export default function generateDynamicContent() {
  const data = getDataFromAPI();

  generateHeaderSection(data.headerData);
}
