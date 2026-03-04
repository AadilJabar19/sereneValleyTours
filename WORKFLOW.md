# Git Workflow Guide

## Branch Strategy

- **main** - Production-ready code (protected)
- **dev** - Development branch (both collaborators work here)
- **feature branches** - Individual features (optional)

## Daily Workflow

### 1. Start Working (Every Time)
```bash
git checkout dev
git pull origin dev
```

### 2. Make Your Changes
```bash
# Work on your code
# Test locally with: cd frontend && npm run dev
```

### 3. Commit and Push
```bash
git add .
git commit -m "Your descriptive message"
git push origin dev
```

### 4. Merge to Main (After Review)
```bash
# On GitHub: Create Pull Request from dev → main
# After approval, merge the PR
```

## Handling Conflicts

If you get conflicts when pulling:
```bash
git pull origin dev
# Fix conflicts in your editor
git add .
git commit -m "Resolve merge conflicts"
git push origin dev
```

## Quick Commands

```bash
# Check current branch
git branch

# See what changed
git status

# Discard local changes
git checkout -- .

# Update dev with main changes
git checkout dev
git merge main
git push origin dev
```

## Rules

1. ✅ Always pull before starting work
2. ✅ Commit frequently with clear messages
3. ✅ Push to `dev` branch only
4. ✅ Never push directly to `main`
5. ✅ Use Pull Requests to merge dev → main
