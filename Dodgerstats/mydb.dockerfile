FROM postgres:10
ENV POSTGRES_USER transponster
ENV POSTGRES_PASSWORD password
ENV POSTGRES_DATABASE mydatabase
EXPOSE 5432
