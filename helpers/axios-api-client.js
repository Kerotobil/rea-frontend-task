import { axiosClient } from './axios-instance';

export async function getBooks() {
  const { data } = await axiosClient.get('books');
  return data;
}
export async function getBook(id) {
  const { data } = await axiosClient.get(`books/${id}`);
  return data;
}

export async function addBook(name, author, price) {
  const { data } = await axiosClient.post(`books`, { name, author, price });
  return data;
}
export async function updateBook(id, name, author, price) {
  const { data } = await axiosClient.put(`books/${id}`, { name, author, price });
  return data;
}
export async function deleteBook(id) {
  const { data } = await axiosClient.delete(`books/${id}`);
  return data;
}
