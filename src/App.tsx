import { useState } from 'react';
import SkillToolList from './components/SkillToolList';
import './styles/App.css'
import HunterCrest from './components/HunterCrest';
import Vesticrest from './components/Vesticrest';

function App() 
{  
  const [currCrest, setCurrCrest] = useState("hunter");
  
  type Loadout = {
    skills: string[];
    red_tools: string[];
    blue_tools: string[];
    yellow_tools: string[];
  };
  //use effect to detech key press
  type LoadoutSetter = React.Dispatch<React.SetStateAction<Loadout>>;

  
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

  const [vestiLoadout, setVestiLoadout] = useState( {
    blue_tools: "blue_tools_slot",
    yellow_tools: "yellow_tools_slot"
  })

  var loadout : Loadout;
  var setLoadout : LoadoutSetter;
  switch(currCrest)
    {
      case "hunter":
        loadout = hunterLoadout;
        setLoadout = setHunterLoadout;
        break;
      
      default:
        loadout = reaperLoadout;
        setLoadout = setReaperLoadout;
    }

  const handleLoadoutChange = (item: string, category: string) => {      
    setLoadout((prev) => {
      if(category == "red_tools" || category == "blue_tools" || category == "yellow_tools" || category == "skills")
      {
        if(loadout[category].indexOf(item) != -1 || ((category == "blue_tools" || category == "yellow_tools") && vestiLoadout[category] == item))
          return prev;

        let index = loadout[category].findIndex(x => x.includes("slot"));
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
        [category]: [item]
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
    <div className="container">
      <Vesticrest
        blue_tool={vestiLoadout.blue_tools}
        yellow_tool={vestiLoadout.yellow_tools}
        updateLoadout={handleVestiToolRemoval}
      />
      
      <HunterCrest
        skills={loadout.skills} 
        red_tools={loadout.red_tools} 
        blue_tools={loadout.blue_tools} 
        yellow_tools={loadout.yellow_tools}
        updateLoadout={handleSkillToolRemoval}
      />

      <SkillToolList updateLoadout={handleLoadoutChange}/>
    </div>
  )
}

export default App
