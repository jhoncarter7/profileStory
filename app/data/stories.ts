
export interface Story {
  id: string;
  username: string;
  avatar: string;
  image: string;
  timestamp: number;
}

export const storiesData: Story[] = [
  {
    id: "1",
    username: "sarah_dev",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
    timestamp: Date.now() - 3600000 
  },
  {
    id: "2",
    username: "tech_guru",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop",
    timestamp: Date.now() - 7200000 
  },
  {
    id: "3",
    username: "code_artist",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop",
    timestamp: Date.now() - 10800000 
  },
  {
    id: "4",
    username: "design_pro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=600&fit=crop",
    timestamp: Date.now() - 14400000 
  },
  {
    id: "5",
    username: "web_wizard",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
    timestamp: Date.now() - 18000000 
  },
  {
    id: "6",
    username: "pixel_master",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    timestamp: Date.now() - 21600000 
  }
];
