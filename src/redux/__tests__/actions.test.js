import {
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_ERROR} from "../types";

import * as actions from '../action'

describe('actions test',()=>{
    it('should return types for get robot pending',()=>{
        expect(actions.pendingRequestRobots()).toEqual({
            type:REQUEST_ROBOTS_PENDING
        })
    })

    it('should return types for successful robot request',()=>{
        expect(actions.successRequestRobots(['user1'])).toEqual({
            type:REQUEST_ROBOTS_SUCCESS,
            payload: ['user1']
        })
    })

    it('should return types for error robot request',()=>{
        expect(actions.errorRequestRobots('errorrr')).toEqual({
            type:REQUEST_ROBOTS_ERROR,
            payload: 'errorrr'
        })
    })
})

describe('thunk testing',()=>{
    
    it('should handle the fetch of robots',()=>{
        const mockFetch = jest.fn().mockReturnValue(
            Promise.resolve({
                json:()=>Promise.resolve({
                    name:"janny bone",
                    email:"jane@gmail.com"
                })
            })
        )
        const dispatch = jest.fn();
        const getState = jest.fn();
        expect.assertions(5)
        return actions.requestRobots(mockFetch)(dispatch,getState).then(data=>{

            expect(dispatch).toBeCalledWith({type: "REQUEST_ROBOTS_PENDING"});
            expect(dispatch).toBeCalledWith(
                {
                    type:REQUEST_ROBOTS_SUCCESS,
                    payload:{ name: 'janny bone', email: 'jane@gmail.com' }
                }
                );
            expect(data).toEqual({ name: 'janny bone', email: 'jane@gmail.com' });
            expect(mockFetch.mock.calls.length).toBe(1);
            expect(mockFetch).toBeCalledWith('https://jsonplaceholder.typicode.com/users')
        }).catch()
    })
})