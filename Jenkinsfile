pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/your-repo/angular-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                sh 'npm run build -- --configuration=production'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t angular-app:latest .'
            }
        }

        stage('Deploy Angular') {
            steps {
                sh '''
                docker stop angular-app || true
                docker rm angular-app || true

                docker run -d \
                  --name angular-app \
                  --network app-network \
                  -p 80:80 \
                  angular-app:latest
                '''
            }
        }
    }
}
