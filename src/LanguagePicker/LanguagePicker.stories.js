import React from "react";
import LanguagePicker from "./LanguagePicker";
import { withKnobs, array, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Language Picker",
  decorators: [withKnobs],
};

export const basic = () => (
  <LanguagePicker
    languages={["English", "Chinese"]}
    selectedLanguage="English"
    onSelectLanguage={action("language-selected")}
  ></LanguagePicker>
);

export const withMoreLanguages = () => (
  <LanguagePicker
    languages={["English", "French", "German", "Chinese"]}
    selectedLanguage="English"
    onSelectLanguage={action("language-selected")}
  ></LanguagePicker>
);

export const dynamicValues = () => {
  const languages = array("Languages", ["English", "Chinese"]);
  const selected = text("Selected Language", "English");

  return (
    <LanguagePicker
      languages={languages}
      selectedLanguage={selected}
      onSelectLanguage={action("language-selected")}
    ></LanguagePicker>
  );
};
