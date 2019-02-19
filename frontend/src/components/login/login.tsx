import * as React from 'react';
import {TextField} from "../../ui-kit/text-field/TextField";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Container from "../Container/Container";
import './login.css'

interface LoginForm {
  username: string;
  password: string;
}

interface States {
  fields: Partial<LoginForm>;
  fieldErrors: Partial<LoginForm>;
}

@(withRouter as any)
export class Login extends React.Component<{}, States> {

  state: States = {
    fields: {},
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

  private submitLoginForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    try {

      // TODO: should call backend API here : await this.apiService.login({this.state.fields}).......
      localStorage.setItem('token', "asdadsadssd");
      this.injectedProps.history.push('/pages/');

    } catch (error) {
      // TODO: error should be handled by backend
      if (error instanceof Response) {
        const fieldErrors = await error.json();
        this.setState({ fieldErrors });
      }
    }
  }

  public render() {

    return (
      <Container>
        <form onSubmit={this.submitLoginForm} className="login">
          <TextField
            labelText="Username"
            name="username"
            value={this.state.fields.username}
            placeholder="fake login: Type anything here"
            onChange={async (value) => {
              await this.updateField('username', value);
            }}
          />
          <TextField
            labelText="Password"
            name="password"
            value={this.state.fields.password}
            placeholder="fake login: Type anything here"
            onChange={async (value) => {
            await this.updateField('password', value);
            }}
            secure
          />
          <button
            type='submit'
          >
            submit
          </button>
        </form>
      </Container>
  );
  }
}

