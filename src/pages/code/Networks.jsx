import { Link } from "react-router-dom";

function NetworkPage() {
  return (
    <main className="code overflow-y-scroll h-[100%] pt-2 pb-12 text-selected">
      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 1 </p>
        </div>


        <div className='flex flex-row items-center ml-2'>
          <h6 className="text-[#FF2CF1] mr-2"> {`@tailwind`}</h6>
          <h6 className="text-[#DB2E88] mr-1"> {`base;`}</h6>
          <h6 className="text-[#EDA740] hidden md:flex"> {`Unknown at rule @tailwind`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 2 </p>
        </div>


        <div className='flex flex-row items-center ml-2'>
          <h6 className="text-[#FF2CF1] mr-2"> {`@tailwind`}</h6>
          <h6 className="text-[#DB2E88] mr-1"> {`components;`}</h6>
          <h6 className="text-[#EDA740] hidden md:flex"> {`Unknown at rule @tailwind`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 3 </p>
        </div>


        <div className='flex flex-row items-center ml-2'>
          <h6 className="text-[#FF2CF1] mr-2"> {`@tailwind`}</h6>
          <h6 className="text-[#DB2E88] mr-1"> {`components;`}</h6>
          <h6 className="text-[#EDA740] hidden md:flex"> {`Unknown at rule @tailwind`}</h6>
        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] unselectable"> 4 </p>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] unselectable"> 5 </p>

        <div className='flex flex-row items-center ml-2'>
          <h6 className="text-[#FF2CF1] mr-2"> {`@import`}</h6>
          <h6 className="text-[#EFD400] "> {`url(`}</h6>
          <h6 className="text-[#0EF3FF] mr-1"> {`"https://fonts.googleapis.com`}</h6>
          <h6 className="text-[#0EF3FF] mr-1 hidden xl:flex"> {`/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap"`}</h6>
          <h6 className="text-[#EFD400] hidden lg:flex"> {`)`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <p className="text-[#FF2E97] unselectable"> 6 </p>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 7 </p>
        </div>


        <div className='flex flex-row items-center ml-2'>
          <h6 className="text-[#FFD400] mr-2"> {`.social-network {`}</h6>
        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 8 </p>
        </div>


        <div className='flex flex-row items-center ml-8'>
          <h6 className="text-[#0EF3DB] mr-2"> {`git-hub`}</h6>
          <h6 className="text-[#FF2E88] mr-2"> {`:`}</h6>
          <Link to="https://github.com/Nicoogf" className="text-[#FD21EF] mr-2"
            target="_blank" rel="noopener noreferrer">
            {`/Nicoogf`}
          </Link>
          <h6 className="text-[#FF2E88] mr-2"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 9 </p>
        </div>


        <div className='flex flex-row items-center ml-8'>
          <h6 className="text-[#0EF3DB] mr-2"> {`instagram`}</h6>
          <h6 className="text-[#FF2E88] mr-2"> {`:`}</h6>
          <Link to="https://www.instagram.com/nfalabella_/" className="text-[#FD21EF] mr-2"
            target="_blank" y rel="noopener noreferrer">
            {`/nfalabella`}
          </Link>
          <h6 className="text-[#FF2E88] mr-2"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 10 </p>
        </div>


        <div className='flex flex-row items-center ml-6'>
          <h6 className="text-[#0EF3DB] mr-2"> {`discord`}</h6>
          <h6 className="text-[#FF2E88] mr-2"> {`:`}</h6>
          <h6 className="text-[#FD21EF] mr-2"> {`/nfalabella`}</h6>
          <h6 className="text-[#FF2E88] mr-2"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 11 </p>
        </div>


        <div className='flex flex-row items-center ml-6 '>
          <h6 className="text-[#0EF3DB] mr-2"> {`email`}</h6>
          <h6 className="text-[#FF2E88] mr-2"> {`:`}</h6>
          <h6 className="text-[#FD21EF] mr-2 unselectable"> {`nicolasgfalabella@gmail.com`}</h6>
          <h6 className="text-[#FF2E88] mr-2 unselectable"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-xs md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 12 </p>
        </div>


        <div className='flex flex-row items-center ml-3'>
          <h6 className="text-[#FFD400] mr-2"> {`}`}</h6>
        </div>

      </article>
    </main>
  )
}

export default NetworkPage;
