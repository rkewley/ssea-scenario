import {Unit, TaskOrg} from "../../components/taskorg/taskorg"
import {ENTITY_TYPE_MAP} from "../entitytypeservice/mock-entity-types"
import {StringMap} from "../../util/KeyedCollection"
import {Guid} from "../../util/Guid";

const taskOrgString: string = `{ "forceSides": [ { "forceName": "Friendly Forces", "forceId": "d4352d17-648d-46c5-9ab3-406c6680067d", "affiliations": [ { "affiliateHandle": "8c7c4de7-9629-4354-be61-78a17cbe37a6", "relationship": "HOSTILE" }, { "affiliateHandle": "1d1fde82-28d7-4056-b022-926929d272b3", "relationship": "NEUTRAL" } ], "subordinateUnits": [ { "unitName": "1st Squad", "unitId": "e9c2d1ab-495b-4d70-b8e1-584b318b7d2e", "milstd2525Symbol": "10231000121211000000", "subordinateEntities": [ { "entityName": "Squad Leader", "entityId": "9e2edd41-ccdc-4275-8a79-d482403c2d2a", "entityType": { "typeId": "Soldier", "milstd2525Symbol": "10231500001101030000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "e9c2d1ab-495b-4d70-b8e1-584b318b7d2e", "location": { "latitude": 41.34432797885935, "longitude": -74.01370380509951, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Squad Leader" } ], "subordinateUnits": [ { "unitName": "Fire Team 1", "unitId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b", "milstd2525Symbol": "10231000111211000000", "parentId": "e9c2d1ab-495b-4d70-b8e1-584b318b7d2e", "subordinateUnits": [], "subordinateEntities": [ { "entityName": "Fire Team Leader", "entityId": "acc11005-03f7-4fba-b83a-7f1b3b431a9a", "entityType": { "typeId": "Soldier", "milstd2525Symbol": "10231500001101030000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b", "location": { "latitude": 41.34517371780409, "longitude": -74.01432385934447, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 1/Fire Team Leader" }, { "entityName": "Rifleman", "entityId": "3fc3f9a3-e933-4e4a-a3f6-710d0ceabdeb", "entityType": { "typeId": "Soldier", "milstd2525Symbol": "10231500001101030000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b", "location": { "latitude": 41.34464211174966, "longitude": -74.01513074029543, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 1/Rifleman" }, { "entityName": "Automatic Rifleman", "entityId": "b35771f5-112f-4a96-a53f-4ba7180aa3f7", "entityType": { "typeId": "Automatic Rifleman", "milstd2525Symbol": "10231500001101030000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b", "location": { "latitude": 41.3437883111251, "longitude": -74.01227908814997, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 1/Automatic Rifleman" }, { "entityName": "Grenadier", "entityId": "c0e68fef-3f10-4df7-a677-0f2124cef5db", "entityType": { "typeId": "Grenadier", "milstd2525Symbol": "10231500001102010000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b", "location": { "latitude": 41.34506900786385, "longitude": -74.01343336595153, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 1/Grenadier" }, { "entityName": "SBS", "entityId": "ed6e99f5-8155-4370-95de-9fc2cf667251", "entityType": { "typeId": "SoldierBorneSensor", "milstd2525Symbol": "10230100001104001800", "acquireStandardName": "SoldierBorneSensor" }, "parentId": "c1197a6d-1faa-45d1-a87f-570c7dffe39b", "location": { "latitude": 41.34415882975222, "longitude": -74.01564572442629, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 1/SBS" } ], "fullUnitName": "Friendly Forces/1st Squad/Fire Team 1" }, { "unitName": "Fire Team 2", "unitId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793", "milstd2525Symbol": "10231000111211000000", "parentId": "e9c2d1ab-495b-4d70-b8e1-584b318b7d2e", "subordinateUnits": [], "subordinateEntities": [ { "entityName": "Fire Team Leader", "entityId": "b6ebeec6-dc96-4b38-bae6-883cf7cb79d6", "entityType": { "typeId": "Soldier", "milstd2525Symbol": "10231500001101030000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793", "location": { "latitude": 41.34376414679366, "longitude": -74.01299792016596, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 2/Fire Team Leader" }, { "entityName": "Rifleman", "entityId": "dfff895b-e28e-4eeb-9828-0b2be374e771", "entityType": { "typeId": "Soldier", "milstd2525Symbol": "10231500001101030000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793", "location": { "latitude": 41.34336946144285, "longitude": -74.01370824159244, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 2/Rifleman" }, { "entityName": "Automatic Rifleman", "entityId": "05e8f4bc-6d3e-47b9-921f-972df38ec5c7", "entityType": { "typeId": "Automatic Rifleman", "milstd2525Symbol": "10231500001101030000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793", "location": { "latitude": 41.34519788161247, "longitude": -74.0135214148865, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 2/Automatic Rifleman" }, { "entityName": "Grenadier", "entityId": "af2ee28c-6140-4334-b5b7-f418310561c7", "entityType": { "typeId": "Grenadier", "milstd2525Symbol": "10231500001102010000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "071cb6ae-70d2-409e-8c6a-a8ffb5f2d793", "location": { "latitude": 41.343756092014424, "longitude": -74.01223617280579, "altitude": 0 }, "fullEntityName": "Friendly Forces/1st Squad/Fire Team 2/Grenadier" } ], "fullUnitName": "Friendly Forces/1st Squad/Fire Team 2" } ], "fullUnitName": "Friendly Forces/1st Squad" } ] }, { "forceName": "Enemy Forces", "forceId": "8c7c4de7-9629-4354-be61-78a17cbe37a6", "affiliations": [ { "affiliateHandle": "d4352d17-648d-46c5-9ab3-406c6680067d", "relationship": "HOSTILE" }, { "affiliateHandle": "1d1fde82-28d7-4056-b022-926929d272b3", "relationship": "NEUTRAL" } ], "subordinateUnits": [ { "unitName": "UAV Team", "unitId": "d5734838-476c-435d-8a5e-886e49ced5a5", "subordinateUnits": [], "subordinateEntities": [ { "entityName": "Team Leader", "entityId": "e170277a-c34d-4eea-a7fd-1a525ca9e455", "entityType": { "typeId": "EnemySoldier", "milstd2525Symbol": "10261500001101020000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "d5734838-476c-435d-8a5e-886e49ced5a5", "fullEntityName": "Enemy Forces/UAV Team/Team Leader", "location": { "latitude": 41.368608397630005, "longitude": -74.06338239015196, "altitude": 0 } }, { "entityName": "Machine Gunner", "entityId": "8ce1be17-bc2f-4ef6-9f23-9e2415e14684", "entityType": { "typeId": "EnemyMachineGunner", "milstd2525Symbol": "10261500001102020000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "d5734838-476c-435d-8a5e-886e49ced5a5", "fullEntityName": "Enemy Forces/UAV Team/Machine Gunner", "location": { "latitude": 41.36865670784087, "longitude": -74.06289959252928, "altitude": 0 } }, { "entityName": "Ammo Bearer", "entityId": "cc0cee1e-163e-4afa-9770-b838cefd8507", "entityType": { "typeId": "EnemySoldier", "milstd2525Symbol": "10261500001101020000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "d5734838-476c-435d-8a5e-886e49ced5a5", "fullEntityName": "Enemy Forces/UAV Team/Ammo Bearer", "location": { "latitude": 41.368672811236515, "longitude": -74.06320536435697, "altitude": 0 } }, { "entityName": "UAV Pilot", "entityId": "2224849b-9b42-40db-a2dc-578105aed673", "entityType": { "typeId": "EnemySoldier", "milstd2525Symbol": "10261500001101020000", "acquireStandardName": "ICFullyLoaded_entity" }, "parentId": "d5734838-476c-435d-8a5e-886e49ced5a5", "fullEntityName": "Enemy Forces/UAV Team/UAV Pilot", "location": { "latitude": 41.36853593224649, "longitude": -74.06359160245512, "altitude": 0 } } ], "milstd2525Symbol": "10260100111103001809", "parentId": "8c7c4de7-9629-4354-be61-78a17cbe37a6", "fullUnitName": "Enemy Forces/UAV Team" } ] }, { "forceName": "Neutral Forces", "forceId": "1d1fde82-28d7-4056-b022-926929d272b3", "affiliations": [ { "affiliateHandle": "d4352d17-648d-46c5-9ab3-406c6680067d", "relationship": "NEUTRAL" }, { "affiliateHandle": "8c7c4de7-9629-4354-be61-78a17cbe37a6", "relationship": "NEUTRAL" } ], "subordinateUnits": [] } ], "graphics": [ { "Affiliation": "FRIEND", "graphicType": "Line", "line": { "waypoints": [ { "latitude": 41.3719943077882, "longitude": -73.9937156502686, "altitude": 0 }, { "latitude": 41.372139063163075, "longitude": -73.99393023754897, "altitude": 0 }, { "latitude": 41.37258984879672, "longitude": -73.9938529227295, "altitude": 0 }, { "latitude": 41.37088292754658, "longitude": -73.99623250872799, "altitude": 0 }, { "latitude": 41.36552043768075, "longitude": -74.00152719064323, "altitude": 0 }, { "latitude": 41.36206599021389, "longitude": -74.00623446812432, "altitude": 0 }, { "latitude": 41.357504075676765, "longitude": -74.00841644548791, "altitude": 0 }, { "latitude": 41.35290358917541, "longitude": -73.9997227356834, "altitude": 0 }, { "latitude": 41.34905685056122, "longitude": -74.0018990131054, "altitude": 0 }, { "latitude": 41.34481369847199, "longitude": -74.00659204073236, "altitude": 0 }, { "latitude": 41.34681600271864, "longitude": -74.0170066392626, "altitude": 0 }, { "latitude": 41.3448530902358, "longitude": -74.02255726128169, "altitude": 0 }, { "latitude": 41.34876872499585, "longitude": -74.02310097439084, "altitude": 0 }, { "latitude": 41.349824409072596, "longitude": -74.02886599500789, "altitude": 0 }, { "latitude": 41.353831464036546, "longitude": -74.03277847357816, "altitude": 0 }, { "latitude": 41.35544834017919, "longitude": -74.03679464938676, "altitude": 0 }, { "latitude": 41.35599905921697, "longitude": -74.04154931932226, "altitude": 0 }, { "latitude": 41.35124900684966, "longitude": -74.04478496117474, "altitude": 0 }, { "latitude": 41.34861611748559, "longitude": -74.05103763927877, "altitude": 0 }, { "latitude": 41.34601092550851, "longitude": -74.057082221739, "altitude": 0 }, { "latitude": 41.34380616205059, "longitude": -74.06491103152376, "altitude": 0 }, { "latitude": 41.34218823605759, "longitude": -74.07140035707044, "altitude": 0 }, { "latitude": 41.34131481736574, "longitude": -74.07885072357914, "altitude": 0 }, { "latitude": 41.33991148017582, "longitude": -74.08111678512938, "altitude": 0 }, { "latitude": 41.34114305362528, "longitude": -74.08722799583614, "altitude": 0 }, { "latitude": 41.346333926067146, "longitude": -74.08556291332332, "altitude": 0 }, { "latitude": 41.35034672027899, "longitude": -74.08378623449369, "altitude": 0 }, { "latitude": 41.35834471370628, "longitude": -74.07955049822829, "altitude": 0 }, { "latitude": 41.36330963233829, "longitude": -74.0771751380301, "altitude": 0 }, { "latitude": 41.366436110690636, "longitude": -74.07324087589978, "altitude": 0 }, { "latitude": 41.367952101545356, "longitude": -74.07231068786615, "altitude": 0 } ] }, "ObjectHandle": "55fc0a17-d4af-4504-b232-c393a02979d4", "Owner": "Fire Team 1", "SymbolIdentifier": "G*C*OGC---*****", "graphicName": "Road March1" }, { "graphicName": "AOI Hilltop", "ObjectHandle": "30fa826d-1a53-4198-8b88-39a929122722", "graphicType": "Circle", "circle": { "center": { "latitude": 41.368376497308695, "longitude": -74.06398099957028, "altitude": 0 }, "radiusMeters": 204.08694141742723 } }, { "graphicName": "UAVOut", "ObjectHandle": "52a4f334-fdc7-4fa6-8a74-32357a7aecf5", "graphicType": "Line", "line": { "waypoints": [ { "latitude": 41.368247670040596, "longitude": -74.07194178308106, "altitude": 0 }, { "latitude": 41.37109027936932, "longitude": -74.06802252114869, "altitude": 0 }, { "latitude": 41.37153350858889, "longitude": -74.06512249864193, "altitude": 0 }, { "latitude": 41.37122775877255, "longitude": -74.0641874715194, "altitude": 0 }, { "latitude": 41.37068851596459, "longitude": -74.06314515603634, "altitude": 0 }, { "latitude": 41.36986766701616, "longitude": -74.06361398805234, "altitude": 0 } ] } }, { "graphicName": "UAV Return", "ObjectHandle": "d1e74d01-8209-4481-b4da-a691a8dd4e0a", "graphicType": "Line", "line": { "waypoints": [ { "latitude": 41.36625080553641, "longitude": -74.06438868249512, "altitude": 0 }, { "latitude": 41.36456067208673, "longitude": -74.0679441825256, "altitude": 0 }, { "latitude": 41.366360517120135, "longitude": -74.07007760251611, "altitude": 0 }, { "latitude": 41.367773826728055, "longitude": -74.0703227473602, "altitude": 0 }, { "latitude": 41.36802383617786, "longitude": -74.07201466668698, "altitude": 0 } ] } }, { "graphicName": "Road March", "ObjectHandle": "cbb3be4d-6183-4a93-bd5f-40887f9f07f4", "graphicType": "Line", "line": { "waypoints": [ { "latitude": 41.34679427380634, "longitude": -74.01701014245606, "altitude": 0 }, { "latitude": 41.3449103240717, "longitude": -74.02247537530513, "altitude": 0 }, { "latitude": 41.348736568191654, "longitude": -74.02314805520626, "altitude": 0 }, { "latitude": 41.349876424357994, "longitude": -74.02889172853088, "altitude": 0 }, { "latitude": 41.35379670279966, "longitude": -74.0327077027664, "altitude": 0 }, { "latitude": 41.35559568739006, "longitude": -74.0368472877845, "altitude": 0 }, { "latitude": 41.356044180070825, "longitude": -74.0415778316364, "altitude": 0 }, { "latitude": 41.35111415286733, "longitude": -74.0448872411356, "altitude": 0 }, { "latitude": 41.34610383039189, "longitude": -74.05692745919077, "altitude": 0 }, { "latitude": 41.34211642465585, "longitude": -74.07131606034488, "altitude": 0 }, { "latitude": 41.34128257288518, "longitude": -74.07902534505274, "altitude": 0 }, { "latitude": 41.339963461382006, "longitude": -74.0811633736372, "altitude": 0 }, { "latitude": 41.34104382372542, "longitude": -74.08721056786112, "altitude": 0 }, { "latitude": 41.34648128340999, "longitude": -74.08551347710676, "altitude": 0 }, { "latitude": 41.36327689851095, "longitude": -74.07724057717644, "altitude": 0 }, { "latitude": 41.36639119693471, "longitude": -74.07331870393244, "altitude": 0 }, { "latitude": 41.36783059323947, "longitude": -74.07222924340817, "altitude": 0 } ] } } ] }`

export const MOCK_TASKORG: TaskOrg = JSON.parse(taskOrgString)