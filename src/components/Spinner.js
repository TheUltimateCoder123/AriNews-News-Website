// import React, { Component } from 'react';
import Loading from './Loading.gif'

import React from 'react'

function Spinner() {
    return (
        <div className="container text-center">
             <img src={Loading} alt="" className="my-3"/>
        </div>
    )
}

export default Spinner

