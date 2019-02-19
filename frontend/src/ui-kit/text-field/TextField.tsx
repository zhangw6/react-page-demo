import * as React from 'react';
import './TextField.css';

interface Props {
  secure?: boolean;
  name: string;
  placeholder: string;
  value?: string;
  readOnly?: boolean;
  labelText: string;
  onChange(value: string): void;
  errorText?: string;
}


export class TextField extends React.Component<Props, {}> {
  public render() {

    const {secure, value, name, placeholder, labelText, onChange, readOnly, errorText} = this.props;

    return (
      <div className="textField">
        <label>
          {labelText}
        </label>
        <input
          type={secure ? 'password' : 'text'}
          name={name}
          onChange={(event: any) => onChange(event.target.value)}
          placeholder={placeholder}
          value={value}
          readOnly={readOnly}
        />
        <br/>
        {errorText && (
          <div style={{ color: 'red' }}>{errorText}</div>
        )}
      </div>
    );
  }
}

