import React from "react";
import Matter from "matter-js";
import { Animated } from "react-native";

const Block = function(props) {
    const width = props.size.width
    const height = props.size.height
    const x = props.body.position.x - width / 2
    const y = props.body.position.y - height / 2

    const angle = props.body.angle

    const color = props.color

    return(
        <Animated.View style={{
            borderWidth: 3,
            borderColor: '#fff',
            borderStyle: 'solid',
            backgroundColor: color,
            position: 'absolute',
            left: x,
            top: y,
            width: width,
            height: height,
            transform: [{rotate: angle + "rad"}]
        }}/>
    )
}

export default (world, color, pos, size) => {
    const initBlock = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
    )
    Matter.Composite.add(world, initBlock)

    return {
        body: initBlock,
        color,
        size: size,
        pos,
        renderer: Block
    }
}