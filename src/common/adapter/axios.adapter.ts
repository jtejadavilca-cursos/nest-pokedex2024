import axios, { AxiosInstance } from "axios";
import { Injectable } from "@nestjs/common";
import { HttpAdapter } from 'src/common/interfaces/http-adapter.interface';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
    private readonly axiosInstance: AxiosInstance = axios;

    get<T>(url: string): Promise<T> {
        return this.executeOperation(()=> this.axiosInstance.get<T>(url))
    }

    post<T>(url: string, data): Promise<T> {
        return this.executeOperation(()=> this.axiosInstance.post<T>(url, data))
    }

  
    async executeOperation(operation) {
        try {
            const response = await operation();
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}