pipeline {

    environment {
        imagename = "mfarmer5102/jenkins-docker-test"
        dockerImage = ''
    }

    agent any

    stages {

        stage('Build') {
            steps{
                script {
                    dockerImage = docker.build imagename
                }
            }
        }

    }
}