
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "fullName" VARCHAR (100),
    "city" VARCHAR (100),
    "region" VARCHAR (100) ,
    "graduation_date" DATE ,
    "needs_ride" BOOLEAN ,
    "provide_ride" BOOLEAN,
    "lat" NUMBER,
    "long" NUMBER
);


