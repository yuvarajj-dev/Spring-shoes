const Base_URL = "http://localhost:8080";

async function apirequest(endpoints, options = {}) {
    const response = await fetch(`${Base_URL}${endpoints}`, options);
    const data = response.json();
    if (!response.ok) {
        throw new Error("Api request failed");
    }
    return data;
}

export async function userlogin(data) {
    return apirequest("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}

export async function usersignup(data) {
    return apirequest("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}

export async function user(data) {
    return apirequest("/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}

export async function getallproduct(pageNumber) {
    return apirequest(`/product/all?page=${pageNumber}`);
}

export async function getproductbyid(id) {
    return apirequest(`/product/${id}`);
}

export async function getproductbycategory(category) {
    return apirequest(`/product/category/${category}`);
}

export async function addtocart(data) {
    return apirequest("/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
}

export async function deletecart(id) {
    return apirequest(`/cart/delete/${id}`, {
        method: "POST"
    });
}

export async function getcart(userid) {
    return apirequest(`/cart?userid=${userid}`);
}