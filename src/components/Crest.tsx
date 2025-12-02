import { getImgUrl, getHeight } from '../helper';
import '../styles/Crest.css'

interface Props
{
    crest_img: string
    loadout: { skills: string[]; red_tools: string[]; blue_tools: string[]; yellow_tools: string[]; }
    config: {size: string; skills_pos: string[][]; rtools_pos: string[][]; btools_pos: string[][]; ytools_pos: string[][]};
    updateLoadout: (item: string, category: string) => void;
}


function Crest({crest_img, loadout, config, updateLoadout}:Props)
{
    return (
        <div className="crest_container">
            <div className="crest"  style={{width: config.size, height: config.size}}>
                <img src={crest_img}/>
            </div>
            
            {loadout.skills.map((skill, i) => 
                <div className="slot" style={{left: config.skills_pos[i][0], top: config.skills_pos[i][1], height: getHeight(skill)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(skill, 'skills')} 
                        onClick={() => {updateLoadout(skill, "skills")}}
                    />
                </div>
            )}

            {loadout.red_tools.map((tool, i) => 
                <div className="slot" style={{left: config.rtools_pos[i][0], top: config.rtools_pos[i][1],  height: getHeight(tool)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(tool, 'red_tools')} 
                        onClick={() => {updateLoadout(tool, "red_tools")}}
                    />
                </div>
            )}
        
            {loadout.blue_tools.map((tool, i) => 
                <div className="slot" style={{left: config.btools_pos[i][0], top: config.btools_pos[i][1],  height: getHeight(tool)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(tool, 'blue_tools')}  
                        onClick={() => {updateLoadout(tool, "blue_tools")}}
                    />
                </div>)}

            {loadout.yellow_tools.map((tool, i) => 
                <div className="slot" style={{left: config.ytools_pos[i][0], top: config.ytools_pos[i][1],  height: getHeight(tool)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(tool, 'yellow_tools')}  
                        onClick={() => {updateLoadout(tool, "yellow_tools")}}
                    />
                </div>)}
       
        </div>
    );
}

export default Crest;