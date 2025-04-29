import { ILike } from "typeorm";
import { AppDataSource } from "./data-source";
import { Profile } from "./entity/Profile";
import { User } from "./entity/User";
import { Gender } from "./enum/gender.enum";

AppDataSource.initialize()
  .then(async () => {

    // ถ้ายังไม่มี user ก็สร้าง user ก่อน ให้ uncommelnt บรรทัดล่าง
    // await createUserList(mockUser);
    
    // ลองทดสอบ list ข้อมูล โดยส่ง filter เข้าไป
    console.log(await getUserList({username_ilike: "Doe"}));

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
  const qb = userRepository.createQueryBuilder("user");
  if (filter?.username_ilike) {
    qb.andWhere("user.username ILIKE :username", { username: `%${filter.username_ilike}%` });
  }
  if (filter?.displayName_ilike) {
    qb.andWhere("user.displayName ILIKE :displayName", { displayName: `%${filter.displayName_ilike}%` });
  }
  if (filter?.gender) {
    qb.leftJoin("user.profile", "profile");
    qb.andWhere("profile.gender = :gender", { gender: filter.gender });
  }
  const users = await qb.getMany();
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
