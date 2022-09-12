export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ENV: "test" | "dev" | "prod";
            REACT_APP_ASSETS: string;
        }
    }
}
