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

        stage('Push to ECR'){
            steps{
               sh '''
                   echo "Logging into ECR Public..."

                   aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws

                   echo "Tagging images..."

                   docker tag frontend:$IMAGE_TAG public.ecr.aws/r3z4b9j4/3-tier-frontend:$IMAGE_TAG
                   docker tag backend:$IMAGE_TAG public.ecr.aws/r3z4b9j4/3-tier-backend:$IMAGE_TAG

                   echo "Pushing images..."

                   docker push public.ecr.aws/r3z4b9j4/3-tier-frontend:$IMAGE_TAG
                   docker push public.ecr.aws/r3z4b9j4/3-tier-backend:$IMAGE_TAG
                '''
            }
        }

        stage('Deploy to EKS'){
             steps{
                  sh '''
                  echo "Deploying Files..."
                  kubectl apply -f k8s_manifests/mongo/

                  kubectl apply -f k8s_manifests/
          
                 
                  '''
           }
        }

    }
}