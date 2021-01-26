pipeline {

    environment { 
        registry = "mfarmer5102/test" 
        registryCredential = 'dockerhub_id' 
        dockerImage = '' 
    }
    
    agent any

    stages {
        stage('Building our image') { 
            steps { 
                script { 
                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
                }
            } 
        }
    }

}