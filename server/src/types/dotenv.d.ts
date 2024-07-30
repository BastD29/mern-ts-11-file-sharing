declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    ALLOWED_ORIGIN: string;
    MONGO_URI: string;

    // nodemailer
    EMAIL_HOST: string;
    EMAIL_PORT: number;
    EMAIL_AUTH_USER: string;
    EMAIL_AUTH_PASS: string;
    EMAIL_FROM: string;
    EMAIL_TO: string;
  }
}
