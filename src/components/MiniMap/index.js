import React, { useContext } from 'react'
import mini_map from '../../asset/mini-map/1.png'
import './style.css'

import ControlContext from '../../context/ControlContext'

const MiniMap = () => {
    const { setControl } = useContext(ControlContext)
    return (
        <div className='mini-map__container'>
            <img src={mini_map} />
            <button className='mini-map__btn screen_cam'
                onClick={() => setControl(s => ({ ...s, cameraPosition: [0, 100, 400] }))}
            ></button>
            <button className='mini-map__btn warehouse_mid'
                onClick={() => setControl(s => ({ ...s, cameraPosition: [0, 0, 0] }))}
            ></button>
            <button className='mini-map__btn warehouse_dock_door'
                onClick={() => setControl(s => ({ ...s, cameraPosition: [0, 0, -800] }))}
            ></button>
        </div>
    )
}

export default MiniMap