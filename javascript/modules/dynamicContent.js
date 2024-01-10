import getDataFromAPI from "./api.js";
import generateHeaderSection from "./header.js";
import generateHeroSection from "./hero.js";
import generateWhyMeSection from "./whyMe.js";
import generateAchievementSection from "./achievement.js";
import generateSkillsSection from "./skills.js";
import generateInterestsSection from "./interest.js";
import generateContactSection from "./contact.js";

export default function generateDynamicContent() {
  const data = getDataFromAPI();

  generateHeaderSection(data.headerData);
  generateHeroSection(data.heroData);
  generateWhyMeSection(data.whyMeData);
  generateAchievementSection(data.achievementData);
  generateSkillsSection(data.skillsData);
  generateInterestsSection(data.interestsData);
  generateContactSection(data.contactData);
}
