## GitHub Copilot Shortcuts in Visual Studio Code

## Keyboard shortcuts for macOS

| Action                                                        | Shortcut            | Command name                               |
| ------------------------------------------------------------- | ------------------- | ------------------------------------------ |
| Accept an inline suggestion                                   | Tab                 | `editor.action.inlineSuggest.commit`       |
| Dismiss an inline suggestion                                  | Esc                 | `editor.action.inlineSuggest.hide`         |
| Show next inline suggestion                                   | Option (⌥)+]        | `editor.action.inlineSuggest.showNext`     |
| Show previous inline suggestion                               | Option (⌥)+[        | `editor.action.inlineSuggest.showPrevious` |
| Trigger inline suggestion                                     | Option (⌥)+\        | `editor.action.inlineSuggest.trigger`      |
| Open GitHub Copilot (additional suggestions in separate pane) | Ctrl+Return         | `github.copilot.generate`                  |
| Toggle GitHub Copilot on/off                                  | No default shortcut | `github.copilot.toggleCopilot`             |

## Keyboard shortcuts for Windows

| Action                                                        | Shortcut            | Command name                               |
| ------------------------------------------------------------- | ------------------- | ------------------------------------------ |
| Accept an inline suggestion                                   | Tab                 | `editor.action.inlineSuggest.commit`       |
| Dismiss an inline suggestion                                  | Esc                 | `editor.action.inlineSuggest.hide`         |
| Show next inline suggestion                                   | Alt+]               | `editor.action.inlineSuggest.showNext`     |
| Show previous inline suggestion                               | Alt+[               | `editor.action.inlineSuggest.showPrevious` |
| Trigger inline suggestion                                     | Alt+\               | `editor.action.inlineSuggest.trigger`      |
| Open GitHub Copilot (additional suggestions in separate pane) | Ctrl+Enter          | `github.copilot.generate`                  |
| Toggle GitHub Copilot on/off                                  | No default shortcut | `github.copilot.toggleCopilot`             |

## Keyboard shortcuts for Linux

| Action                                                        | Shortcut            | Command name                               |
| ------------------------------------------------------------- | ------------------- | ------------------------------------------ |
| Accept an inline suggestion                                   | Tab                 | `editor.action.inlineSuggest.commit`       |
| Dismiss an inline suggestion                                  | Esc                 | `editor.action.inlineSuggest.hide`         |
| Show next inline suggestion                                   | Alt+]               | `editor.action.inlineSuggest.showNext`     |
| Show previous inline suggestion                               | Alt+[               | `editor.action.inlineSuggest.showPrevious` |
| Trigger inline suggestion                                     | Alt+\               | `editor.action.inlineSuggest.trigger`      |
| Open GitHub Copilot (additional suggestions in separate pane) | Ctrl+Enter          | `github.copilot.generate`                  |
| Toggle GitHub Copilot on/off                                  | No default shortcut | `github.copilot.toggleCopilot`             |

## GitHub Copilot Shortcuts in Visual Studio 2022

### Windows default keyboard shortcuts

| Action                          | Shortcut     | Command name                           |
| ------------------------------- | ------------ | -------------------------------------- |
| Show next inline suggestion     | `Alt+.`      | `Tools.Nextsuggestion`                 |
| Show previous inline suggestion | `Alt+,`      | `Tools.Previoussuggestion`             |
| Trigger inline suggestion       | `Ctrl+Alt+\` | `Edit.Copilot.TriggerInlineSuggestion` |

## GitHub Copilot Shortcuts in IntelliJ IDEA

- **macOS**

  - Accept: `Tab`
  - Dismiss: `Esc`
  - Next Inline Suggestion: `Option (⌥)` or `Alt+]`
  - Previous Inline Suggestion: `Option (⌥)` or `Alt+[`
  - Inline Suggestion: `Option (⌥)+\`
  - Additional Suggestions: `Option (⌥)` or `Alt+Return`

- **Windows and Linux**
  - Accept: `Tab`
  - Dismiss: `Esc`
  - Next Inline Suggestion: `Alt+]`
  - Previous Inline Suggestion: `Alt+[`
  - Inline Suggestion: `Alt+\`
  - Additional Suggestions: `Alt+Enter`

# Temporarily Disabling GitHub Copilot Code Complete

## Visual Studio Code (VS Code)

### MacOS and Windows:

1. Open the command palette with `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (MacOS).
2. Type in `GitHub Copilot: Enable/Disable` and select it.
3. This toggles Copilot's Code Complete off and on.

Documentation: [Settings in VS Code](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot?tool=vscode)

## Visual Studio 2022

### Windows:

1. Go to `Tools` > `Options` in the menu bar.
2. Navigate to `IntelliCode`.
3. Uncheck the `Show suggestions from GitHub Copilot` option to disable the Code Complete.
4. To re-enable, check the box again.

Documentation: [Settings in Visual Studio](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot?tool=visualstudio#enabling-or-disabling-github-copilot)

## IntelliJ IDEA

### MacOS and Windows:

1. Press `Shift` twice to bring up the Search Everywhere dialog.
2. Type `Actions` and then select `Find Action`.
3. Search for `Manage GitHub Copilot Settings`.
4. To disable, uncheck `Enable GitHub Copilot`.
5. To re-enable, check it again.

Documentation: [Settings in IntelliJ IDEA](https://docs.github.com/en/copilot/using-github-copilot/getting-started-with-github-copilot?tool=jetbrains)

> Please note that features and availability may change, and it's always good to refer to the latest documentation or release notes for up-to-date guidance.
