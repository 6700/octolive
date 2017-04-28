eval `ssh-agent -s`
mkdir -p ~/.ssh
ls ~/.ssh
openssl aes-256-cbc -K $encrypted_e8ec75924147_key -iv $encrypted_e8ec75924147_iv -in github_deploy_key.enc -out ~/.ssh/id_rsa -d
mv github_deploy_key.pub ~/.ssh/id_rsa.pub
chmod 600 ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa.pub
ssh-add ~/.ssh/id_rsa
GIT_SSH_COMMAND="ssh -i ~/,ssh/id_rsa"
git config --global user.email "build-travis@6700.com.ar"
git config --global user.name "Travis CI"
git remote set-url origin git@github.com:6700/octolive.git


yarn install -s
yarn run deploy