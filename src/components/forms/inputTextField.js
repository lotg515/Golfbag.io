import React from 'react';

class InputTextField extends React.Component {
    render() {
        return(
            <div>
                <label 
                    htmlFor={this.props.name} 
                    class="flex text-sm mx-2 w-full pb-1 font-semibold text-gray-700">
                    {this.props.label}
                </label>
                <input
                    onBlur={this.props.onBlur}
                    onChange={this.props.onChange} 
                    type="text" 
                    name={this.props.name}
                    id={this.props.id}
                    placeholder={this.props.placeholder} 
                    class="w-full py-2 px-3 text-gray-700 rounded-md"
                    value={this.props.value}
                    />
              
            </div>

        )
    }
}

export default InputTextField;