

import {EntityType} from "../../components/taskorg/taskorg"
import {StringMap} from "../../util/KeyedCollection"

const entityTypes = new StringMap<EntityType>()
const soldier: EntityType = {
  typeId: "Soldier",
  milstd2525Symbol: "10231500001101030000",
  acquireStandardName: "ICFullyLoaded_entity",
  entityTypeData: undefined
}
entityTypes.Add("Soldier", soldier)

const grenadier: EntityType = {
  typeId: "Grenadier",
  milstd2525Symbol: "10231500001102010000",
  acquireStandardName: "ICFullyLoaded_entity",
  entityTypeData: undefined
}
entityTypes.Add("Grenadier", grenadier)

const ar: EntityType = {
  typeId: "Automatic Rifleman",
  milstd2525Symbol: "10231500001101030000",
  acquireStandardName: "ICFullyLoaded_entity",
  entityTypeData: undefined
}
entityTypes.Add("Automatic Rifleman", ar)

const sbs: EntityType = {
  typeId: "SoldierBorneSensor",
  milstd2525Symbol: "10230100001104001800",
  acquireStandardName: "SoldierBorneSensor",
  entityTypeData: undefined
}
entityTypes.Add("SoldierBorneSensor", sbs)

const enemySoldier: EntityType = {
  typeId: "EnemySoldier",
  milstd2525Symbol: "10261500001101020000",
  acquireStandardName: "ICFullyLoaded_entity",
  entityTypeData: undefined
}
entityTypes.Add("Enemy Soldier", enemySoldier)


const enemyMachineGunner: EntityType = {
  typeId: "EnemyMachineGunner",
  milstd2525Symbol: "10261500001102020000",
  acquireStandardName: "ICFullyLoaded_entity",
  entityTypeData: undefined
}
entityTypes.Add("Enemy Machine Gunner", enemyMachineGunner)
export const ENTITY_TYPE_MAP: StringMap<EntityType> = entityTypes
