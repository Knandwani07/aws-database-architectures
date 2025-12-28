#!/bin/bash
#
# setup-mongosh-docdb.sh
#
# This script installs MongoDB Shell (mongosh)
# and downloads the Amazon DocumentDB TLS certificate
# on an Amazon Linux EC2 instance.

echo "Updating system packages..."
sudo yum update -y

echo "Downloading MongoDB Shell (mongosh)..."
wget https://downloads.mongodb.com/compass/mongodb-mongosh-1.10.0.x86_64.rpm

echo "Installing MongoDB Shell..."
sudo yum install -y mongodb-mongosh-1.10.0.x86_64.rpm

echo "Verifying mongosh installation..."
mongosh --version

echo "Downloading Amazon DocumentDB CA certificate..."
wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem

echo "Setup completed successfully."
echo "You can now connect to Amazon DocumentDB using mongosh."
