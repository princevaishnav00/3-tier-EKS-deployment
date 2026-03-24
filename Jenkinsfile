pipeline {
    agent any 


    environment {
        IMAGE_TAG = "${BUILD_NUMBER}"
    }


    stages{

        
        stage('Clone Code'){
            steps{
                git branch: 'main', url: 'https://github.com/princevaishnav00/3-tier-EKS-deployment.git'
                echo 'code clone successfully'
            }
        }

        stage('Build Docker Image'){
            steps{
                sh ' docker build -t frontend:$IMAGE_TAG ./app/frontend'
                sh ' docker build -t backend:$IMAGE_TAG ./app/backend'
                echo 'build stage running'
            }
        }


        stage('Login to ECR'){
            steps{
                sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws '
                echo 'Login Successfully '
            }
        }

        stage('Push to ECR'){
            steps{
                echo " Tagging images..."

                sh 'docker tag frontend:$IMAGE_TAG public.ecr.aws/r3z4b9j4/3-tier-frontend:$IMAGE_TAG '
                sh 'docker tag backend:$IMAGE_TAG public.ecr.aws/r3z4b9j4/3-tier-backend:$IMAGE_TAG '

                echo "Pushing images..."

                sh 'docker push public.ecr.aws/r3z4b9j4/3-tier-frontend:$IMAGE_TAG'
                sh 'docker push public.ecr.aws/r3z4b9j4/3-tier-backend:$IMAGE_TAG'
            
            }
        }

        stage('Deploy to EKS'){
             steps{
                
            sh ' aws eks --region ap-south-1 update-kubeconfig --name 3-tier-cluster '

            
            echo "Deploying Files..."
            sh 'kubectl apply -f k8s_manifests/'
            sh 'kubectl apply -f k8s_manifests/mongo/'



            echo "update images"
            sh 'kubectl set image deployment/api api=public.ecr.aws/r3z4b9j4/3-tier-backend:$IMAGE_TAG -n workshop'
            
            sh 'kubectl set image deployment/frontend frontend=public.ecr.aws/r3z4b9j4/3-tier-frontend:$IMAGE_TAG -n workshop'


            
          
                 
            
           }
        }

    }
}