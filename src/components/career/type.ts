export interface CareerBlock {
    title: string;
    btnName?: string;
    section?:Array<BoxSection>;
    id:string;
  }
  
  export interface BoxSection {
    date: string;
    sectionTitle: string;
    setTitle?: string;
    sectionContents?:Array<string>;
    sectionLink?:string;
    tag?: Array<string>;
    subheadings?: string;
    list?: Array<BoxList>;
  }

  export interface BoxList {
    title: string;
    date: string;
    contents: Array<string>;
  }