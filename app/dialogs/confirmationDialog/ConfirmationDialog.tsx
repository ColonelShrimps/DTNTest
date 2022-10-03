import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

function ConfirmationDialog (props) {
	
        const {confirmationMessage, methodToExecute, hideDialog, visible, variable} = props;
        const footer = (
            <div>
                <Button label="submit" icon="pi pi-check" className="p-button-success" onClick={() => methodToExecute(variable)}/>
                <Button label="Cancel" icon="pi pi-times" className="p-button-danger" onClick={hideDialog} />
            </div>
        );
		return (
            <Dialog header="Confirmation" footer={footer} visible={visible} style={{width: '300px'}} modal={true} onHide={hideDialog}>
                <div>
                    <div>{confirmationMessage}</div>
                </div>
            </Dialog>
		)
}

export default ConfirmationDialog;