import { useEffect, useState } from 'react';
import Vesticrest from './components/Vesticrest';
import Crest from './components/Crest';
import SkillToolList from './components/SkillToolList';
import './styles/App.css'
import { hunterCrestConfig, reaperCrestConfig, wandererCrestConfig, beastCrestConfig, architectCrestConfig, 
  witchCrestConfig, shamanCrestConfig} from './crestConfig';

function App() 
{
  /* 
    Tracks which crest is currently active and updates it when the user presses number keys 1–7
  */
  const [currCrest, setCurrCrest] = useState("hunter");

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


  /*
    Loadout state definitions for each crest. Each loadout tracks the currently equipped items for that crest. The number of 
    slots varies per class as it does ingame. Default values (e.g., "skills_slot", "red_tools_slot") used to represent unassigned
    slots.
  */
  const [hunterLoadout, setHunterLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const [reaperLoadout, setReaperLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot"] as string[]
  });


  const [wandererLoadout, setWandererLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const [beastLoadout, setBeastLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: [] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const [architectLoadout, setArchitectLoadout] = useState( {
    skills: [] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: ["yellow_tools_slot", "yellow_tools_slot"] as string[]
  });

  const [witchLoadout, setWitchLoadout] = useState( {
    skills: ["skills_slot"] as string[],
    red_tools: ["red_tools_slot", "red_tools_slot"] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: [] as string[]
  });

  const [shamanLoadout, setShamanLoadout] = useState( {
    skills: ["skills_slot", "skills_slot", "skills_slot"] as string[],
    red_tools: [] as string[], 
    blue_tools: ["blue_tools_slot", "blue_tools_slot"] as string[], 
    yellow_tools: [] as string[]
  });

  const [vestiLoadout, setVestiLoadout] = useState( {
    blue_tools: "blue_tools_slot",
    yellow_tools: "yellow_tools_slot"
  })


  /*
    Update which loadout and configuration data are in use depending on crest
  */
  type LoadoutSetter = React.Dispatch<React.SetStateAction<Loadout>>;
  type Loadout = {
    skills: string[];
    red_tools: string[];
    blue_tools: string[];
    yellow_tools: string[];
  };

  var loadout : Loadout = hunterLoadout;
  var setLoadout : LoadoutSetter;
  var crestConfig = hunterCrestConfig;

  switch(currCrest)
  {
    case "hunter":
      loadout = hunterLoadout;
      setLoadout = setHunterLoadout;
      crestConfig = hunterCrestConfig;
      break;
      
    case "reaper":
      loadout = reaperLoadout;
      setLoadout = setReaperLoadout;
      crestConfig = reaperCrestConfig;
      break;
    
    case "wanderer":
      loadout = wandererLoadout;
      setLoadout = setWandererLoadout;
      crestConfig = wandererCrestConfig;
      break;
    
    case "beast":
      loadout = beastLoadout;
      setLoadout = setBeastLoadout;
      crestConfig = beastCrestConfig;
      break;
    
    case "architect":
      loadout = architectLoadout;
      setLoadout = setArchitectLoadout;
      crestConfig = architectCrestConfig;
      break;
    
    case "witch":
      loadout = witchLoadout;
      setLoadout = setWitchLoadout;
      crestConfig = witchCrestConfig;
      break;

    case "shaman":
      loadout = shamanLoadout;
      setLoadout = setShamanLoadout;
      crestConfig = shamanCrestConfig;
      break;

    default:
      break;
  }


  /*
    Handles addition and removal of items from the currently active crest loadout
  */  
  const handleLoadoutChange = (item: string, category: string) => {      
    const isValidCategory = (category == "skills" || category == "red_tools" || category == "blue_tools" || 
      category == "yellow_tools");

    if(!isValidCategory)
      return;
    
    setLoadout((prev) => {
      // If loadout category for current crest has no slots
      if (!prev[category] || prev[category].length === 0)
      {
        if((category == "blue_tools" || category == "yellow_tools"))
          handleVestiLoadoutChange(item, category);
        return prev;
      }
      
      // Prevent duplicate items being added
      if(loadout[category].indexOf(item) != -1 || ((category == "blue_tools" || category == "yellow_tools") && vestiLoadout[category] == item))
        return prev;

      // If no slot available for that category, check vesticrest before replacing first slot
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
    });
  }

  const handleSkillToolRemoval = (item: string, category: string) => {
    const isValidCategory = (category == "skills" || category == "red_tools" || category == "blue_tools" || 
      category == "yellow_tools");

    if(!isValidCategory)
      return;
    
    setLoadout((prev) => {
      if(prev[category].indexOf(item) == -1)
        return prev;

      let index = loadout[category].indexOf(item);
      const updated = [...prev[category]];
      updated[index] = `${category}_slot`;

      return {
        ...prev,
        [category]: updated,
      };
    });
  }


  /*
    Handles addition and removal of items from the vesticrest loadout
  */  
  const handleVestiLoadoutChange = (item: string, category: string) => {      
    setVestiLoadout(prev => {
      return {
        ...prev,
        [category]: item
      };
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

  //add alt to images
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
        loadout={loadout}
        config = {crestConfig}
        updateLoadout={handleSkillToolRemoval}
      />

      <SkillToolList updateLoadout={handleLoadoutChange}/>
    </div>
    
    <div style={{color: "white"}}>Hunter = 1, Reaper = 2, Wanderer = 3, Beast = 4, Architect = 5, Witch = 6, Shaman = 7</div>
    </>
  )
}

export default App
