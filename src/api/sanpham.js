import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (products) => {
    const url = `/products`;
    return instance.post(url, products);
}
export const update = (products) => {
    const url = `/products/${products.id}`;
    return instance.put(url, products);
}