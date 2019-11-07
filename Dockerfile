FROM nginx:alpine
COPY ./_site /usr/share/nginx/html
COPY ./default.com.conf /etc/nginx/conf.d/default.conf
