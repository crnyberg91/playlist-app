export interface Track{
    id: number;
    track: string;
    artist: string;
    img: string;
    isAdded: boolean;
}


type Actions = 
  |  {type: 'add'; payload: string}
  |  {type: 'remove'; payload: number}
//   |  {type: 'done'; payload: number};
