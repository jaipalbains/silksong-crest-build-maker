import { getImgUrl, getHeight } from '../helper';
import '../styles/Crest.css'

interface Props
{
    crest_img: string
    skills: string[];
    red_tools: string[];
    blue_tools: string[];
    yellow_tools: string[];
    coords: {skills: string[][]; red_tools: string[][]; blue_tools: string[][]; yellow_tools: string[][]};
    updateLoadout: (item: string, category: string) => void;
}


function Crest({crest_img, skills, red_tools, blue_tools, yellow_tools, coords, updateLoadout}:Props)
{
    return (
        <div className="crest_container">
            <div className="crest">
                <img src={crest_img}/>
            </div>
            
            {skills.map((skill, i) => 
                <div className="slot" style={{left: coords.skills[i][0], top: coords.skills[i][1], height: getHeight(skill)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(skill, 'skills')} 
                        onClick={() => {updateLoadout(skill, "skills")}}
                    />
                </div>
            )}

            {red_tools.map((tool, i) => 
                <div className="slot" style={{left: coords.red_tools[i][0], top: coords.red_tools[i][1],  height: getHeight(tool)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(tool, 'red_tools')} 
                        onClick={() => {updateLoadout(tool, "red_tools")}}
                    />
                </div>
            )}
        
            {blue_tools.map((tool, i) => 
                <div className="slot" style={{left: coords.blue_tools[i][0], top: coords.blue_tools[i][1],  height: getHeight(tool)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(tool, 'blue_tools')}  
                        onClick={() => {updateLoadout(tool, "blue_tools")}}
                    />
                </div>)}

            {yellow_tools.map((tool, i) => 
                <div className="slot" style={{left: coords.yellow_tools[i][0], top: coords.yellow_tools[i][1],  height: getHeight(tool)}}>
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