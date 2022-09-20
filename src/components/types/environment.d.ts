export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ENV: "test" | "dev" | "prod";
            REACT_APP_ASSETS_URL: string;
            REACT_APP_COIN_INFO_URL: string;
        }
    }
}
