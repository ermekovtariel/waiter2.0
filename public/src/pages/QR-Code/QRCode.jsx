import React, { Component } from 'react'

import QrReader from 'react-camera-qr'


export default class Test extends Component {
    state = {
        result: 'Отсканируйте QR-code'
    }

    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
        }
    }
    handleError = err => {
        console.error(err)
    }
    render() {
        return (
            <div>
                <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{
                        width: '300px',
                        height: '300px',
                        margin: '0 auto'
                    }}
                />
                <p style={{textAlign:'center'}}>
                    {this.state.result}
                </p>
            </div>
        )
    }
}
/*https://github.com/ermekovtariel/waiter2.0.git*/