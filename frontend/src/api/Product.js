
export const getAllProducts = async () => {
    const response = await fetch("http://localhost:8080/products")
    return response.json();
}