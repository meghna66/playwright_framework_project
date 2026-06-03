---
name: raise-pr
description: Describe what this skill does and when to use it. Include keywords that help agents identify relevant tasks.
---

<!-- Tip: Use /create-skill in chat to generate content with agent assistance -->


Define the functionality provided by this skill, including detailed instructions and examples

.github/skills/raise-pr/
├── SKILL.md                          (Main skill definition)
├── scripts/
│   ├── create-pr.sh                  (PR creation with validation)
│   └── validate-pr.sh                (Pre-flight checks)
└── references/
    ├── QUICKSTART.md                 (5-minute getting started)
    ├── REQUIREMENTS.md               (Setup & installation)
    ├── EXAMPLES.md                   (Real-world scenarios)
    ├── FAQ.md                        (Q&A & advanced topics)
    └── TROUBLESHOOTING.md            (Common issues & fixes)


    ---
    name: raise-pr
    description: 'Automatically create and raise GitHub pull requests. Use when you want to create PRs with specified source and target branches, validate commits, and automate PR creation.'
    argument-hint: 'source-branch target-branch [pr-title]'
    user-invocable: true
    ---
    
    # Raise GitHub PR
    
    Automate the process of creating pull requests for your GitHub repository with commit validation and branch checking.
    
    ## When to Use
    
    - Create PRs programmatically
    - Validate commits before raising a PR
    - Check source and target branches exist
    - Automate PR creation with custom title and description
    
    ## Procedure
    
    ### Step 1: Validate Your Setup
    Run the validation script to ensure all prerequisites are met:
    ```bash
    ./scripts/validate-pr.sh <source-branch> <target-branch>
    ```
    
    This checks:
    - ✅ Git repository
    - ✅ Branch existence
    - ✅ Commits available
    - ✅ GitHub CLI installed
    - ✅ GitHub authentication
    - ✅ Repository permissions
    
    See [REQUIREMENTS.md](./references/REQUIREMENTS.md) for setup instructions.
    
    ### Step 2: Make Your Changes
    Create and commit your changes on the source branch:
    ```bash
    git checkout -b <source-branch>
    # Make code changes
    git add .
    git commit -m "Your commit message"
    git push -u origin <source-branch>
    ```
    
    ### Step 3: Create the Pull Request
    Use the create-pr script to automate PR creation:
    ```bash
    ./scripts/create-pr.sh <source-branch> <target-branch> "<pr-title>" "[pr-body]"
    ```
    
    Or invoke directly via the skill:
    ```bash
    /raise-pr <source-branch> <target-branch> "<pr-title>"
    ```
    
    ### Step 4: Review and Merge
    The script displays the PR URL. Visit GitHub to:
    - Review changes
    - Request reviewers
    - Monitor CI/CD checks
    - Merge when approved
    
    ## Parameters
    
    - **source-branch** (required): The branch containing your changes (e.g., `feature/new-login`)
    - **target-branch** (required): The target branch to merge into (e.g., `main`, `develop`)
    - **pr-title** (optional): Title for the pull request. Auto-generated if not provided
    
    ## Prerequisites
    
    - Git repository initialized and configured
    - GitHub CLI (`gh`) installed and authenticated with appropriate repository permissions
    - Source branch with commits ready for PR
    - Both source and target branches must exist on the remote
    
    See [REQUIREMENTS.md](./references/REQUIREMENTS.md) for detailed setup instructions.
    
    ## Scripts
    
    The skill includes helper scripts in the `scripts/` folder:
    
    - **[create-pr.sh](./scripts/create-pr.sh)**: Main script that validates and creates PRs with detailed output
    - **[validate-pr.sh](./scripts/validate-pr.sh)**: Validation-only script to check setup before PR creation
    
    ## Documentation
    
    Comprehensive reference documentation is available:
    
    | Document | Purpose |
    |----------|---------|
    | [QUICKSTART.md](./references/QUICKSTART.md) | Get started in 5 minutes |
    | [REQUIREMENTS.md](./references/REQUIREMENTS.md) | Installation and setup guide |
    | [EXAMPLES.md](./references/EXAMPLES.md) | Real-world usage scenarios and workflows |
    | [FAQ.md](./references/FAQ.md) | Frequently asked questions |
    | [TROUBLESHOOTING.md](./references/TROUBLESHOOTING.md) | Common issues and solutions |
    
    ## Output
    
    The skill will:
    - ✅ Validate repository, branches, and commits
    - ✅ Verify GitHub CLI authentication and permissions
    - ✅ Create the PR with the specified title
    - ✅ Display the PR URL and details for verification
    - ✅ Show commit history and PR information
    
    ## Example Usage
    
    ```bash
    /raise-pr feature/login-form main "Add user authentication"
    ```
    
    Creates a PR from `feature/login-form` to `main` with title "Add user authentication".
    
    Or use the validation and creation scripts directly:
    
    ```bash
    # Validate setup first
    ./scripts/validate-pr.sh feature/login-form main
    
    # Then create the PR
    ./scripts/create-pr.sh feature/login-form main "Add user authentication"
    ```
    
    ## Next Steps
    
    - 📖 [Quick Start Guide](./references/QUICKSTART.md) - Get started in 5 minutes
    - 🔧 [Setup Instructions](./references/REQUIREMENTS.md) - Install prerequisites
    - 📚 [Usage Examples](./references/EXAMPLES.md) - Learn from real scenarios
    - ❓ [FAQ](./references/FAQ.md) - Common questions
    - 🐛 [Troubleshooting](./references/TROUBLESHOOTING.md) - Solve problems
    