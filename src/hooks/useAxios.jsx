import { useMemo } from "react";
import api from "../services/axios";
import { useAuth } from "../contexts/AuthContext";

export const useAxios = () => {
    const { accessToken } = useAuth();

    return useMemo(() => {
        const instance = api;

        instance.interceptors.request.use(
            (config) => {
                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        return instance;
    }, [accessToken]);
};
