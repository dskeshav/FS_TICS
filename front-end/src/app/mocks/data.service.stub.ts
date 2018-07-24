import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {Questions} from '../model/questions';

export class DataServiceStub{
     deleteQues(Questions): Observable<Questions> {
        return Observable.of(Questions);
      }
      getQuestions(searchCriteria: string, source: string):Observable<Questions[]>{
          return Observable.of(Questions[0]);
      } 
}