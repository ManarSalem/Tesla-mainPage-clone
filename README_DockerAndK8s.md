
# Applying this project in Docker and Kubernetes(K8s)

## we assume that you have 2 things before strating this tutuorial:
   - You installed docker in your system.
   - You installed minikube in your system.
   - Clone this project or any web project you want.
  
 ## Docker steps 
  
  ### 1. Create dockerFile 
   ![dockerFile](image.jpg)
   
    As you see, the dockerFile contains only 2 lines. The first line reffered the base image of any web page, why nginx? beacuse it is the server      that can run web containers. the second line we copy all resourcses(including codes and images) to the container.
  
  ### 2. Build your docker image from the dockerFile
    open you terminal/ cmd then type this command: docker build -t imagename:version (make sure of the path).
     ![imagecreation](image.jpg)
     Now your image is created so let push it to docker hub>
  ### 3. Push Image to docker Hub
   this link is helpful to show you how to push your image into your docker hub account [click](https://www.youtube.com/watch?v=EIHY_CY5J0k)
    
 ## K8s steps
 ### 1. Create Deployment.yaml file 
  The deployment file contains two parts: the deployment aOfnd service.
  
 image1
 image2
 
 ### 2. start your minikube and create the pod
  To start minikube, just write the command:minikube start 
  to create the pod(deployment and service) write the command : kubectl apply -f deployment.yaml.
  image 1
  image2
  
  ### 3. Run 
    now run the pod by writing command: minikube service nameOfService 
 
