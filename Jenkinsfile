pipeline {
    agent any

    stages {
        stage('Build Frontend') {
            steps {
                dir('src/frontend') {
                    sh 'docker build -t mini-frontend .'
                }
            }
        }
        stage('Build Backend') {
            steps {
                dir('src/backend') {
                    sh 'docker build -t mini-backend .'
                }
            }
        }
        stage('Deploy (Local Test)') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
