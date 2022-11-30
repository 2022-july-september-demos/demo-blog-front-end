const BASE_URL = 'http://localhost:7890';
/* Auth related functions */

export function getUser() {
    // return client.auth.user();
}

export async function signUpUser(email, password) {
    // return await client.auth.signUp({
    //     email,
    //     password,
    // });
}

export async function signInUser(email, password) {
    // return await client.auth.signIn({
    //     email,
    //     password,
    // });
}

export async function signOutUser() {
    // return await client.auth.signOut();
}

/* Data functions */

export async function fetchBlogs() {
    const resp = await fetch(`${BASE_URL}/api/v1/blogs`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        return data;
    } else {
        // eslint-disable-next-line no-console
        console.error(data.message);
    }
}
