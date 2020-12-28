#!/bin/bash

/bin/rm ./.DS_Store
cd ../../
/usr/bin/tar --exclude='./.git' --exclude='./js/node_modules' --exclude='./js/src' -czvf academy.tar.gz ./academy
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
