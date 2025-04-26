import { Gender } from "./src/enum/gender.enum";

export const mockUser = [
    // create 5 user by unique username
    {
      username: "Jane Doe",
      profile: {
        gender: Gender.FEMALE,
        displayName: "Jane Doe",
        address: {
          subDistrict: "Phra Khanong",
          district: "Sukhumvit",
          province: "Bangkok",
        },
      },
    },
    {
      username: "Prayut Doe",
      profile: {
        gender: Gender.MALE,
        displayName: "Prayut Doe",
        address: {
          subDistrict: "Hatyai",
          district: "Hatyai",
          province: "Songkhla",
        },
      },
    },
    {
      username: "Trump Doe",
      profile: {
        gender: Gender.MALE,
        displayName: "Trump Doe",
        address: {
          subDistrict: "Don Mueang",
          district: "Don Mueang",
          province: "Bangkok",
        },
      },
    },
    {
      username: "Obama Doe",
      profile: {
        gender: Gender.MALE,
        displayName: "Obama Doe",
        address: {
          subDistrict: "Sukhumvit",
          district: "Bangkok",
          province: "Bangkok",
        },
      },
    },
    {
      username: "Putin Doe",
      profile: {
        gender: Gender.FEMALE,
        displayName: "Putin Doe",
        address: {
          subDistrict: "Thung Maha Mek",
          district: "Tha Phra",
          province: "Bangkok",
        },
      },
    },
  ];