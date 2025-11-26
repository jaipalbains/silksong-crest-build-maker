import { getImgUrl, getHeight } from '../helper';
import '../styles/HunterCrest.css'

interface Props
{
    skills: string[];
    red_tools: string[];
    blue_tools: string[];
    yellow_tools: string[];
    updateLoadout: (item: string, category: string) => void;
}


function HunterCrest({skills, red_tools, blue_tools, yellow_tools, updateLoadout}:Props)
{
    var scoords = [["50%", "68%"]];
    var rcoords = [["50%", "45%"], ["50%", "90%"]];
    var bcoords = [["18%", "67%"], ["32%", "80%"]];
    var ycoords = [["82%", "67%"], ["68%", "80%"]];



    return (
        <div className="hunter-crest_container">
            <div className="crest">
                <img src="src/assets/crests/hunter_crest.png"/>
            </div>

            {skills.map((skill, i) => 
                <div className="slot" style={{left: scoords[i][0], top: scoords[i][1], height: getHeight(skill)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(skill, 'skills')} 
                        onClick={() => {updateLoadout(skill, "skills")}}
                    />
                </div>
            )}

            {red_tools.map((tool, i) => 
                <div className="slot" style={{left: rcoords[i][0], top: rcoords[i][1],  height: getHeight(tool)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(tool, 'red_tools')} 
                        onClick={() => {updateLoadout(tool, "red_tools")}}
                    />
                </div>
            )}
        
            {blue_tools.map((tool, i) => 
                <div className="slot" style={{left: bcoords[i][0], top: bcoords[i][1],  height: getHeight(tool)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(tool, 'blue_tools')}  
                        onClick={() => {updateLoadout(tool, "blue_tools")}}
                    />
                </div>)}

            {yellow_tools.map((tool, i) => 
                <div className="slot" style={{left: ycoords[i][0], top: ycoords[i][1],  height: getHeight(tool)}}>
                    <img 
                        key={i} 
                        src={getImgUrl(tool, 'yellow_tools')}  
                        onClick={() => {updateLoadout(tool, "yellow_tools")}}
                    />
                </div>)}       
        </div>
    );
}

export default HunterCrest;