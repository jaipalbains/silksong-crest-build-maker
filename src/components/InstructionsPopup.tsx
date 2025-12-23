import { useState } from 'react'
import '../styles/InstructionsPopup.css'


function InstructionsPopup()
{
  const [visible, setVisibility] = useState(false)
  
  return(
    <div className="instructions">
      <button className="instructions-btn" onClick={() => setVisibility(true)}>Instructions</button>

      {visible ? (
        <div className="popup">
          <button className="close-btn" onClick={() => setVisibility(false)}>X</button>
          
          <div>
            <p>Select an skill/tool from the list to equip it.</p>
            <p>Unequip skill/tool by selecting its icon on the crest or from the list.</p><br/>
            <p>Key mappings to switch crests:</p>
            <p>
              <table>
                <tr><td>Hunter:</td>&emsp;<td><kbd>1</kbd></td></tr>
                <tr><td>Reaper:</td>&emsp;<td><kbd>2</kbd></td></tr>
                <tr><td>Wanderer:</td>&emsp;<td><kbd>3</kbd></td></tr>
                <tr><td>Beast:</td>&emsp;<td><kbd>4</kbd></td></tr>
                <tr><td>Witch:</td>&emsp;<td><kbd>5</kbd></td></tr>
                <tr><td>Architect:</td>&emsp;<td><kbd>6</kbd></td></tr>
                <tr><td>Shaman:</td>&emsp;<td><kbd>7</kbd></td></tr>
              </table>
            </p>
          </div>
          
        </div>
      ) : null}
    </div>
  );
}

export default InstructionsPopup
