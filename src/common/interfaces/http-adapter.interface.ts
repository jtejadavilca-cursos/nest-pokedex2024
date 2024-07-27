export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}

export const HttpAdapter = Symbol('HttpAdapter');