import "reflect-metadata"
import path from "path"
import { DataSource, DataSourceOptions } from "typeorm"
import "dotenv/config"

const setDataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}");
    const migrationsPath: string = path.join(
        __dirname,
        "./migrations/**.{js,ts}"
    );

    const nodeEnv = process.env.NODE_ENV

    if (nodeEnv === "production") {
        return {
            type: "postgres",
            url: process.env.DATABASE_URL,
            entities: [entitiesPath],
            migrations: [migrationsPath],
        }
    }

    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath],
        };
    }

    return {
        type: "postgres",
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT!),
        database: process.env.DB_NAME,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath],
      };
}

const dataSourceConfig = setDataSourceConfig();
export default new DataSource(dataSourceConfig);

// const AppDataSource = new DataSource(

//     process.env.NODE_ENV === "test" ?
//     {
//         type: "sqlite",
//         database: ":memory:",
//         synchronize: true,
//         entities: ["src/entities/*.ts"]
//     } :
//     {
//         type: "postgres",
//         host: process.env.DB_HOST,
//         port: 5432,
//         username: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         logging: true,
//         synchronize: false,
//         entities: ['src/entities/*.ts'],
//         migrations: ['src/migrations/*.ts']
//     }
// )

// export default AppDataSource