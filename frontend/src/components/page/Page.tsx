import * as React from 'react';
import './Page.css';


interface Props {
    pageIndex: string;
    activePageIndex: string;
    title: string;
    content: React.ReactNode;
}


class Page extends React.Component<Props, {}> {
  public render() {
    const {content, activePageIndex, title, pageIndex} = this.props;

    if (activePageIndex !== pageIndex) {
         return null;
    }

    return (
        <div className="page">
          <h1>{title}</h1>
          <p className="pageParagraph">{content}</p>
        </div>
    );
  }
}

export default Page;
