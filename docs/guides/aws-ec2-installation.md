---
title: Installing JTL Reporter on AWS EC2
---

### Prerequisites
* AWS Account


### Preparation

* [Create a Linux EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)
* Connect to your instance via SSH 

#### Configure Docker  
        
Install [Docker on the host](https://docs.docker.com/engine/install/ubuntu/), this method outlines installation via [the convenience script](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script)

```
sudo apt-get update
sudo apt install docker-compose
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Add user to group docker 
```
sudo usermod -aG docker $USER
``` 
Verify Docker is up and running 
```
docker run hello-world
```
You should get an output like this: 
```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete 
Digest: sha256:80f31da1ac7b312ba29d65080fddf797dd76acfb870e677f390d5acba9741b17
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
```

#### Get JTL-reporter 

Get the .zip from Github
```
curl https://github.com/ludeknovy/jtl-reporter/archive/refs/heads/main.zip 
```
Unzip, cd into it, and run docker-compose 
```
cd jtl-reporter-main/
docker-compose up -d
```
You jtl should be running at <publicipv4:2020>