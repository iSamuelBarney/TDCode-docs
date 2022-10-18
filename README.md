# TDCode-docs

- [API Reference](#api-reference)
- [Properties / Options](#properties--options)
- [Tips](#tips)
- [Sample Scripts](#sample-scripts)

## API Reference

The following methods are used to control entities & make informed decisions during the game.

#### upgradeWallRandomly

Arguments: [EID](#eid) [eXP](#exp)

Usage: 
```jsx
function wallTickHandler(EID, eXP, API) {
    if (eXP > 1) {
        API.upgradeWallRandomly(EID, eXP);
    }  
}  
```

#### upgradeTowerRandomly

Arguments: [EID](#eid) [eXP](#exp)

Usage: 
```jsx
function towerTickHandler(EID, eXP, API) {
    if (eXP > 1) {
        API.upgradeTowerRandomly(EID, eXP);
    }
}      
```
    
## Properties / Options

When an invalid or missing argument is used an exception will occure triggering a crash/restart of the game. This can be used to debug your scripts.

#### EID 

Type: `String`

An entity's unique identifier. 

#### eXP 

Type: `Number`

An Entity's currently unspent experience points. This can be saved for future use, converted or transfered. 

## Tips

- When converting [eXP](#exp) to upgrade an Entity it's potential is the percentage of weight used in the upgrade. 
    - Example: `eXP of 1 with a potential of 77% is roughly the same upgrade as eXP of 0.77 with a potential of 100%`

- When converting [eXP](#exp) to upgrade an Entity it's number of previous upgrades in that attribute will have diminishing returns.

- Spend this on an Entity with higher potential. i.e. `70-90%`

## Sample Scripts

- [Tower Tick Handler](scripts/TowerTickHandler.js)

- [Wall Tick Handler](scripts/WallTickHandler.js)
