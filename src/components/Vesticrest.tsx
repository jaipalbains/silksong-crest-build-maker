import { getImgUrl, getHeight } from '../helper';
import vesticrestImg from '../assets/crests/vesticrest.png'
import '../styles/Vesticrest.css'

interface Props
{
    blue_tool: string;
    yellow_tool: string;
    updateLoadout: (category: string) => void;
}

function Vesticrest({blue_tool, yellow_tool, updateLoadout}:Props)
{
    return(
        <div className="vesticrest_container">
            <div className="vesticrest">
                <img src={vesticrestImg}/>
            </div>

            <div className="slot" style = {{top: "42%", left: "50%", height: getHeight(blue_tool)}}>
                <img 
                    src={getImgUrl(blue_tool, 'blue_tools')} 
                    onClick={() => {updateLoadout("blue_tools")}}
                />

                {blue_tool != "blue_tools_slot" && <div className="border" style = {{borderColor: "#76def0"}}/>}
            </div>

            <div className="slot" style = {{top: "64.5%", left: "50%", height: getHeight(yellow_tool)}}>
                <img 
                    src={getImgUrl(yellow_tool, 'yellow_tools')} 
                    onClick={() => {updateLoadout("yellow_tools")}}
                />

                {yellow_tool != "yellow_tools_slot" && <div className="border" style = {{borderColor: "#f0cc7e"}}/>}
            </div>
        </div>
    )
}

export default Vesticrest;