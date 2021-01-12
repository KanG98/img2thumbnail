import React from 'react'
import * as HttpService from '../service';

// returns the html input (file, multiple) element
function fileSelector(){                
    const fileSelector = document.createElement('input'); 
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');

    return fileSelector;
}

export class chooseFileBtn extends React.Component {
    state = {
        file: null
    }
    
    render() {
        return (
            <div>
                <input type="file" accept="image/png, image/jpeg" onChange={this.handleSelectFile}></input>
                <button onClick={this.handleSubmit}>submit</button>

            </div>
        )
    }

    handleSelectFile = (event) => {
        console.log(event);
        this.setState({ file: event.target.files });
    }

    handleSubmit = async () => {
        let formData = new FormData();
        formData.append( 
            "temp", 
            this.state.file[0],
            this.state.file[0].name 
          );
        await HttpService.uploadFile(formData);
    }
}

export default chooseFileBtn
