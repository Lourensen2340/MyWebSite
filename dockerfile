FROM nginx:alpine

# Копируем кастомную конфигурацию
COPY nginx.conf /etc/nginx/nginx.conf

# Копируем файлы сайта
COPY . /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]