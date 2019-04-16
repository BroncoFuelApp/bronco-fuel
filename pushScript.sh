	# checks if branch has something pending
function parse_git_dirty() {
  git diff --quiet --ignore-submodules HEAD 2>/dev/null;
}

# gets the current git branch
function parse_git_branch() {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/\1$(parse_git_dirty)/"
}

# get last commit hash prepended with @ (i.e. @8a323d0)
function parse_git_hash() {
  git rev-parse --short HEAD 2> /dev/null
}
	
	GIT_BRANCH=$(parse_git_branch)
	GIT_HASH=$(parse_git_hash)
	message=$1
	git add .
	git commit -m "($message) branch:$GIT_BRANCH hash:$GIT_HASH"
	git push origin $GIT_BRANCH
	git status
	

