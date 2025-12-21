pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        IMAGE_NAME = 'angular-app'
        CONTAINER_NAME = 'angular-app'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh '''
                  npm install
                '''
            }
        }

        stage('Build Angular (Production)') {
            steps {
                sh '''
                  npm run build -- --configuration=production
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                  docker build -t $IMAGE_NAME:latest .
                '''
            }
        }

        stage('Deploy Angular Container') {
            steps {
                sh '''
                  docker stop $CONTAINER_NAME || true
                  docker rm $CONTAINER_NAME || true

                  docker run -d \
                    --name $CONTAINER_NAME \
                    --restart unless-stopped \
                    -p 80:80 \
                    $IMAGE_NAME:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'Angular deployment completed successfully'
        }
        failure {
            echo 'Angular deployment failed'
        }
    }
}


