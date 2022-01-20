
export const getAllProducts = async () => {
    const response = await fetch("http://localhost:8080/products")
    return response.json();
}

export const getProductById = async ({ queryKey }) => {
    const response = await fetch(`http://localhost:8080/product/${queryKey}`)
    return response.json();
}