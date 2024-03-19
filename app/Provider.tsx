'use client'
// import { useRouter } from "next/router";
// import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Sidebar from "./components/sidebar";


const Provider = ({children}:any) => {

    // const router = useRouter();

    // const router = useRouter();
    

    console.log("router",usePathname())

    let pathname = usePathname()

    if(["/login"].includes(pathname)){
        return (
            <>
                {children}
            </>
        )
    }
    return (
        <div>
          <div className="grid grid-cols-[250px,_1fr] w-full h-screen">
            <Sidebar />
            <div className="bg-indigo-100 text-black overflow-y-scroll">{children}</div>
          </div>
        </div>
      );
}

export default Provider;