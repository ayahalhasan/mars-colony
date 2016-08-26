export interface IEncounters {
  data: number;
  atype: string;
  action: string;
}

export interface IAlien {
  type: string;
  descrption: string;
}

export interface IOccupation {
  descrption: string;
  type: string;
}



export class Colonist {
  constructor(
  public name: string,
  public age: string,
  public job: string
){}
}
