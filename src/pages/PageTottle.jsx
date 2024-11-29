import { useEffect } from "react";




export const useTitle = (title) => {
     useEffect(() => {
       document.title = ` Gadgets | ${title}`;
     }, [title]);
   };
   