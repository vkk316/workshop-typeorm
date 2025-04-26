import { AppDataSource } from "./data-source"
import { Post } from "./entity/Post"
import { Profile } from "./entity/Profile"
import { Tag } from "./entity/Tag"
import { User } from "./entity/User"
import { Gender } from "./enum/gender.enum"

AppDataSource.initialize().then(async () => {
    // await createUser()
    // await createTagList()
    await createPost()
}).catch(error => console.log(error))

async function createUser() {
    const user = new User()
    user.username = 'john.farmer'
    user.profile = new Profile()

    user.profile.displayName = 'John Farmer'
    user.profile.gender = Gender.MALE
    user.profile.address = {
        subDistrict: 'Sukhumvit',
        district: 'Bangkok',
        province: 'Bangkok',
    }

    const savedUser = await AppDataSource.manager.save(user)
    console.log('User saved', savedUser.id)
    console.log('User', await getUser(savedUser.id))
}

async function deleteUser() {
    const user = await getUser(1)
    await AppDataSource.manager.remove(user)
    // console.log('User deleted', user?.id)
}

async function getUser(id: number) {
    const user = await AppDataSource.manager.findOne(User, {where: {id}, relations: ['profile']})
    return user
}

async function createProfile() {
    const profile = new Profile()
    profile.displayName = 'John Farmer'
    profile.gender = Gender.MALE
    profile.address = {
        subDistrict: 'Sukhumvit',
        district: 'Bangkok',
        province: 'Bangkok',
    }
    profile.cost = 1000.8237
    
    const savedProfile = await AppDataSource.manager.save(profile)
    console.log('Profile saved', savedProfile.id)

    console.log('Profile', await getProfile(savedProfile.id))
}

async function getProfile(id: number) {
    const profile = await AppDataSource.manager.findBy(Profile, {id})
    return profile
}

async function createTagList() {
    const tag1 = new Tag()
    tag1.name = 'Tag 1'

    const tag2 = new Tag()
    tag2.name = 'Tag 2'

    await AppDataSource.manager.save([tag1, tag2])
    
    
}

async function getTag(id: number) {
    const tag = await AppDataSource.manager.findOne(Tag, {where: {id}})
    return tag
}

async function createPost() {

    const user = await getUser(2)

    const post = new Post()
    post.title = 'My first post'
    post.content = 'This is my first post'
    post.postedBy = user
    post.tags = [await getTag(1), await getTag(2)]
    const savedPost = await AppDataSource.manager.save(post)    
    console.log('Post saved', savedPost.id)

    console.log('Post', await getPost(savedPost.id))
}

async function getPost(id: number) {
    const post = await AppDataSource.manager.findBy(Post, {id})
    return post
}