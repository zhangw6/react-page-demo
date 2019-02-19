import * as React from 'react';
import {TextField} from "../../ui-kit/text-field/TextField";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {sharedPageStore} from "../../store/pageStore";
import './ListPage.scss';
import {TextArea} from "../../ui-kit/text-area/TextArea";

interface CreatePage {
  pageTitle: string;
  pageContent: string;
}

interface States {
  fields: CreatePage;
  fieldErrors: Partial<CreatePage>;
}

@(withRouter as any)
export class ListPage extends React.Component<{}, States> {

  state: States = {
    fields: {pageTitle: '', pageContent: ''},
    fieldErrors: {},
  };

  private async setStateAsync(state: Partial<States>) {
    return new Promise((resolve) => {
      this.setState(state as any, () => resolve());
    });
  }

  get injectedProps() {
    return this.props as RouteComponentProps<void>;
  }


  updateField = async (name: string, value: string) => {
    const fields = {
      ...this.state.fields,
      [name]: value,
    };
    await this.setStateAsync({ fields });
  }


  private submitCreatePageForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    try {
      // TODO: should be a generic form validation function considering potential nested object structure in the future
      // TODO: unique title checking should be handled by backend
      if(this.state.fields.pageTitle === "") {
        this.setState({ fieldErrors: {pageTitle: 'Page Title cannot be empty'}});
        return;
      }
      // TODO: should call backend API here : await this.apiService.createNewPage({this.state.fields}).......
      sharedPageStore.addNewPage({
        title: this.state.fields.pageTitle,
        content: this.state.fields.pageContent,
        index: this.state.fields.pageTitle,
      });
    } catch (error) {
      if (error instanceof Response) {
        const fieldErrors = await error.json();
        this.setState({ fieldErrors });
      }
    }
  }

  public render() {

    return (
      <div className="listPage">
        <form onSubmit={this.submitCreatePageForm}>
          <TextField
            labelText="Page Title"
            name="title"
            value={this.state.fields.pageTitle}
            placeholder="Your title"
            onChange={async (value) => {
              await this.updateField('pageTitle', value);
            }}
            errorText={this.state.fieldErrors.pageTitle}
          />
          <TextArea
            labelText="Page Content"
            name="content"
            value={this.state.fields.pageContent}
            placeholder="Your Content"
            onChange={async (value) => {
              await this.updateField('pageContent', value);
            }}
            errorText={this.state.fieldErrors.pageContent}
          />
          <button
            type='submit'
          >
            create new page
          </button>
        </form>
      </div>
    );
  }
}

