import { ILike } from "typeorm";
import { AppDataSource } from "./data-source";
import { Profile } from "./entity/Profile";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {

    // ถ้ายังไม่มี user ก็สร้าง user ก่อน ให้ uncommelnt บรรทัดล่าง
    // await createUserList(mockUser);
    
    // ลองทดสอบ list ข้อมูล โดยส่ง filter เข้าไป
    // ให้ uncommelnt บรรทัดล่าง ส่ง filter เข้าไปเพื่อค้นหา profile ที่มี gender เป็น MALE และ display name มีค่าเป็น Doe
    // await getProfileList({gender: Gender.MALE, displayName_ilike: "Doe"});

  })
  .catch((error) => console.log(error));

// User Section
async function createUser(user: any) {
  const userRepository = AppDataSource.getRepository(User);
  const savedUser = await userRepository.save(user);
  return savedUser?.id;
}

async function createUserList(userList: any[]) {
  const userRepository = AppDataSource.getRepository(User);
  const savedUser = await userRepository.save(userList);
  return savedUser.map((user) => user.id);
}
async function getUser(id: number) {
  const userRepository = AppDataSource.getRepository(User);
  return await userRepository.findOne({ where: { id } });;
}
async function getUserList(filter?: any) {
  const userRepository = AppDataSource.getRepository(User);
  // dynamic where filter
  const where = {};
  if (filter?.username_ilike) {
    where["username"] = ILike(`%${filter.username_ilike}%`);
  }

  const users = await userRepository
    .createQueryBuilder("user")
    .where(where) // เอาทุกเงื่อนไขที่เข้า if มา and กัน
    .getMany();
  return users;
}

async function updateUser(id: number, user: any) {
  const userRepository = AppDataSource.getRepository(User);
  const updatedUser = await userRepository.update(id, user);
  console.log("User updated", updatedUser);
}
async function deleteUser(id: number) {
  const userRepository = AppDataSource.getRepository(User);
  const deletedUser = await userRepository.delete(id);
  console.log("User deleted", deletedUser);
}

async function getProfileList(filter?: any) {
  const profileRepository = await AppDataSource.getRepository(Profile);
  
  // dynamic where filter
  const where = {};
  if (filter?.gender) {
    where["gender"] = filter.gender;
  }
  if (filter?.displayName_ilike) {
    where["displayName"] = ILike(`%${filter.displayName_ilike}%`);
  }
  
  const profiles = await profileRepository
    .createQueryBuilder("profile")
    .where(where) // เอาทุกเงื่อนไขที่เข้า if มา and กัน
    .getMany();

  return profiles;
}

