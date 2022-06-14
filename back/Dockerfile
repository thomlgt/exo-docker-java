FROM maven:3.8.5-openjdk-11 as build
WORKDIR /app
COPY . .
RUN mvn package

FROM openjdk:11
WORKDIR /app
COPY --from=build /app/target .
# ARG JAR_FILE=*.jar
# COPY ${JAR_FILE} app.jar
CMD ["java","-jar","docker-backend-0.0.1-SNAPSHOT.jar"]