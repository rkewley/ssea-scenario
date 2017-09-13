import { Injectable } from "@angular/core"
import { MOCK_TASKORG} from "./mock-taskorg"
import {Unit, TaskOrg} from "../../components/taskorg/taskorg"
import {StringMap} from "../../util/KeyedCollection"


@Injectable()
export class TaskOrgService {

  public getTaskOrg(): Promise<TaskOrg> {
    return Promise.resolve(MOCK_TASKORG)
  }
}
