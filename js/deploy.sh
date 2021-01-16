#!/bin/bash

/bin/rm ./.DS_Store
cd ../../
/usr/bin/tar \
	--exclude='./academy/.git*' \
	--exclude='*.DS_Store' \
	--exclude='./academy/js/.babelrc' \
	--exclude='./academy/js/.eslintrc.js' \
	--exclude='./academy/js/.prettierrc.js' \
	--exclude='./academy/js/.gitignore' \
	--exclude='./academy/js/.storybook' \
	--exclude='./academy/js/deploy_rollbar_maps.js' \
	--exclude='./academy/js/deploy.sh' \
	--exclude='./academy/js/node_modules' \
	--exclude='./academy/js/package-lock.json' \
	--exclude='./academy/js/package.json' \
	--exclude='./academy/js/sentryTokenBlank.js' \
	--exclude='./academy/js/sentryToken.js' \
	--exclude='./academy/js/src' \
	--exclude='./academy/js/tsconfig.json' \
	--exclude='./academy/js/webpack.config.js' \
	-czvf academy.tar.gz ./academy
/usr/bin/scp academy.tar.gz cnnitouch@academy.cnntoolbox.com:/home/cnnitouch

#/bin/rm ./academy.tar.gz

#/usr/bin/ssh -tt cnnitouch@academy.cnntoolbox.com << EOF
#/usr/bin/sudo bash
#cd /tmp
#cd /var/lib/docker/volumes/server_moodle_data/_data/theme
#/bin/rm -rf academy
#/bin/mv /home/cnnitouch/academy.tar.gz ./
#/bin/tar -xzvf academy.tar.gz
#/bin/rm academy.tar.gz
#exit
#exit
#EOF
