import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))

async function createUser() {
    // noop
}

async function createPost() {
    // noop
}

async function update() {
    // noop
}

async function getUserById(id: number) {
    // noop
}

async function deleteUser(id: number) {
    // noop
}

async function deletePost(id: number) {
    // noop
}