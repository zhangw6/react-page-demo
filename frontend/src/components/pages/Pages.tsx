import * as React from 'react';
import {pageContent} from "../../constants";
import Page from "../page/Page";
import {PageTab} from "./page-tab/PageTab";
import {ListPage} from "../list-page/ListPage";
import {observer} from "mobx-react";
import {sharedPageStore} from "../../store/pageStore";
import './Pages.css';
import Container from "../Container/Container";

interface State {
  activePageIndex: string;
}

@observer
export class Pages extends React.Component<{}, State> {

  state: State = {
    activePageIndex: pageContent[0].index,
  }

  private togglePage = (toPageIndex: string) => {
    this.setState({activePageIndex: toPageIndex});
  }


  public render() {
    const pages = sharedPageStore.getPages();
    return (
      <Container>
      <div className="pages">
        <div className="pageTabs'">
          <PageTab
            pageContent={pages}
            togglePage={this.togglePage}
            activePageIndex={this.state.activePageIndex}
          />
        </div>
        {
          pages.map(
            (pageElement: any) =>
              <Page
                title={pageElement.title}
                content={pageElement.content}
                pageIndex={pageElement.index}
                activePageIndex={this.state.activePageIndex}
                key={pageElement.index}
              />
          )
        }
      </div>
        <ListPage/>
      </Container>
    );
  }
}

