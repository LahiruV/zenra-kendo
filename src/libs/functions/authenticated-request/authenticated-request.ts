import axios from 'axios';
import { ApiBaseUrl } from '@zenra/configs';
import { AuthService } from '@zenra/services';

const authenticatedRequest = axios.create({
    baseURL: ApiBaseUrl,
});

authenticatedRequest.interceptors.request.use(
    (config) => {
        const token = AuthService.getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const getAuthenticated = async (url: string, params = {}) => {
    return authenticatedRequest.get(url, { params });
};

export const postAuthenticated = async (url: string, data: Record<string, unknown>) => {
    return authenticatedRequest.post(url, data);
};
