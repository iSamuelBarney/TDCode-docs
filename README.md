# TDCode-docs

- [API Reference](#api-reference)
- [Properties / Options](#properties--options)
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

An entity's currently unspent experience points. This can be saved for future use, converted or transfered. 

## Sample Scripts

- [Tower Tick Handler](scripts/TowerTickHandler.js)

- [Wall Tick Handler](scripts/WallTickHandler.js)
