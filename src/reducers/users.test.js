import users from './users'
import * as types from '../constants/ActionTypes'

describe('Users reducer',() => {
    it('should return the initial state, empty', () =>{
        expect(users(undefined,{})).toEqual([])
    })

    it('should handle ADD_USER and store every user', () => {
        expect(
            users([],{
                type: types.ADD_USER,
                name: 'Subha'
            })
        ).toEqual([
            {
                name: 'Tony'
            }
        ])
        expect(
            users(
                [
                    {
                        name:'Hari'
                    }
                ],
                {
                    type: types.ADD_USER,
                    name : 'Subha'
                }
            )
        ).toEqual([
            {
                name : 'Hari',
            },
            {
                name : 'Subha'
            }
        ])
    })
})