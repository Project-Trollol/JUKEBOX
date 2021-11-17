import React from "react";
import Matter from "matter-js";
import { View } from "react-native";

const Floor = props => {
    const width = props.size.width
    const height = props.size.height
    
    const x = props.body.position.x - width / 2
    const y = props.body.position.y - height / 2

    const color = props.color;

    return(
        <View style={{
            backgroundColor: color,
            position: 'absolute',
            left: x,
            top: y,
            width: width,
            height: height
        }}/>
    )
}

export default (world, color, pos, size) => {
    const initFloor = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        { isStatic: true }
    )
    Matter.World.add(world, initFloor)

    return {
        body: initFloor,
        color,
        pos,
        size: size,
        renderer: Floor
    }
}