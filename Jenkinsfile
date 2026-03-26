pipeline {
    agent any 


    environment {
        IMAGE_TAG = "${BUILD_NUMBER}"
        ECR_FRONTEND = "public.ecr.aws/r3z4b9j4/3-tier-frontend"
        ECR_BACKEND = "public.ecr.aws/r3z4b9j4/3-tier-backend"
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
                sh 'docker build -t frontend:$IMAGE_TAG ./app/frontend'
                sh 'docker build -t backend:$IMAGE_TAG ./app/backend'
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
                echo " Tagging images.."

                sh 'docker tag frontend:$IMAGE_TAG $ECR_FRONTEND:$IMAGE_TAG '
                sh 'docker tag backend:$IMAGE_TAG $ECR_BACKEND:$IMAGE_TAG '

                echo "Pushing images..."

                sh 'docker push $ECR_FRONTEND:$IMAGE_TAG'
                sh 'docker push $ECR_BACKEND:$IMAGE_TAG'

                echo 'Images pushed to ECR'
            
            }
        }

        stage(' Update manifest files'){
            steps { withCredentials([usernamePassword(credentialsId: 'githubcred', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_PASS')]) 
            
            {
                
            sh '''
            rm -rf manifests
            
            git clone  https://$GIT_USER:$GIT_PASS@github.com/princevaishnav00/3-tier-k8s-manifests.git manifests

            cd manifests/k8s/

            # Update backend image
            sed -i "s|image: .*backend.*|image: public.ecr.aws/r3z4b9j4/3-tier-backend:${BUILD_NUMBER}|g" api-deployment.yaml


            # Update frontend image
            sed -i "s|image: .*frontend.*|image: public.ecr.aws/r3z4b9j4/3-tier-frontend:${BUILD_NUMBER}|g" frontend-deployment.yaml
              

            # changes 
            git add .
            git commit -m "Update images to $IMAGE_TAG"
            git push https://$GIT_USER:$GIT_PASS@github.com/princevaishnav00/3-tier-k8s-manifests.git


            '''
            }
                  
           }
        }

    }
}
