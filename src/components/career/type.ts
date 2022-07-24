export interface CareerBlock {
    title: string;
    btnName?: string;
    section?:Array<BoxSection>
  }
  
  export interface BoxSection {
    date: string;
    sectionTitle: string;
    setTitle?: string;
    tag?: Array<string>;
    subheadings?: string;
    list?: Array<BoxList>;
  }

  export interface BoxList {
    title: string;
    date: string;
    contents: Array<string>;
  }