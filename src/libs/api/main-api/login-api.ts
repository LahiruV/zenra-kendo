import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { LoginAdminPayload, LoginAdminResponse } from "@zenra/model";
import { admin_login } from "@zenra/controller";
import { ApiBaseUrl } from "@zenra/configs";

export const AdminLogin = () => {
    const { mutate: adminLoginMutate } = useMutation({
        mutationFn: async (payload: LoginAdminPayload) => {
            const response = await axios.post<LoginAdminResponse>(`${ApiBaseUrl}${admin_login}`, payload);
            return response.data;
        },
        onSuccess: (response: LoginAdminResponse) => response,
        onError: (err: AxiosError) => err,
    });
    return {
        adminLoginMutate,
    };
};
