import { Setting, Notice } from "obsidian";
import FileOrganizer from "./index";

export class CustomizationTab {
  private plugin: FileOrganizer;
  private containerEl: HTMLElement;

  constructor(containerEl: HTMLElement, plugin: FileOrganizer) {
    this.containerEl = containerEl;
    this.plugin = plugin;
  }

  create(): HTMLElement {
    const customizationTabContent = this.containerEl.createEl("div", {
      cls: "setting-tab-content",
    });

    new Setting(customizationTabContent)
      .setName("FileOrganizer logs")
      .setDesc(
        "Allows you to keep track of the changes made by file Organizer."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.useLogs)
          .onChange(async (value) => {
            this.plugin.settings.useLogs = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(customizationTabContent)
      .setName("Rename Instructions")
      .setDesc(
        "Provide instructions for renaming the document based on its content."
      )
      .addTextArea((text) =>
        text
          .setValue(this.plugin.settings.renameInstructions)
          .onChange(async (value) => {
            this.plugin.settings.renameInstructions = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(customizationTabContent)
      .setName("Similar tags")
      .setDesc("Append similar tags to processed files.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.useSimilarTags)
          .onChange(async (value) => {
            this.plugin.settings.useSimilarTags = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(customizationTabContent)
      .setName("Add similar tags in frontmatter")
      .setDesc("Use frontmatter to add similar tags to processed files.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.useSimilarTagsInFrontmatter)
          .onChange(async (value) => {
            this.plugin.settings.useSimilarTagsInFrontmatter = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(customizationTabContent)
      .setName("Processed File Tag")
      .setDesc("Specify the tag to be added to processed files.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.processedTag)
          .onChange(async (value) => {
            this.plugin.settings.processedTag = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(customizationTabContent)
      .setName("Experimental features")
      .setHeading();

    new Setting(customizationTabContent)
      .setName("Enable Alias Generation")
      .setDesc("Enable the generation of aliases in the assistant sidebar.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableAliasGeneration)
          .onChange(async (value) => {
            this.plugin.settings.enableAliasGeneration = value;
            await this.plugin.saveSettings();
          })
      );
    new Setting(customizationTabContent)
      .setName("Enable Similar Files")
      .setDesc("Enable the display of similar files in the assistant sidebar.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableSimilarFiles)
          .onChange(async (value) => {
            this.plugin.settings.enableSimilarFiles = value;
            await this.plugin.saveSettings();
          })
      );
    new Setting(customizationTabContent)
      .setName("Enable Atomic Notes")
      .setDesc(
        "Enable the generation of atomic notes in the assistant sidebar."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableAtomicNotes)
          .onChange(async (value) => {
            this.plugin.settings.enableAtomicNotes = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(customizationTabContent)
      .setName("Enable Screenpipe Integration")
      .setDesc("Enable Screenpipe integration for productivity analysis and meeting summaries.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableScreenpipe)
          .onChange(async (value) => {
            this.plugin.settings.enableScreenpipe = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(customizationTabContent)
      .setName("Custom Formatting")
      .setHeading();

    new Setting(customizationTabContent)
      .setName("Enable Document Auto-Formatting")
      .setDesc(
        "Automatically format documents processed through the inbox when content matches a category of your AI templates."
      )
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.enableDocumentClassification)
          .onChange(async (value) => {
            if (!value) {
              this.plugin.settings.enableDocumentClassification = false;
              await this.plugin.saveSettings();
              return;
            }

            this.plugin.settings.enableDocumentClassification = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(customizationTabContent)
      .setName("Document Type Configuration")
      .setDesc(
        "To specify the document type for AI formatting, please add a file inside the template folder of File Organizer. Each file should be named according to the document type it represents (e.g., 'workout'). The content of each file should be the prompt that will be applied to the formatting. Additionally, you can access and manage these document types directly through the AI sidebar in the application."
      )
      .setDisabled(true);

    return customizationTabContent;
  }
}
