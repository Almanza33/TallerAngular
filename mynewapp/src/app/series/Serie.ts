export class Serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  resumen: string;
  linkSerie: string;
  imagen: string;

  public constructor(id:number, name: string, channel: string, season: number, resumen: string, linkSerie: string, imagen: string) {

      this.id = id
      this.name = name;
      this.channel = channel;
      this.seasons = season;
      this.resumen = resumen;
      this.linkSerie = linkSerie;
      this.imagen = imagen;

  }
}
