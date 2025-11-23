import { getImgUrl } from '../helper';
import '../styles/SkillToolList.css'

interface Props
{
    updateLoadout: (item: string, category: string) => void;
}

function SkillToolList({updateLoadout}:Props) 
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
                        <div className="category_item">
                            <img key={i} src={getImgUrl(skill, 'skills')} onClick={() => {updateLoadout(skill, "skills")}}/>
                        </div>)}
                </div>

                <div className ="heading">
                    <img src="src/assets/headings/red_tool_heading.png"/>
                </div>

                <div className ="category">
                    {redTools.map((tool, i) => 
                        <div className="category_item">
                            <img key={i} src={getImgUrl(tool, 'red_tools')} onClick={() => {updateLoadout(tool, "red_tools")}}/>
                        </div>)}
                </div>

                <div className ="heading">
                    <img src="src/assets/headings/blue_tool_heading.png"/>
                </div>
                
                <div className ="category">
                    {blueTools.map((tool, i) => 
                        <div className="category_item">
                            <img key={i} src={getImgUrl(tool, 'blue_tools')} onClick={() => {updateLoadout(tool, "blue_tools")}}/>
                        </div>)}
                </div>

                <div className ="heading">
                    <img src="src/assets/headings/yellow_tool_heading.png"/>
                </div>

                <div className ="category">
                    {yellowTools.map((tool, i) => 
                        <div className="category_item">
                            <img key={i} src={getImgUrl(tool, 'yellow_tools')} onClick={() => {updateLoadout(tool, "yellow_tools")}}/>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default SkillToolList
