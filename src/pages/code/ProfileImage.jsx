import imgProfile from "../../assets/imgProfile.jpg"
import { useConsole } from "../../Context/ConsoleContext";

function ProfileImagePage() {
  const { viewConsole } = useConsole();

    return (
      <main className={` ${ viewConsole ? "h-[calc(100%-350px)]" : "h-[100%]"}
      code overflow-y-scroll pt-2 pb-12`}>
         <img src={imgProfile} className="mx-auto max-h-[600px]"/>  
       
      </main>
    )
  }
  
  export default ProfileImagePage;
  