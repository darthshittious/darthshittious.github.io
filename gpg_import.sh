#!/bin/bash
email=${1//./dot}
email=${email//*@varunj.me/root}
email=${email//@/at}
curl https://varunj.me/pgp/${email}.asc | gpg --import
if [[ $? -ne 0 ]]; then
    echo -e "\nThat doesn't look like one of my emails"
fi

