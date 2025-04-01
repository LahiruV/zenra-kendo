const TOKEN_KEY = 'auth_token';

export const AuthService = {
    setToken(token: string): void {
        localStorage.setItem(TOKEN_KEY, token);
    },

    getToken(): string | null {
        return localStorage.getItem(TOKEN_KEY);
    },

    clearToken(): void {
        localStorage.removeItem(TOKEN_KEY);
    },

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
};
