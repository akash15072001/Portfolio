pipeline {
    agent any

    environment {
        DOCKER_HUB_REPO = 'akash15072003/portfolio'
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials' // Replace with your Jenkins credential ID
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    bat 'docker build -t %DOCKER_HUB_REPO%:latest .'
                }
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    // Debug: Check Docker version and login status
                    bat 'docker --version'
                    bat 'docker login -u %DOCKER_HUB_USERNAME% -p %DOCKER_HUB_PASSWORD%'
                    withDockerRegistry([credentialsId: "$DOCKER_HUB_CREDENTIALS", url: 'https://index.docker.io/v1/']) {
                        bat 'docker push %DOCKER_HUB_REPO%:latest'
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
