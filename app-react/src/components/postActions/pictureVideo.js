import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import {AxiosInstance as axios} from "axios";

library.add(faImage);

export default class PictureVideo extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    };

    uploadHandler = () => {
        const formData = new FormData();
        formData.append(
            'myFile',
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        axios.post('localhost:3000/file-upload', formData, {
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded / progressEvent.total)
            }
        })
    };

    render() {
        return (
            <div>
                <button type="button" id="Popover1" className="btn btn-warning pj">
                    <FontAwesomeIcon icon="image" />&nbsp;Photo/Vidéo
                </button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                    <PopoverHeader>Envoyer une image</PopoverHeader>
                    <PopoverBody>
                        <input type="file" onChange={this.fileChangedHandler}/>
                        <button onClick={this.uploadHandler}>Envoyer</button>
                        </PopoverBody>
                </Popover>
            </div>
        );
    }
}