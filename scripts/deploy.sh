eval `ssh-agent -s`
ssh-add -L
mkdir -p ~/.ssh
ls ~/.ssh
openssl aes-256-cbc -K $encrypted_e8ec75924147_key -iv $encrypted_e8ec75924147_iv -in github_deploy_key.enc -out ~/.ssh/id_rsa -d
ssh-add ~/.ssh/id_rsa
ssh-add -L
GIT_SSH_COMMAND="ssh -i ~/,ssh/id_rsa"
mv github_deploy_key.pub ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa.pub
git config --global user.email "build-travis@6700.com.ar"
git config --global user.name "Travis CI"


yarn install -s
yarn run deploy