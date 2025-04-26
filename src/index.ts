import { AppDataSource } from "./data-source"
import { Post } from "./entity/Post"
import { Profile } from "./entity/Profile"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    // createUser()
    // createPost()
    deleteUser(1)
    // deletePost(3)

}).catch(error => console.log(error))

async function createUser() {
    const userRepository = await AppDataSource.getRepository(User)
    const user = new User()
    user.username = "cat6"
    user.profile = new Profile()
    user.profile.gender = "Male"

    userRepository.save(user)
}

async function createPost() {
    const postRepository = await AppDataSource.getRepository(Post)
    const post = new Post()
    post.title = "Post 1"
    post.content = "Content 1"
    post.user = await getUserById(3)
    postRepository.save(post)
}

async function update() {
    const userRepository = await AppDataSource.getRepository(User)

}

async function getUserById(id: number) {
    const userRepository = await AppDataSource.getRepository(User)
    return userRepository.findOneBy({ id })
}

async function deleteUser(id: number) {
    const userRepository = await AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ id })
    userRepository.remove(user)
}

async function deletePost(id: number) {
    const postRepository = await AppDataSource.getRepository(Post)
    const post = await postRepository.findOneBy({ id })
    postRepository.remove(post)
}