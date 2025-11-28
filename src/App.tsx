import { useEffect, useState } from 'react';
import SkillToolList from './components/SkillToolList';
import './styles/App.css'
import Crest from './components/Crest';
import Vesticrest from './components/Vesticrest';

function App() 
{ 
  const [currCrest, setCurrCrest] = useState("hunter");

  const [hunterLoadout, setHunterLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const hunterCrestCoords = {
    "skills": [["50%", "68%"]],
    "red_tools": [["50%", "45%"], ["50%", "90%"]],
    "blue_tools": [["18%", "67%"], ["32%", "80%"]],
    "yellow_tools": [["82%", "67%"], ["68%", "80%"]],
  }

  const [reaperLoadout, setReaperLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const reaperCrestCoords = {
    "skills": [["50%", "50%"]],
    "red_tools": [["50%", "25%"], ["50%", "75%"]],
    "blue_tools": [["25%", "38%"], ["25%", "62%"]],
    "yellow_tools": [["75%", "38%"], ["75%", "62%"]],
  }

  const [wandererLoadout, setWandererLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const wandererCrestCoords = {
    "skills": [["50%", "40%"]],
    "red_tools": [["50%", "15%"]],
    "blue_tools": [["25%", "30%"], ["75%", "30%"]],
    "yellow_tools": [["25%", "60%"], ["50%", "70%"], ["75%", "60%"]],
  }

  const [beastLoadout, setBeastLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: [] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const beastCrestCoords = {
    "skills": [["50%", "51%"]],
    "red_tools": [["50%", "30%"], ["50%", "72%"]],
    "blue_tools": [],
    "yellow_tools": [["30%", "40%"], ["70%", "40%"]],
  }

  const [architectLoadout, setArchitectLoadout] = useState( {
    skills: [] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const architectCrestCoords = {
    "skills": [],
    "red_tools": [["50%", "35%"], ["50%", "52%"], ["50%", "69%"]],
    "blue_tools": [["25%", "43%"], ["34%", "28%"]],
    "yellow_tools": [["66%", "28%"], ["75%", "43%"]],
  }

  const [witchLoadout, setWitchLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: [] as string[]
  });

  const witchCrestCoords = {
    "skills": [["51%", "51%"]],
    "red_tools": [["45%", "28%"], ["55%", "72%"]],
    "blue_tools": [["29%", "60%"], ["69%", "40%"], ["73%", "60%"]],
    "yellow_tools": [],
  }

  const [shamanLoadout, setShamanLoadout] = useState( {
    skills: ["skills_slot", "skills_slot", "skills_slot"] as string[],
    red_tools: [] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: [] as string[]
  });

  const shamanCrestCoords = {
    "skills": [["49%", "29%"], ["49%", "48%"], ["49%", "68%"]],
    "red_tools": [],
    "blue_tools": [["29%", "48%"], ["70%", "48%"]],
    "yellow_tools": [],
  }



  const [vestiLoadout, setVestiLoadout] = useState( {
    blue_tools: "blue_tools_slot",
    yellow_tools: "yellow_tools_slot"
  })

  // Update which crest is to be shown using keys 1-7
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, []) 

  const detectKeyDown = (e: { key: any; }) => {
    switch(e.key)
    {
      case "1": setCurrCrest("hunter"); break;
      case "2": setCurrCrest("reaper"); break;
      case "3": setCurrCrest("wanderer"); break;
      case "4": setCurrCrest("beast"); break;
      case "5": setCurrCrest("architect"); break;
      case "6": setCurrCrest("witch"); break;
      case "7": setCurrCrest("shaman"); break;
      default: break;
    }
  }

  type LoadoutSetter = React.Dispatch<React.SetStateAction<Loadout>>;
  type Loadout = {
    skills: string[];
    red_tools: string[];
    blue_tools: string[];
    yellow_tools: string[];
  };

  // Update which loadout and coordinates are in use depending on crest displayed
  var loadout : Loadout = hunterLoadout;
  var setLoadout : LoadoutSetter;
  var crestCoords = hunterCrestCoords;

  switch(currCrest)
  {
    case "hunter":
      loadout = hunterLoadout;
      setLoadout = setHunterLoadout;
      crestCoords = hunterCrestCoords;
      break;
      
    case "reaper":
      loadout = reaperLoadout;
      setLoadout = setReaperLoadout;
      crestCoords = reaperCrestCoords;
      break;
    
    case "wanderer":
      loadout = wandererLoadout;
      setLoadout = setWandererLoadout;
      crestCoords = wandererCrestCoords;
      break;
    
    case "beast":
      loadout = beastLoadout;
      setLoadout = setBeastLoadout;
      crestCoords = beastCrestCoords;
      break;
    
    case "architect":
      loadout = architectLoadout;
      setLoadout = setArchitectLoadout;
      crestCoords = architectCrestCoords;
      break;
    
    case "witch":
      loadout = witchLoadout;
      setLoadout = setWitchLoadout;
      crestCoords = witchCrestCoords;
      break;

    case "shaman":
      loadout = shamanLoadout;
      setLoadout = setShamanLoadout;
      crestCoords = shamanCrestCoords;
      break;

    default:
      break;
  }

  const handleLoadoutChange = (item: string, category: string) => {      
    setLoadout((prev) => {
      if(category == "red_tools" || category == "blue_tools" || category == "yellow_tools" || category == "skills")
      {
        
        if (!prev[category] || prev[category].length === 0) {
          if((category == "blue_tools" || category == "yellow_tools"))
            handleVestiLoadoutChange(item, category);
          return prev;
        }
        
        if(loadout[category].indexOf(item) != -1 || ((category == "blue_tools" || category == "yellow_tools") && vestiLoadout[category] == item))
          return prev;

        let index = prev[category].findIndex(x => x.includes("slot"));
        if(index == -1)
          if((category == "blue_tools" || category == "yellow_tools") && vestiLoadout[category].includes("slot"))
            handleVestiLoadoutChange(item, category);
          else
            index = 0;
      
        const updated = [...prev[category]];
        updated[index] = item;

        return {
          ...prev,
          [category]: updated,
        };
      }
      
      return prev;
    });
  }

  const handleVestiLoadoutChange = (item: string, category: string) => {      
    setVestiLoadout(prev => {
      return {
        ...prev,
        [category]: item
      };
    });
  }
  
  const handleSkillToolRemoval = (item: string, category: string) => {
    setLoadout((prev) => {
      if(category == "red_tools" || category == "blue_tools" || category == "yellow_tools" || category == "skills")
      {
        if(prev[category].indexOf(item) == -1)
          return prev;

        let index = loadout[category].indexOf(item);
        
        const updated = [...prev[category]];
        updated[index] = `${category}_slot`;

        return {
          ...prev,
          [category]: updated,
        };
      }
      
      return prev;
    });
  }

  const handleVestiToolRemoval = (category: string) => {      
    setVestiLoadout(prev => {
      return {
        ...prev,
        [category]: `${category}_slot`
      };
    });
  }

  /*add alt to images*/
  return(
    <>
    <div className="container">
      <Vesticrest
        blue_tool={vestiLoadout.blue_tools}
        yellow_tool={vestiLoadout.yellow_tools}
        updateLoadout={handleVestiToolRemoval}
      />
      
      <Crest
        crest_img = {`src/assets/crests/${currCrest}_crest.png`}
        skills={loadout.skills} 
        red_tools={loadout.red_tools} 
        blue_tools={loadout.blue_tools} 
        yellow_tools={loadout.yellow_tools}
        coords = {crestCoords}
        updateLoadout={handleSkillToolRemoval}
      />

      <SkillToolList updateLoadout={handleLoadoutChange}/>
    </div>
    <div style={{color: "white"}}>Hunter = 1, Reaper = 2, Wanderer = 3, Beast = 4, Architect = 5, Witch = 6, Shaman = 7</div>
    </>
  )
}

export default App
