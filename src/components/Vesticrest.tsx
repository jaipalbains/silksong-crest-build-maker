import { getImgUrl } from '../helper';
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
                <img src="src/assets/crests/vesticrest.png"/>
            </div>

            <div className="slot" style = {{top: "42%", left: "50%"}}>
                <img 
                    src={getImgUrl(blue_tool, 'blue_tools')} 
                    onClick={() => {updateLoadout("blue_tools")}}
                />
            </div>

            <div className="slot" style = {{top: "64%", left: "50%"}}>
                <img 
                    src={getImgUrl(yellow_tool, 'yellow_tools')} 
                    onClick={() => {updateLoadout("yellow_tools")}}
                />
            </div>
        </div>
    )
}

export default Vesticrest;