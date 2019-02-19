import { observable } from 'mobx';
import {Page, pageContent} from "../constants";

export class PageStore {

  constructor() {
    this.setPages(pageContent);
  }

  @observable
  private pages = new Map<Page['index'], Page>();

  addNewPage(newPage: Page){
    this.pages.set(newPage.index, newPage);
  }

  setPages(newPages: Page[]){
     newPages.forEach(
       (newPage: Page) => {
         this.pages.set(newPage.index, newPage);
       }
     )
  }

  getPages() {
    return Array.from(this.pages.values());
  }

}

export const sharedPageStore = new PageStore();


