import { AppDataSource } from "./data-source"
import { Post } from "./entity/Post"
import { PostComment } from "./entity/PostComment"
import { Profile } from "./entity/Profile"
import { Tag } from "./entity/Tag"
import { User } from "./entity/User"
import { Gender } from "./enum/gender.enum"

AppDataSource.initialize().then(async () => {
    // await createUser({
    //     username: 'John Doe',
    //     gender: Gender.MALE,
    //     profile: {
    //         displayName: 'John Doe',
    //         gender: Gender.MALE,
    //         address: {
    //             province: 'Bangkok',
    //             district: 'Sukhumvit',
    //             subDistrict: 'Sukhumvit',
    //         }
    //     }
    // })

    await getUser(3)
}).catch(error => console.log(error))

// User Section
async function createUser(user: any) {
    const userRepository = AppDataSource.getRepository(User)
    const savedUser = await userRepository.save(user)
    console.log('User saved', savedUser.id)
}
async function getUser(id: number) {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOne({where: {id}})
    console.log('User', user)
}
async function getUserList() {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    console.log('Users', users)
}
async function updateUser(id: number, user: any) {
    const userRepository = AppDataSource.getRepository(User)
    const updatedUser = await userRepository.update(id, user)
    console.log('User updated', updatedUser)
}
async function deleteUser(id: number) {
    const userRepository = AppDataSource.getRepository(User)
    const deletedUser = await userRepository.delete(id)
    console.log('User deleted', deletedUser)
}












