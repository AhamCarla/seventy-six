import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResultBody from './components/ResultBody'
import {ArmorPerks, WeaponPerks, PowerArmorPerks} from './utils/Perks.js'
import legendaryCore from './assets/legendaryCore.webp'
import legendaryModule from './assets/legendaryModule.webp'
import lucky from './assets/lucky.webp'

function groupBy(arr, prop) {
  return arr.reduce((groups, item) => {
      const key = item[prop];
      (groups[key] = groups[key] || []).push(item);
      return groups;
  }, {});
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const groupedPerks = groupBy(WeaponPerks, 'level');

function getNextPerks() {
  const perks = [];
  for (const level in groupedPerks) {
      perks.push(randomChoice(groupedPerks[level]));
  }
  return perks;
}

const images = new Array(10).fill(lucky)

function App() {
  const [perks, setPerks] = useState(null)
  const [key, setKey] = useState(Date.now())
  const [cores, setCores] = useState(0)
  const [modules, setModules] = useState(0)

  const updatePerks = () => {
    setPerks(getNextPerks)
    setKey(Date.now)
    setCores(cores + 5)
    setModules(modules + 4)
  }

  return (
    <>
      <div className='title'>
        <h1>Legendary Seventy-Six!</h1>
      </div>
      <div className='mainContent'>
        <div className='statistics'>
          You have used:
          <div className='stat-detail'>
            <div className='number'>
              {cores}
            </div>
            <div className='icon'>
              <img src={legendaryCore} style={{width: '50px', height: '50px'}}></img>
            </div>
          </div>
          <div className='stat-detail'>
            <div className='number'>
              {modules}
            </div>
            <div className='icon'>
                <img src={legendaryModule} style={{width: '50px', height: '50px'}}></img>
            </div>
          </div>
        </div>
        <div className='resultBody'>
          {perks ? <ResultBody key={key} perks={perks}></ResultBody> : 'Click the button and start crafting!'}
        </div>
        <div className='regenerate-btn'>
          <button onClick={updatePerks}>Craft!</button>
        </div>
      </div>
      <div className='footer'>
        Ver: 0.0.1. All Rights Reserved.
      </div>
    </>
  )
}

export default App
