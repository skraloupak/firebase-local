# Firebase Local 
 - https://github.com/urish/firebase-server

Useful for emulating the Firebase server in tests.
This is enough to make firebase admin work if you don't want to check any rules and don't upload any rule file. 
!!IMPORTANT!! auth().createCustomToken() dosn't work

# Install on Travis via docker
Check file `.travis.yml`
  - set dist to trusty `dist: trusty`
  - install docker-compose in `before_install`
    - curl -sSL "https://get.docker.com/gpg" | sudo -E apt-key add -
    - echo "deb https://apt.dockerproject.org/repo debian-stretch main" | sudo tee -a /etc/apt/sources.list
    - sudo apt-get update
    - sudo apt-get install docker-engine
    - sudo pip install docker-compose
  - start docker in `before_script`
    - docker-compose -f docker-compose.yml up -d  (if you want use another docker file for travis, just create new file for example: `docker-compose.travis.yml` and change it `docker-compose.yml` to `docker-compose.travis.yml`)
  - shutdown docker in `after_script`
    - docker-compose down

# Running the project
1. `npm i` - to install node.js packages
2. `./bin/infra-start` - initialize docker with firebase server
3. `npm start`
