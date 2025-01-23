import axios from 'axios'

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTask = () => {
    return tasksApi.get('/')
}

export const createTask = (task) => {
    return tasksApi.post('/', task)
}

export const getTask = (id) => tasksApi.get(`/${id}/`)

export const deleteTask = (id) => tasksApi.delete(`/${id}/`);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);