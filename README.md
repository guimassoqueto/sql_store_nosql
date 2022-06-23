# sql_store_nosql

1- Install Docker and run:
`sudo docker run -d --network 127.0.0.1 --name mongodb -e MONGO_INITDB_ROOT_USERNAME=sa -e MONGO_INITDB_ROOT_PASSWORD=admin mongo`

2 - Check the available networks
`sudo docker network ls`

3- Test MongoDB connection:
`docker exec -it mongodb mongosh`
