import "reflect-metadata"
import { DataSource } from "typeorm"
import * as path from "path";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "workshop",
    synchronize: true,
    logging: false,
    entities: [path.join(__dirname, "entity/**/*.{js,ts}")], // Wildcard pattern for entity files
    migrations: [path.join(__dirname, "migration/**/*.{js,ts}")],
    subscribers: [path.join(__dirname, "subscriber/**/*.{js,ts}")],
})
