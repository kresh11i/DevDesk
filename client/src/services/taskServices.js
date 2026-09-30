
import api from "./api";

export async function getAllTasks(currentPage, limit) {
    const response = await api.get("/tasks", {
        params: { page: currentPage, limit: limit }
    });
    return response.data;
}

export async function createTasks(taskData) {
    const response = await api.post("/tasks", taskData);
    return response.data;
}
export async function getTaskById(id) {
    const response = await api.get(`/tasks/${id}`);
    return response.data;
}
export async function updateTask(id, taskData) {
    const response = await api.patch(`/tasks/${id}`, taskData);
    return response.data;
}
export async function deleteTask(id) {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
}

export async function updateTaskStatus(id, status) {
    const response = await api.patch(`/tasks/${id}/status`, { status });
    return response.data;
}