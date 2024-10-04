#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

push_addr="https://wkwbk:${GITHUB_TOKEN}@github.com/wkwbk/vuepress-theme-vdoing.git"
commit_info=$(date '+%F %H:%M:%S')
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages              # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

echo 'blog.lisir.me' >CNAME

git init
git config user.name "wkwbk"
git config user.email "lisir.me@outlook.com"
git add -A
git commit -m "Site updated: $commit_info"
git push -f $push_addr HEAD:$push_branch

cd -
rm -rf $dist_path
