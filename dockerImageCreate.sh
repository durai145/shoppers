VERSION_MINOR=$(bash $PWD/genSeq.sh SHOPPERS_MINOR)
sudo docker build --tag ganga/shoppers.$VERSION_MINOR .
docker tag  ganga/shoppers.$VERSION_MINOR  us.icr.io/ganga/shoppers:shoppers.$VERSION_MINOR
sudo docker images

