pipeline {
    agent any 

    stages{

        stage('Clone Code'){
            steps{
                git branch: 'main', url: 'https://github.com/princevaishnav00/3-tier-EKS-deployment.git'
                echo 'code clone successfully'
            }
        }

        stage('Build Docker Image'){
            steps{
                sh 'docker build -t frontend ./app/frontend'
                sh 'docker build -t backtend ./app/backend'
                echo 'build stage running'
            }
        }

        stage('Push Code'){
            steps{
                echo "coming"
            }
        }

        stage('Deploy'){
            steps{
                 echo "coming soon"
            }
        }

    }
}