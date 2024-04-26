FROM mongo:4.4.6-bionic as mongoclient

FROM mongo:4.4.6-bionic

COPY --from=mongoclient /usr/bin/mongo /usr/bin/mongo

COPY src/sh/migration.sh /docker-entrypoint-initdb.d/

RUN chmod +x /docker-entrypoint-initdb.d/migration.sh
