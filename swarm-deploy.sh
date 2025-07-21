

echo "🔄 Initializing Docker Swarm..."
docker swarm init

echo "🐳 Deploying stack..."
docker stack deploy -c docker-compose.yml mini-hospital

echo "✅ Deployment complete!"
docker stack ls
docker service ls
