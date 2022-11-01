# TDCode-docs

- [Tips](#tips)
- [API Reference](#api-reference)
- [Properties / Options](#properties--options)
- [Upgradable Attributes](#upgradable-attributes)
- [Sample Scripts](#sample-scripts)

## Updates / Notes

- This is a work in progress & as of now will change daily/weekly
- When the docs are more stable there will be a more detailed note

## Tips

- Kill all zombies as fast as possible so you earn more [eXP](#exp) or take longer to earn more [INCOME](#income)

- When converting [eXP](#exp) to upgrade an Entity it's potential is the percentage of weight used in the upgrade. 
    - Example: `eXP of 1 with a potential of 77% is roughly the same upgrade as eXP of 0.77 with a potential of 100%`

- When converting [eXP](#exp) to upgrade an Entity, it's previous number of upgrades in that attribute will result in diminishing returns.    

- Spend [eXP](#exp) on an Entity with higher potential for a greater impact. i.e. `70-90%`


## API Reference

The following methods are used to control entities & make informed decisions during the game.

### upgradeEntity

*Type*: `Void`

*Arguments*: ( [EID](#eid) , [eXP](#exp), [ATTR](#attr) )

*Usage*: 
```jsx

    
    API.upgradeEntity(EID, eXP,'speed');
     

```


    
## Properties / Options

When an invalid or missing argument is used an exception will occure triggering a crash/restart of the game. This can be used to debug your scripts.

### EID 

*Type*: `String`

An entity's unique identifier. 

### eXP 

*Type*: `Number`

An Entity's currently unspent experience points. This can be saved for future use, converted or transfered. 

### XP LIFETIME
*Type*: `Number`


## Upgradable Attributes

When upgrading choose an attribute that will have the largest impact.

### HP
*Type*: `Number`
*Entities*: `Tower, Wall, Wind Turbine`

### HP RECOVERY
*Type*: `Number`
*Entities*: `Tower, Wall, Wind Turbine`

### DAMAGE
*Type*: `Number`
*Entities*: `Tower`

### RANGE
*Type*: `Number`
*Entities*: `Tower`

### SPEED
*Type*: `Number`
*Entities*: `Wind Turbine`

### INCOME

*Type*: `Number`
*Entities*: `Wind Turbine`

Currency rewarded for killing zombies and other rewarded events.



## Sample Scripts

- [Tags](scripts/tags.json)


tower tick: `
const upgradeRange = Math.random() > 0.27;        API.log(          `${EID}: Upgrading ${            upgradeRange ? 'range' : 'damage'          } with XP:${eXP}`,        );        if (upgradeRange) {          API.upgradeEntity(EID, eXP, 'range');        } else {          API.upgradeEntity(EID, eXP, 'damage');        }
`

wall tick: `
const upgradeHP = Math.random() > 0.27;        API.log(          `${EID}: Upgrading ${            upgradeHP ? 'hp' : 'hp_recovery'          } with XP:${eXP}`,        );        if (upgradeHP) {          API.upgradeEntity(EID, eXP, 'hp');        } else {          API.upgradeEntity(EID, eXP, 'hp_recovery');        }`

wind tick: `
if (Math.random() > 0.27) {          API.upgradeEntity(EID, eXP, 'speed');        } else {          API.upgradeEntity(EID, eXP,'income');        }`