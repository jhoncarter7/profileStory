"use client"

import Image from "next/image";
import ProfileStrories from "./components/profile";
import ProfilePic from "./components/profile";
import { useState } from "react";
import ProfileStories from "./components/stories";

export default function Home() {
  const [openStories, setOpenStories] = useState<boolean>(false)
  const [profileId, setProfileId] = useState<string>()
  return (
    <div className="relative">
      <ProfilePic setId={setProfileId} openStories={setOpenStories} />

      {openStories && <ProfileStories userId={profileId!} onClose={setOpenStories} />}
    </div>

  );
}
