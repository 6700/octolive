declare -r SSH_FILE="$(mktemp -u $HOME/.ssh/XXXXX)"
mv github_deploy_key $SSH_FILE
chmod 600 "$SSH_FILE" \
         && printf "%s\n" \
              "Host github.com" \
              "  IdentityFile $SSH_FILE" \
              "  LogLevel ERROR" >> ~/.ssh/config
git config --global user.email "build-travis@6700.com.ar"
git config --global user.name "Travis CI"
yarn install
yarn run deploy