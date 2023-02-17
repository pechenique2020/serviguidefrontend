export class Picture {
    id: number | undefined;
    photo: string | undefined;
    text: string | undefined;

    constructor(id: number, photo: string, text: string){
      this.id=id;
      this.photo=photo;
      this.text=text;
    };

}