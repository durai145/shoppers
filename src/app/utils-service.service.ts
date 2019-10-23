import { Link } from './link';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  constructor() { }

  static jsonStringify(input: Array<Link>) {
    return JSON.stringify(input).replace(/\"/g, '\'');
  }

  static jsonParse(inputJson: string) {
    return  JSON.parse(inputJson.replace(/'/g, '\"'));
  }
}
