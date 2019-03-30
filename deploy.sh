
set -e

npm run docs:build

cd docs/.vuepress/dist

git pull https://github.com/leCapsimRy/blog.git master

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/leCapsimRy/blog.git master:gh-pages

cd -