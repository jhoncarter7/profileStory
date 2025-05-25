"use client"

import Image from "next/image"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { storiesData } from "../data/stories"
import ProfileStories from "./stories"

interface ProfilePicProps {
  setId: Dispatch<SetStateAction<string | undefined>>;
  openStories: Dispatch<SetStateAction<boolean>>;
}

const ProfilePic = ({ setId, openStories }: ProfilePicProps) => {

 


    const handleOpenStories = (id: string) => {
        setId(id)
        openStories(true)
    }
    return (
        <div className="p-4">
            <div className="flex gap-4 overflow-x-scroll scroll-smooth ">
                {
                    storiesData?.map((p, id) => (
                       <div key={id}>
                         <Image  src={p.avatar} alt="profile image" width={100} height={100} className="w-12 h-12 content-end rounded-full" onClick={()=> handleOpenStories(p.id)}/>
                           
                       </div>

                    ))
                }
            </div>
         
        </div>
    )
}

export default ProfilePic