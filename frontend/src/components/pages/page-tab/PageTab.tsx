import * as React from 'react';
import './PageTab.css';
import {classNames} from "../../../utils";

interface Props {
   pageContent: any //should define this data structure in constants.ts
   togglePage: (toPageIndex: string) => void;
   activePageIndex: string;
}


export class PageTab extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="pageTab">
        {
          this.props.pageContent.map(
            (pageElement: any) =>
              <div
                key={pageElement.index}
                onClick={() => this.props.togglePage(pageElement.index)}
                className={pageElement.index !== this.props.activePageIndex ?
                  'basicTabElem'
                  :
                  classNames('basicTabElem','activeTabElem')}
              >
                {pageElement.title}
              </div>
          )
        }
      </div>
    );
  }
}

