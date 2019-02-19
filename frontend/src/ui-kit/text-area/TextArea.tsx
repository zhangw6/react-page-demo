import * as React from 'react';
import './TextArea.css';

interface Props {
  name: string;
  placeholder: string;
  value?: string;
  labelText: string;
  onChange(value: string): void;
  errorText?: string;
}


export class TextArea extends React.Component<Props, {}> {
  public render() {

    const {value, name, placeholder, labelText, onChange, errorText} = this.props;

    return (
      <div className="textArea">
        <label>
          {labelText}
        </label>
        <textarea
          name={name}
          onChange={(event: any) => onChange(event.target.value)}
          placeholder={placeholder}
          value={value}
        />
        <br/>
        {errorText && (
          <div style={{ color: 'red' }}>{errorText}</div>
        )}
      </div>
    );
  }
}

