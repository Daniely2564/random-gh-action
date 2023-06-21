git add .
git commit -m "update v1"
git tag -d v1
git push
git push --delete origin v1
git tag -a v1 -m "update v1 with fix"
git push --tags