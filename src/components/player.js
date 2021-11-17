import React from "react";
import Matter from "matter-js";
import { Animated } from "react-native";

const Player = function(props) {
    const width = props.size.width
    const height = props.size.height
    const x = props.body.position.x - width / 2
    const y = props.body.position.y - height / 2

    const angle = props.body.angle

    return(
        <Animated.View style={{
            borderWidth: 3,
            borderColor: '#fff',
            borderStyle: 'solid',
            backgroundColor: 'gray',
            position: 'absolute',
            left: x,
            top: y,
            width: width,
            height: height,
            transform: [{rotate: angle + "rad"}]
        }}/>
    )
}

export default (world, pos, size) => {
    const initPlayer = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
    )
    Matter.Composite.add(world, initPlayer)

    return {
        body: initPlayer,
        size: size,
        pos: pos,
        renderer: Player
    }
}