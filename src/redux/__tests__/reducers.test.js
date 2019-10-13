import {
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_ERROR} from '../types'

import * as reducers from '../reducers'

describe('requestRobots',()=>{

    const initialState = {
        error: null, 
        isPending: false,
        robots: [],
        }

    it('should return the initial state',()=>{
        expect(reducers.requestRobots(undefined,{})).toEqual(initialState)
    })

    it('should handle REQUEST_ROBOTS_PENDING',()=>{
        expect(reducers.requestRobots(initialState,{type:REQUEST_ROBOTS_PENDING})).toEqual({
            "error": null, 
            "isPending": true,
            "robots": [],
            })
    })

    it('should handle REQUEST_ROBOTS_SUCCESS',()=>{
        expect(reducers.requestRobots(initialState,{type:REQUEST_ROBOTS_SUCCESS,payload:["abc"]})).toEqual({
            "error": null, 
            "isPending": false,
            "robots": ["abc"],
            })
    })

    it('should handle REQUEST_ROBOTS_ERROR',()=>{
        expect(reducers.requestRobots(initialState,{type:REQUEST_ROBOTS_ERROR,payload:"something happened"})).toEqual({
            "error": "something happened", 
            "isPending": false,
            "robots": [],
            })
    })
})