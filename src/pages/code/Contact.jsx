import { useConsole } from "../../Context/ConsoleContext";
import { useMenu } from "../../Context/HeaderContext";
import { useLocation } from "react-router-dom";
import { GrMoreVertical } from "react-icons/gr";
import { IoIosPause } from "react-icons/io";
import { VscDebugStepOver } from "react-icons/vsc";
import { VscDebugStepInto } from "react-icons/vsc";
import { VscDebugStepOut } from "react-icons/vsc";

import { VscDebugStop } from "react-icons/vsc";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPlay } from "react-icons/fa";


// src/pages/app/Career.jsx
function ContactPage() {

  const location = useLocation();

  const { setViewExplorer, setViewSrc, StartAplication, runApp, CloseAplication } = useMenu();
  const { viewConsole } = useConsole();





  return (
    <main className={` ${ viewConsole ? "h-[calc(100%-350px)]" : "h-[100%]"}
    code overflow-y-scroll pt-2 pb-12`}>

      <div className="flex flex-row items-center justify-center">

        <div className='absolute top-12 h-[30px] bg-[#333333] w-[200px] rounded-md flex flex-row items-center justify-between'>

          <div className='flex flex-row'>
            <GrMoreVertical className='text-[#787878] -mr-3' />
            <GrMoreVertical className='text-[#787878]' />
          </div>

          <div className='flex flex-row'>
            <IoIosPause className='text-[#787878] ' />
          </div>

          <div className='flex flex-row'>
            <VscDebugStepOver className='text-[#787878] ' />
          </div>

          <div className='flex flex-row'>
            <VscDebugStepInto className='text-[#787878] ' />
          </div>

          <div className='flex flex-row'>
            <VscDebugStepOut className='text-[#787878] ' />
          </div>

          <div className='flex flex-row cursor-pointer' onClick={StartAplication}>
            <FaPlay className='text-[#89D185] ' />
          </div>

          <div className='flex flex-row'>
            <VscDebugStop className='text-[#F48771] ' />
          </div>

          <div className='flex flex-row'>
            <MdKeyboardArrowDown className='text-[#787878] ' />
          </div>

        </div>
      </div>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 1 </p>
        </div>


        <div className='flex flex-row items-center md:ml-2'>
          <h6 className="text-[#A83DFF] mr-2"> {`package`}</h6>
          <h6 className="text-[#32A9DB] mr-1"> {`Portfolio`}</h6>
          <h6 className="text-[#EF2E97]"> {`;`}</h6>
        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 2 </p>
        </div>


        <div className='flex flex-row items-center md:ml-2'>
          <h6 className="text-[#A83DFF] mr-2"> {`import`}</h6>
          <h6 className="text-[#32A9DB] mr-1"> {`java.util.Scanner`}</h6>
          <h6 className="text-[#EF2E97]"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 3 </p>
        </div>


        <div className='flex flex-row items-center md:ml-2'>
          <h6 className="text-[#A83DFF] mr-2"> {`import`}</h6>
          <h6 className="text-[#32A9DB] mr-1"> {`javax.swing.*`}</h6>
          <h6 className="text-[#EF2E97]"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 4 </p>
        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  5</p>
        </div>


        <div className='flex flex-row items-center md:ml-2'>
          <h6 className="text-[#40A9FF] mr-2"> {`public class`}</h6>
          <h6 className="text-[#FF2E97] mr-1"> {`Contact_form`}</h6>
          <h6 className="text-[#40A9FF] mr-1 hidden lg:flex"> {`extends`}</h6>
          <h6 className="text-[#40A9FF] mr-1 hidden lg:flex"> {`JFrame`}</h6>
          <h6 className="text-[#40A9FF] mr-1 hidden lg:flex "> {`implements`}</h6>
          <h6 className="text-[#40A9FF] mr-1 hidden lg:flex italic"> {`ActionListener`}</h6>
          <h6 className="text-[#FFD400]"> {`{`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 6</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#40A9FF] mr-2 hidden md:flex"> {`private`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`JTextField`}</h6>
          <h6 className="text-[#FF2E97]"> {`tField_one`}</h6>
          <h6 className="text-[#FF1BE3]"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 7</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#40A9FF] mr-2 hidden md:flex"> {`private`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`JTextField`}</h6>
          <h6 className="text-[#FF2E97]"> {`tField_two`}</h6>
          <h6 className="text-[#FF1BE3]"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 8</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#40A9FF] mr-2 hidden md:flex"> {`private`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`JLabel`}</h6>
          <h6 className="text-[#FF2E97]"> {`label_one`}</h6>
          <h6 className="text-[#FF1BE3]"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 9</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#40A9FF] mr-2 hidden md:flex"> {`private`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`JLabel`}</h6>
          <h6 className="text-[#FF2E97]"> {`label_two`}</h6>
          <h6 className="text-[#FF1BE3]"> {`;`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 10</p>
        </div>


        <div className='flex flex-row items-center md:ml-4'>
          <h6 className="text-[#40A9FF] mr-2 hidden md:flex"> {`private`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`JButton`}</h6>
          <h6 className="text-[#FF2E97]"> {`button`}</h6>
          <h6 className="text-[#FF1BE3]"> {`;`}</h6>
        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 11 </p>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  12 </p>
        </div>


        <div className='flex flex-row items-center md:ml-2'>
          <h6 className="text-[#40A9FF] mr-2"> {`public`}</h6>
          <h6 className="text-[#FFD400] mr-1"> {`Contact_Form`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 "> {`()`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 "> {`{`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 13</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#FFD400] mr-2"> {`setLayout`}</h6>
          <h6 className="text-[#40A9FF] mr-1"> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`null`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  14</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FFD400] mr-2"> {`setDefaultCloseOperation`}</h6>
          <br />
          <h6 className="text-[#40A9FF] mr-1"> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`EXIT_ON_CLOSE`}</h6>        
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  15</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-2"> {`label_one`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`=`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 "> {`new`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`JLabel`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#0EF3FF] mr-1 "> {`"De : "`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  16</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-"> {`label_one`}</h6>
          <h6 className="text-[#FF1BE3] "> {`.`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`setBounds`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`15`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`10`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`100`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`30`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  17</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#FFD400] mr-"> {`add`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`label_one`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 18 </p>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  19 </p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-2"> {`label_two`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`=`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 "> {`new`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`JLabel`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#0EF3FF] mr-1 "> {`"Asunto : "`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  20</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-"> {`label_one`}</h6>
          <h6 className="text-[#FF1BE3] "> {`.`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`setBounds`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`15`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`50`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`100`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`30`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  21</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FFD400] mr-"> {`add`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`label_two`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 22 </p>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  23</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-2"> {`textField_one`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`=`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 "> {`new`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`JTextField`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`()`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  24</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-"> {`textField_one`}</h6>
          <h6 className="text-[#FF1BE3] "> {`.`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`setBounds`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`80`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`16`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`190`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`20`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  25</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FFD400] mr-"> {`add`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`textField_one`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 26 </p>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  27</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-2"> {`textField_two`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`=`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 "> {`new`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`JTextField`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`()`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  28</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-"> {`textField_two`}</h6>
          <h6 className="text-[#FF1BE3] "> {`.`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`setBounds`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`80`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`16`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`190`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`20`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  29</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FFD400] mr-"> {`add`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`textField_two`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 30 </p>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  31</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-2"> {`button_one`}</h6>
          <h6 className="text-[#FF1BE3] mr-1"> {`=`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 "> {`new`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`JButton`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#0EF3FF] mr-1 "> {`"Enviar"`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  32</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-"> {`button_one`}</h6>
          <h6 className="text-[#FF1BE3] "> {`.`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`setBounds`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`175`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`100`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`100`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`30`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  33</p>
        </div>


        <div className='flex flex-row items-center ml-1 md:ml-4'>
          <h6 className="text-[#FFD400] mr-"> {`add`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`button_one`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 34 </p>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  35</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97] mr-"> {`@`}</h6>
          <h6 className="text-[#EF2CF1] mr-1 "> {`Override`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable"> 36 </p>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  37</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#40A9FF] mr-2"> {`public static`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 hidden sm:flex "> {`void`}</h6>
          <h6 className="text-[#FFD400] mr-1 hidden sm:flex"> {`main`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 "> {`(String`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`[]`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`args`}</h6>
          <h6 className="text-[#EF2CF1] mr-1 "> {`)`}</h6>
          <h6 className="text-[#EF2CF1] mr-1 "> {`{`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  38</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>

          <h6 className="text-[#FF1BE3] mr-1 "> {`Interfaces`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`form`}</h6>
          <h6 className="text-[#FF1BE3] mr-1 hidden sm:flex "> {`= new`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`Interfaces`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`()`}</h6>
          <h6 className="text-[#EF2CF1] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  39</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97]"> {`form.`}</h6>
          <h6 className="text-[#FFD400]"> {`setBounds`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`0`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`0`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`300`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`,`}</h6>
          <h6 className="text-[#FFD400] mr-1 "> {`200`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  40</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97]"> {`form.`}</h6>
          <h6 className="text-[#FFD400]"> {`setVisible`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`true`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>


      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  41</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF2E97]"> {`form.`}</h6>
          <h6 className="text-[#FFD400]"> {`setLocationRelativeTo`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`(`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`null`}</h6>
          <h6 className="text-[#40A9FF] mr-1 "> {`)`}</h6>
          <h6 className="text-[#FF2E97] mr-1 "> {`;`}</h6>

        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  42</p>
        </div>


        <div className='flex flex-row items-center  ml-1 md:ml-4'>
          <h6 className="text-[#FF1BE3]"> {`}`}</h6>
        </div>

      </article>

      <article className="flex flex-row gap-x-4 text-[11px] md:text-sm">

        <div className='flex flex-row items-center'>
          <p className="text-[#FF2E97] unselectable">  43</p>
        </div>


        <div className='flex flex-row items-center '>
          <h6 className="text-[#FFD400]"> {`}`}</h6>
        </div>

      </article>
    </main>
  )
}

export default ContactPage;
