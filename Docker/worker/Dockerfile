# Étape de build
FROM maven:3.9.9-eclipse-temurin-24-alpine AS builder

WORKDIR /build

COPY pom.xml ./
RUN mvn dependency:resolve

COPY src ./src
RUN mvn package

# Étape d'exécution
FROM eclipse-temurin:24-jre-alpine

WORKDIR /app

COPY --from=builder /build/target/worker-jar-with-dependencies.jar .

CMD ["java", "-jar", "worker-jar-with-dependencies.jar"]
