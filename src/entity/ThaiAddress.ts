import { Column } from "typeorm"

export class ThaiAddress {
    @Column({nullable: true})
    subDistrict: string

    @Column({nullable: true})
    district: string

    @Column({nullable: true})
    province: string
}
