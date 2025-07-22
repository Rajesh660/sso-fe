import axios from "axios";
import type { Method, AxiosRequestConfig } from "axios";

interface RequestOptions {
  method: Method;
  url: string;
  data?: any;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  withCredentials?: boolean;
}

export async function apiRequest<T = any>(options: RequestOptions): Promise<T> {
  try {
    const config: AxiosRequestConfig = {
      method: options.method,
      url: options.url,
      data: options.data,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      params: options.params,
      withCredentials: options.withCredentials ?? true,
    };

    const response = await axios(config);
    return response.data as T;
  } catch (error: any) {
    console.error("API Error:", error);
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    }
    throw error;
  }
}
