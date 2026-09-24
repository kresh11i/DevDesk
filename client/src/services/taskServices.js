
import api from "./api";

export async function getAllTasks() {
    const response = await api.get("/tasks");
    return response.data;
}

export async function createTasks(taskData) {
    const response = await api.post("/tasks",taskData);
    return response.data;
}
export async function getTaskById(id) {
    const response = await api.get(`/tasks/${id}`);
    return response.data;
}
export async function updateTask(id ,taskData){
    const response = await api.patch(`/tasks/${id}`,taskData);
    return response.data;
}