import http from "../http-common";

const getAll = (page) => {
    return http.get("/products?page=" + page ?? 1);
};

const edit = id => {
    return http.get(`/products/${id}`);
};

const create = data => {
    return http.post("/products", data);
};

const update = (id, data) => {
    return http.put(`/products/${id}`, data);
};

const remove = id => {
    return http.delete(`/products/${id}`);
};

const removeAll = () => {
    return http.delete(`/products`);
};

const findByTitle = title => {
    return http.get(`/tutorials?title=${title}`);
};

const ProductService = {
    getAll,
    edit,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};

export default ProductService;