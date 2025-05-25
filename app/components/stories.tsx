"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { storiesData, Story } from "../data/stories"

interface ProfileStoriesProps {
    userId: string;
    onClose: Dispatch<SetStateAction<boolean>>;
}

const ProfileStories = ({ userId, onClose }: ProfileStoriesProps) => {
    const [index, setIndex] = useState<number>(Number(userId));
    const [stories, setStories] = useState<Story[]>([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        console.log("index", index)
        const filteredStories = storiesData.filter(profile => Number(profile.id) === index)
       
        if (filteredStories.length >= 0) {
            setLoading(false)
            
            setStories(filteredStories)
        }
    }, [ index])

    useEffect(() => {
        const timer = setInterval(() => {
            if (index < storiesData.length - 1) setIndex(index + 1);
            else onClose(false);
        }, 5000);

        return () => clearInterval(timer);
    }, [index, onClose]);

     const goNext = () => {
    if (index < storiesData.length) setIndex(index + 1);
    else onClose(false); 
  };

  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };
    
    console.log(stories[0]?.image)
    return (

          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative w-[90vw] max-w-md h-[70vh] flex items-center justify-center bg-black rounded-xl overflow-hidden">
     
        <div className="absolute inset-0 flex">
          <div className="w-1/2" onClick={goPrev} />
          <div className="w-1/2" onClick={goNext} />
        </div>
        {loading ? (
          <div className="text-white text-center">Loading…</div>
        ) : (
            
          <img src={stories[0]?.image} className="max-w-full max-h-full transition duration-300" />
        )}

      =
        <button
          className="absolute top-0 right-4 text-white text-xl"
          onClick={()=> onClose(false)}
        >
          ✕
        </button>
      </div>

        

        </div>
    )
}

export default ProfileStories