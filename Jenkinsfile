pipeline {
    agent any

    tools {dockerTool "Docker"}

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t myapp:latest .' 
            }
        }

    }
}