import { AppDataSource } from "./data-source"
import { Profile } from "./entity/Profile"
import { Gender } from "./enum/gender.enum"

AppDataSource.initialize().then(async () => {
    await createProfile()
}).catch(error => console.log(error))

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

