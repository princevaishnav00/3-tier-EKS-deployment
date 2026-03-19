pipeline {
    agent any 

    stages{


        stage('clone code'){
            steps{
                git 'https://github.com/princevaishnav00/3-tier-EKS-deployment'
                echo 'code clone succesfully '
            }
        }

        stage('build code'){
            steps{
                echo 'build stage running'
            }
        }

        stage('push the code '){
            steps{
                echo "coming "
            }
        }

        stage('Deploy'){
            steps{
                 echo "coming soon"
            }
        }

    }


}