# READ THIS
We have two branches in our repo, master and develop; both are protected.

Here's how it works:
 1. Clone the repo to your local working directory `git clone https://github.com/tmlstevens/detect-and-play`
 2. Then `git checkout -b myLocalBranch origin/develop` (name your local branch whatever you want)<br>
 this command will: 1) create your local branch, 2) switch/checkout your local branch, and 3) cause your local branch to track changes that occur our remote branch: develop, which is displayed as 'origin/develop' if you enter `git branch -a` on the command line.<br><br>
When you have work that's ready to go into develop:
3. See what you've changed: `git status`
4. Assuming you want to stage everything that you've created/changed: `git add -A`
5. Commit your work: `git commit -m 'enter your commit message'`
6. Push your local branch to github: `git push -u origin myLocalBranch`
7. Login github
8. Navigate to https://github.com/tmlstevens/detect-and-play/compare/develop...myLocalBranch (make sure you enter the name of your branch)
This URL will show you your changes, relative to develop
9. Click the green 'create pull request' button when you're ready to create the pull request
10. Wait for one of us to review and merge your changes into develop
11. When work has been merged into develop on github, get the changes in your local repo and working branch: <br>
   a) update your local repo with everything on github (origin) `git fetch origin` <br>
   b) make sure your local branch is checked out `git checkout myLocalBranch`<br>
   c) update your local branch with origin/develop `git rebase origin/develop`
