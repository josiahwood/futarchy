#!/bin/bash

# pyethereum
cd ~
git clone https://github.com/ethereum/pyethereum/
cd pyethereum
sudo python setup.py install

# eth-testrpc
sudo pip install eth-testrpc

# nodejs v5.0.0
nvm use v5.0.0

# truffle
sudo npm install -g truffle

# update gas
sudo sed -i s/3141592/314159265/g /home/ubuntu/.nvm/versions/node/v5.0.0/lib/node_modules/truffle/lib/contracts.es6