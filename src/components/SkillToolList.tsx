import { getImgUrl } from '../helper';
import '../styles/SkillToolList.css'

interface Props
{
    loadout: { skills: string[]; red_tools: string[]; blue_tools: string[]; yellow_tools: string[]; }
    vestiLoadout: {blue_tools: string, yellow_tools: string}
    updateLoadout: (item: string, category: string) => void;
}

function SkillToolList({loadout, vestiLoadout, updateLoadout}:Props) 
{
    const skills = [
        "silkspear", "thread_storm", "cross_stitch",
        "sharpdart", "rune_rage", "pale_nails"
    ];

    const redTools = [
        'straight_pin', 'threefold_pin', 'sting_shard', 
        'tacks', 'longpin', 'curvesickle', 
        'throwing_ring', 'pimpillo', 'conchcutter',
        'silkshot', 'delvers_drill', 'cogwork_wheel',
        'cogfly', 'rosary_cannon', 'voltvessels',
        'flintslate', 'snare_setter', 'flea_brew',
        'plasmium_phial'
    ];

    const blueTools = [
        'druids_eyes', 'magma_bell', 'warding_bell',
        'pollip_pouch', 'fractured_mask', 'multibinder',
        'weavelight', 'sawtooth_circlet', 'injector_band',
        'spool_extender', 'reserve_bind', 'claw_mirrors',
        'memory_crystal', 'snitch_pick', 'volt_filament',
        'quick_sling', 'wreath_of_purity', 'longclaw',
        'wispfire_lantern', 'egg_of_flealia', 'pin_badge'
    ];

    const yellowTools = [
        'compass', 'shard_pendant', 'magnetite_brooch',
        'weighted_belt', 'barbed_bracelet', 'dead_bugs_purse',
        'shell_satchel', 'magnetite_dice', 'scuttlebrace', 
        'ascendants_grip', 'spider_strings', 'silkspeed_anklets',
        'thiefs_mark'
    ];

    return (
        <div className='skill-tool-list_container'>
            <div className="skill-tool-list">
                
                <div className ="heading">
                    <img src="src/assets/headings/skill_heading.png"/>
                </div>

                <div className ="category">
                    {skills.map((skill, i) => 
                        <div className="category_item" key={i}>
                            <img 
                                key={i} 
                                src={getImgUrl(skill, 'skills')} 
                                onClick={() => {updateLoadout(skill, "skills")}}
                            />

                            {loadout.skills.includes(skill) && <div className="border" style = {{borderColor: "white"}}/>}
                        </div>)}
                </div>

                <div className ="heading">
                    <img src="src/assets/headings/red_tool_heading.png"/>
                </div>

                <div className ="category">
                    {redTools.map((tool, i) => 
                        <div className="category_item" key={i}>
                            <img 
                                key={i} 
                                src={getImgUrl(tool, 'red_tools')} 
                                onClick={() => {updateLoadout(tool, "red_tools")}}
                            />

                            {loadout.red_tools.includes(tool) && <div className="border" style = {{borderColor: "#eb857d"}}/>}
                        </div>)}
                </div>

                <div className ="heading">
                    <img src="src/assets/headings/blue_tool_heading.png"/>
                </div>
                
                <div className ="category">
                    {blueTools.map((tool, i) => 
                        <div className="category_item" key={i}>
                            <img 
                                key={i} 
                                src={getImgUrl(tool, 'blue_tools')} 
                                onClick={() => {updateLoadout(tool, "blue_tools")}}
                            />

                            {(loadout.blue_tools.includes(tool) || vestiLoadout.blue_tools == tool) && <div className="border" style = {{borderColor: "#76def0"}}/>}
                        </div>)}
                </div>

                <div className ="heading">
                    <img src="src/assets/headings/yellow_tool_heading.png"/>
                </div>

                <div className ="category">
                    {yellowTools.map((tool, i) => 
                        <div className="category_item" key={i}>
                            <img 
                                key={i} 
                                src={getImgUrl(tool, 'yellow_tools')} 
                                onClick={() => {updateLoadout(tool, "yellow_tools")}}
                            />

                            {(loadout.yellow_tools.includes(tool) || vestiLoadout.yellow_tools == tool) && <div className="border" style = {{borderColor: "#f0cc7e"}}/>}
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default SkillToolList
