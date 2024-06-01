import Arrow from '@/assets/icons/arrow.svg'
import Hand from '@/assets/icons/hand.svg'
import Message from '@/assets/icons/message.svg'
import ThemeLight from '@/assets/icons/themeLight.svg'
import ThemeDark from '@/assets/icons/themeLight.svg'
import { BuilderToolsEnum } from '@/configs/enums/BuilderToolsEnum'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTheme } from "next-themes"
import { useState } from 'react'
export function BuilderTools() {
  const [activeTool,setActiveTool] = useState(BuilderToolsEnum.ARROW)
 
  const { theme, setTheme } = useTheme()
 
  
  function getThemeDom() {
    if( theme === 'dark'){
      return <ThemeLight onClick={() => setTheme("light")}/>
      }else{
       return  <ThemeDark onClick={() => setTheme("dark")} />
      }
  }
    return <>
    <div className="builder-tools">
        <div className="tools-item">
          <div  className={['tools-icon', activeTool === BuilderToolsEnum.ARROW ? 'is-active' : ''].join(' ')} >
          <Arrow /> 
          </div>
       
            </div>
        <div className="tools-item">
   
          <div  className={['tools-icon', activeTool === BuilderToolsEnum.HAND ? 'is-active' : ''].join(' ')} >
          <Hand />
          </div>
            </div>
        <div className="tools-item">
   
          <div  className={['tools-icon', activeTool === BuilderToolsEnum.MESSAGE ? 'is-active' : ''].join(' ')} >
          <Message />
          </div>
            </div>
        <div className="tools-item">
          <div className={['tools-icon', activeTool === BuilderToolsEnum.THEME ? 'is-active' : ''].join(' ')} >
             
            {
              theme === 'dark' ?
              <ThemeLight onClick={() => setTheme("light")} /> :
              <ThemeDark onClick={() => setTheme("dark")} />
            }
        
 
          </div>
        </div>

        <div className="tools-item">
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        



      </div>
    </>
}