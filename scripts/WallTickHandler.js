function wallTickHandler(EID, eXP, API) {
    if (eXP > 1) {
        API.upgradeWallRandomly(EID, eXP);
    }
}  