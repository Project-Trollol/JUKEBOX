import Matter from "matter-js";
import { Dimensions } from "react-native";
import Player from "../components/player";
import Block from "../components/object";
import Floor from "../components/floor";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Map = function() {
    let engine = Matter.Engine.create({enableSleeping: false})
    let world = engine.world

    world.gravity.y = 3

    return {
        physics: {engine, world},
        Block1: Block(world, 'gray', {x: 40, y: 40}, {height: 40, width: 40}),
        Block2: Block(world, 'gray', {x: 90, y: 90}, {height: 40, width: 100}),
        Block3: Block(world, 'gray', {x: 120, y: 40}, {height: 40, width: 90}),
        Block3: Block(world, 'gray', {x: 120, y: 40}, {height: 40, width: 20}),
        FloorTop: Floor(world, 'black', {x: width / 2, y: 0}, {height: 12, width: width}),
        FloorBottom: Floor(world, 'gray', {x: width / 2, y: height}, {height: 400, width: width}),
        FloorRight: Floor(world, 'black', {x: width, y: height / 2}, {height: height, width: 12}),
        FloorLeft: Floor(world, 'black', {x: 0, y: height / 2}, {height: height, width: 12})
    }
}

export default Map