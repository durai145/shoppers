VERSION_MINOR=$(bash $PWD/genSeq.sh SHOPPERS_MINOR)
sudo docker build --tag durai145/shoppers.$VERSION_MINOR .
docker tag  durai145/shoppers.$VERSION_MINOR  us.icr.io/ganga/shoppers:shoppers.$VERSION_MINOR
sudo docker images

