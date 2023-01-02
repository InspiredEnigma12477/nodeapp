sudo su
yum update 
yum intsall git
yum install docker

systemcel status docker
systemctl enable docker
systemctl start docker
git clone https://github.com/InspiredEnigma12477/nodeapp.git
cd nodeapp
docker build -t nodeapp .
docker images
docker run -d -p 8000:6969 nodeapp
docker ps

docker kill hashcode
docker rmi name -f