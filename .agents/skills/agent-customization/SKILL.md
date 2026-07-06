---
name: agent-customization
description: Workflow guidance for creating, updating, reviewing, fixing, and debugging VS Code agent customization files and related assets.
license: MIT
metadata:
  author: GitHub Copilot
  version: "1.0.0"
  date: July 2026
  abstract: Practical workflow for building VS Code agent customization files (.instructions.md, .prompt.md, .agent.md, SKILL.md, copilot-instructions.md, AGENTS.md) with scope decisions, file selection, validation checks, and common anti-patterns.
---

# Agent Customization

This skill helps you create and maintain VS Code agent customization assets for the current workspace.

## When to Use

- Creating workspace-scoped agent customization files in `.agents/skills/`, `.github/`, or root
- Choosing between instructions, prompts, hooks, custom agents, and skills
- Fixing invalid YAML frontmatter or missing `description` metadata
- Reviewing or documenting task-specific workflows for team use

## Workflow

1. Determine scope
   - Workspace-specific: use `.agents/skills/`, `.github/`, or project root
   - User-specific: use `{{VSCODE_USER_PROMPTS_FOLDER}}/`

2. Choose the right primitive
   - Instructions: broad guidance applied by default or via `applyTo`
   - Prompts: single focused task with optional parameters
   - Skills: multi-step workflows or reusable templates
   - Custom Agents: staged workflows, context isolation, or tool restrictions
   - Hooks: deterministic lifecycle enforcement via shell commands

3. Create the asset
   - Use the proper path and naming convention
   - Include valid YAML frontmatter
   - Provide a clear `description` that matches likely trigger phrases

4. Validate
   - Confirm the file exists in the correct folder
   - Check YAML syntax and indentation
   - Verify `description` is meaningful and unambiguous
   - Avoid overly broad `applyTo: "**"` unless absolutely necessary

5. Iterate
   - Improve the skill as requirements become clearer
   - Add examples, prompts, or references as needed
   - If the workflow is unclear, ask the user for the expected outcome and scope

## Quality Criteria

- `description` explains when and why the skill applies
- `name` is stable and consistent with the folder name
- Frontmatter is valid YAML with `---` delimiters
- Guidance is actionable and avoids generic statements
- The workflow includes decision points, not just a single linear list

## Common Pitfalls

- Missing or weak `description` prevents discovery
- Unescaped colons, tabs, and invalid YAML break parsing
- `applyTo: "**"` can overload context and slow the agent
- File type confusion: choose a skill for workflows and a prompt for single-task inputs

## Example Prompts

- "Create a workspace skill for editing project-specific customization files"
- "Help me choose whether to use a prompt, instruction, or custom agent for this workflow"
- "Review this skill file and fix any YAML frontmatter issues"
