pipeline {
    agent any

    tools {docker "Docker"}

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t myapp:latest .' 
            }
        }

    }
}