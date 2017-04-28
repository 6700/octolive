ls
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_rsa_example"
chmod 600 "$SSH_FILE" 
git config --global user.email "build-travis@6700.com.ar"
git config --global user.name "Travis CI"
yarn install
yarn run deploy