export interface IProcessEnv {
    MONGO_URI: string;
    PORT: string;
}

declare global {
    namespace NodeJS {
        export interface ProcessEnv extends IProcessEnv {
            NODE_ENV: 'develpment' | 'production';
        }
    }
}
