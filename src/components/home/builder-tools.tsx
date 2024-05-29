import Arrow from '@/assets/icons/arrow.svg'
import Hand from '@/assets/icons/hand.svg'
import Message from '@/assets/icons/message.svg'
import ThemeLight from '@/assets/icons/themeLight.svg'
export function BuilderTools() {
    return <>
    <div className="builder-tools">
        <div className="tools-item">
              <Arrow/> 
            </div>
        <div className="tools-item">
            <Hand/>
            </div>

        <div className="tools-item">
              <Message/>
            </div>
        <div className="tools-item">
              <ThemeLight/>
            </div>
      </div>
    </>
}