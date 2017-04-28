mkdir ~/ssh
openssl aes-256-cbc -K $encrypted_e8ec75924147_key -iv $encrypted_e8ec75924147_iv -in github_deploy_key.enc -out ~/ssh/github_deploy_key -d
ls
GIT_SSH_COMMAND="ssh -i ~/ssh/github_deploy_key"
chmod 600 ~/ssh/github_deploy_key
git config --global user.email "build-travis@6700.com.ar"
git config --global user.name "Travis CI"

# yarn install
# yarn run deploy