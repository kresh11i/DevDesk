import api from "./api";

export async function getDashboardData() {
    const response = await api.get("/tasks/dashboard")
    return response.data;
}