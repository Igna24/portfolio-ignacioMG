import getDataFromAPI from "./api.js";
import generateHeaderSection from "./header.js";
import generateHeroSection from "./hero.js";
import generateWhyMeSection from "./whyMe.js";

export default function generateDynamicContent() {
  const data = getDataFromAPI();

  generateHeaderSection(data.headerData);
  generateHeroSection(data.heroData);
  generateWhyMeSection(data.whyMeData);
}
