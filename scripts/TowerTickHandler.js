function towerTickHandler(EID, eXP, API) {
    if (eXP > 1) {
        API.upgradeTowerRandomly(EID, eXP);
    }
}      