pipeline {
  agent {
    docker {
      image 'ubuntu:latest'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t myapp:latest .'
      }
    }

  }
}