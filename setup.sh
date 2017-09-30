echo "Removing current git association"
rm -rf .git

echo "Creating new git repository with current files"
git init
git add .
git reset setup.sh
git commit -am "clean three.js boilerplate commit"

echo "Self destructing file, setup.sh has been removed"
rm -- "$0"