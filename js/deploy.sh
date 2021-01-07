#!/bin/bash

/bin/rm ./.DS_Store
cd ../../
/usr/bin/tar \
	--exclude='./.git*' \
	--exclude='./.DS_Store' \
	--exclude='./js/.babelrc' \
	--exclude='./js/.eslintrc.js' \
	--exclude='./js/.prettierrc.js' \
	--exclude='./js/.gitignore' \
	--exclude='./js/.storybook' \
	--exclude='./js/deploy_rollbar_maps.js' \
	--exclude='./js/deploy.sh' \
	--exclude='./js/node_modules' \
	--exclude='./js/package-lock.json' \
	--exclude='./js/package.json' \
	--exclude='./js/rollbarToken_blank.js' \
	--exclude='./js/rollbarToken.js' \
	--exclude='./js/src' \
	--exclude='./js/tsconfig.json' \
	--exclude='./js/webpack.config.js' \
	-czvf academy.tar.gz ./academy
/usr/bin/scp academy.tar.gz cnnitouch@academy.cnntoolbox.com:/home/cnnitouch
/bin/rm ./academy.tar.gz

/usr/bin/ssh -tt cnnitouch@academy.cnntoolbox.com << EOF
/usr/bin/sudo bash
cd /tmp
cd /var/lib/docker/volumes/server_moodle_data/_data/theme
/bin/rm -rf academy
/bin/mv /home/cnnitouch/academy.tar.gz ./
/bin/tar -xzvf academy.tar.gz
/bin/rm academy.tar.gz
exit
exit
EOF
