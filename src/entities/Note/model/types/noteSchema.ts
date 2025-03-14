export interface INote {
  _id: number;
  text: string;
  textColor?: string;
  backgroundColor?: string;
}

export interface NoteSchema {
  list: INote[];
}
