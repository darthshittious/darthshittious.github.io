#!/bin/bash
email=${1//*@varunj.me/root}
email=${email//./dot}
email=${email//@/at}
echo $email
curl https://varunj.me/pgp/${email}.asc | gpg --import
if [[ $? -ne 0 ]]; then
    echo -e "\nThat doesn't look like one of my emails"
fi

