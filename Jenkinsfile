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
                    withCredentials([usernamePassword(credentialsId: "$DOCKER_HUB_CREDENTIALS", usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        bat 'docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD%'
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
