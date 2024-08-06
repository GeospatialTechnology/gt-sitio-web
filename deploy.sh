#!/bin/bash

# Configurar variables
DATE_TAG=$(TZ='America/La_Paz' date +'%y-%m-%d_%H-%M')
IMAGE_NAME='geotecsrl/gt-sitio-web-staging'

# Configurar credenciales de Docker Hub
DOCKER_USERNAME='geospatialtechnology.srl@gmail.com'
DOCKER_PASSWORD='G30t3c.srl'

# Crear archivo docker-compose
echo "Creando archivo docker-compose..."
cat <<EOF > docker-compose-staging.yml
version: '3'
services:
  gt-sitio-web-staging:
    image: ${IMAGE_NAME}:latest
    ports:
      - "5157:80"
    container_name: gt-sitio-web-staging
    restart: unless-stopped
EOF

# Detener y eliminar contenedores existentes
echo "Deteniendo y eliminando contenedores existentes..."
docker compose -f docker-compose-staging.yml down

# Eliminar imágenes antiguas
echo "Eliminando imágenes antiguas..."
docker rmi -f ${IMAGE_NAME}:latest || true
docker rmi -f ${IMAGE_NAME}:${DATE_TAG} || true

# Construir y subir imagen Docker
echo "Construyendo y subiendo imagen Docker..."
cd /home/ubuntu/dockers/gt-sitio-web-staging
docker build -t ${IMAGE_NAME}:latest .
docker tag ${IMAGE_NAME}:latest ${IMAGE_NAME}:${DATE_TAG}

# Iniciar sesión en Docker Hub
echo "Iniciando sesión en Docker Hub..."
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Subir imágenes a Docker Hub
echo "Subiendo imágenes a Docker Hub..."
docker push ${IMAGE_NAME}:latest
docker push ${IMAGE_NAME}:${DATE_TAG}
docker rmi ${IMAGE_NAME}:latest
docker rmi ${IMAGE_NAME}:${DATE_TAG}

# Desplegar con Docker Compose
echo "Desplegando con Docker Compose..."

docker compose -f docker-compose-staging.yml up -d --build

# Limpiar carpeta de Docker y temporales
#echo "Limpiando carpeta de Docker y temporales..."
#rm -rf /home/ubuntu/dockers/gt-sitio-web-staging/*

echo "Despliegue completo."