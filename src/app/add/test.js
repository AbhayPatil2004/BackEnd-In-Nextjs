'use server'
async function registerUser(FormData) {
    console.log(FormData)
    return { message: "Got the Data" }
}

export default registerUser