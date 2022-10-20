# TDCode-docs

- [Tips](#tips)
- [API Reference](#api-reference)
- [Properties / Options](#properties--options)
- [Upgradable Attributes](#upgradable-attributes)
- [Sample Scripts](#sample-scripts)

## Tips

- Kill all zombies as fast as possible so you earn more [eXP](#exp) or take longer to earn more [INCOME](#income)

- When converting [eXP](#exp) to upgrade an Entity it's potential is the percentage of weight used in the upgrade. 
    - Example: `eXP of 1 with a potential of 77% is roughly the same upgrade as eXP of 0.77 with a potential of 100%`

- When converting [eXP](#exp) to upgrade an Entity, it's previous number of upgrades in that attribute will result in diminishing returns.    

- Spend [eXP](#exp) on an Entity with higher potential for a greater impact. i.e. `70-90%`


## API Reference

The following methods are used to control entities & make informed decisions during the game.

### getZombies

*Type*: `Array`

*Arguments*: ( )

*Usage*: 
```jsx
function wallTickHandler(EID, eXP, API) {
    const zombies = API.getZombies()
    if (eXP > 1 && zombies.length > 7) {
        API.upgradeWallRandomly(EID, eXP);
    }  
} 

```

### getTags

*Type*: `Array`

*Arguments*: ( [EID](#eid) )

*Usage*: 
```jsx
function wallTickHandler(EID, eXP, API) {
    const eTags = API.getTags(EID)
    if (eXP > 1 && eTags.includes('spend')) {
        API.upgradeWallRandomly(EID, eXP);
    }  
} 

```

### upgradeWallRandomly

*Type*: `Void`

*Arguments*: ( [EID](#eid) , [eXP](#exp) )

*Usage*: 
```jsx
function wallTickHandler(EID, eXP, API) {
    if (eXP > 1) {
        API.upgradeWallRandomly(EID, eXP);
    }  
}  
```

### upgradeTowerRandomly

*Type*: `Void`

*Arguments*: ( [EID](#eid) , [eXP](#exp) )

*Usage*: 
```jsx
function towerTickHandler(EID, eXP, API) {
    if (eXP > 1) {
        API.upgradeTowerRandomly(EID, eXP);
    }
}      
```
    
## Properties / Options

When an invalid or missing argument is used an exception will occure triggering a crash/restart of the game. This can be used to debug your scripts.

### EID 

*Type*: `String`

An entity's unique identifier. 

### eXP 

*Type*: `Number`

An Entity's currently unspent experience points. This can be saved for future use, converted or transfered. 

### INCOME

*Type*: `Number`

Currency rewarded for killing zombies and other rewarded events.

## Upgradable Attributes

When upgrading choose an attribute that will have the largest impact.

### HP
*Type*: `Number`

### HP RECOVERY
*Type*: `Number`

### XP LIFETIME
*Type*: `Number`

### DAMAGE
*Type*: `Number`

### RANGE
*Type*: `Number`



## Sample Scripts

- [Tags](scripts/tags.json)

- [Tower Tick Handler](scripts/TowerTickHandler.js)

- [Wall Tick Handler](scripts/WallTickHandler.js)
