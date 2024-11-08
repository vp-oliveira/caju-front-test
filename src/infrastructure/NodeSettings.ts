import dotenv from "dotenv";

export const { VITE_BASE_URL, VITE_API_MOCK_URL, VITE_API_URL }: any =
  dotenv.config().parsed;
