pipeline {

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