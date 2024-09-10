import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
  export default function UserAvatar({ name }:any) {
    const initials = name ? name.substring(0, 2).toUpperCase() : "??";
    return (
      <Avatar>
      <AvatarImage src="" alt={name} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
    )
  }
  