# Dockerfile
# Usa la imagen base de Apache
FROM tomcat
COPY . /usr/local/apache2/htdocs/
EXPOSE 3000

