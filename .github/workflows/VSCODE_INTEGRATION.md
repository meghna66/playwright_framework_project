# VS Code Copilot Chat Integration Guide

This skill is designed to work with VS Code Copilot Chat. Here's how to set it up and use it.

## Installation Steps

### 1. Locate Your Skills Directory

VS Code Copilot Chat stores skills in a platform-specific location:

**macOS:**
```
~/Library/Application Support/Code/User/globalStorage/GitHub.Copilot/skills
```

**Windows:**
```
%APPDATA%\Code\User\globalStorage\GitHub.Copilot\skills
```

**Linux:**
```
~/.config/Code/User/globalStorage/GitHub.Copilot/skills
```

### 2. Copy the Skill

Copy the entire `github-pr-creator` folder to your skills directory.

### 3. Set Up Environment Variable

**macOS/Linux:**

Add to your shell profile (`.bashrc`, `.zshrc`, etc.):
```bash
export GITHUB_TOKEN="your_personal_access_token_here"
```

Then reload your shell:
```bash
source ~/.bashrc  # or ~/.zshrc
```

**Windows (PowerShell):**

Set the permanent environment variable:
```powershell
[System.Environment]::SetEnvironmentVariable('GITHUB_TOKEN', 'your_token_here', 'User')
```

**Windows (CMD):**
```cmd
setx GITHUB_TOKEN "your_token_here"
```

### 4. Restart VS Code

Close and reopen VS Code to apply the environment variable change.

### 5. Test the Installation

Open VS Code and go to the Copilot Chat panel. Type:
```
create PR from test-branch in myorg/myrepo
```

If set up correctly, Copilot Chat should recognize this as a `github-pr-creator` skill request.

## Using in VS Code Copilot Chat

### In the Chat Interface

Simply type your PR creation request in the chat:

```
create PR from feature-login in myorg/myrepo
```

Copilot Chat will:
1. Recognize this as a `github-pr-creator` skill request
2. Pass it to the skill's SKILL.md instructions
3. Execute the appropriate script
4. Return the result with a link to your new PR

### Natural Language Variations

The skill is triggered by these phrases:
- "create PR from..."
- "raise a PR from..."
- "open a pull request from..."
- "make a PR from..."
- Any variation mentioning GitHub PR creation

### Seeing Skill Usage

The chat will show indicators when a skill is being used:
- You'll see the skill name: `github-pr-creator`
- Output will show the PR creation process
- Final result includes the GitHub PR link

## Troubleshooting

### Skill Not Being Recognized

1. **Verify skill is in correct directory:**
   ```
   ls ~/Library/Application\ Support/Code/User/globalStorage/GitHub.Copilot/skills/github-pr-creator/
   ```

2. **Check SKILL.md exists:**
   ```
   ls ~/Library/Application\ Support/Code/User/globalStorage/GitHub.Copilot/skills/github-pr-creator/SKILL.md
   ```

3. **Restart VS Code completely** (not just the terminal)

### GITHUB_TOKEN Not Being Found

1. **Verify the variable is set:**
   ```bash
   echo $GITHUB_TOKEN
   ```

2. **Check VS Code inherited the environment:**
   - Open a new terminal in VS Code (`Ctrl+\``)
   - Run: `echo $GITHUB_TOKEN`
   - Should show your token

3. **If not showing:**
   - Make sure you added it to the correct profile file
   - Reload that file: `source ~/.bashrc`
   - Restart VS Code completely

### Permission Denied Errors

If you see "permission denied" when running the script:

1. Ensure Python is installed:
   ```bash
   python3 --version
   ```

2. Make scripts executable:
   ```bash
   chmod +x ~/Library/Application\ Support/Code/User/globalStorage/GitHub.Copilot/skills/github-pr-creator/scripts/create_pr.py
   ```

3. Verify Python can be found:
   ```bash
   which python3
   ```

### Script Not Found Errors

The skill expects the Python script at:
```
./scripts/create_pr.py
```

Ensure the file structure is:
```
github-pr-creator/
├── SKILL.md
├── scripts/
│   └── create_pr.py
├── README.md
└── test_cases.json
```

## Advanced Usage

### Custom Python Path

If Python is not in your PATH, you can modify the SKILL.md to use the full path:

```bash
/usr/local/bin/python3 scripts/create_pr.py
```

### Running from Different Directories

The skill assumes it's run from the skill directory. If you have issues, the SKILL.md can be updated to use absolute paths.

### Debugging

To see detailed output during skill execution:

1. Open VS Code terminal
2. Set verbose output:
   ```bash
   export DEBUG=1
   ```

3. Try the skill again in chat
4. Check the terminal for detailed logs

## Security Considerations

- **Token Storage:** Your GITHUB_TOKEN is stored locally in your shell environment, not in VS Code
- **Token Scope:** Use only the minimum required scopes (repo, workflow)
- **Token Rotation:** Regenerate your token regularly
- **Sharing:** Never commit your token to version control or share it
- **Monitoring:** Check GitHub for any suspicious activity on your account

## File Structure

```
github-pr-creator/
├── SKILL.md                    # Main skill definition
├── README.md                   # Usage documentation
├── VSCODE_INTEGRATION.md       # This file
├── test_cases.json            # Test scenarios
├── test_runner.py             # Test orchestration script
└── scripts/
    └── create_pr.py           # GitHub API interaction script
```

## Support & Updates

To update the skill:
1. Back up the current version
2. Copy the new version to the skills directory
3. Restart VS Code

To uninstall:
1. Remove the `github-pr-creator` folder from the skills directory
2. Restart VS Code

## Next Steps

1. Follow the Setup instructions above
2. Read the [README.md](README.md) for usage examples
3. Try creating your first PR using the chat
4. Check [test_cases.json](test_cases.json) for more examples
