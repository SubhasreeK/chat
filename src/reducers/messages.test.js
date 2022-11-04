import messages from './messages';
import * as types from '../constants/ActionTypes';

describe('Message reducer',() =>{
    it('should return the initial state, empty',()=>{
        expect(messages(undefined,{})).toEqual([])
    })

    it('should handle ADD_MESSAGE and store every message',() =>{
        expect(messages([],{
            type : types.ADD_MESSAGE,
            message : 'Hey',
            author : 'Subha'
        })
        ).toEqual([
            {
                message : 'Hey',
                author : 'Subha'
            }
        ])
      expect(
          messages(
              [
                  {
                      message :'Hey',
                      author :'Subha'
                  }
              ],
              {
                  type: types.ADD_MESSAGE,
                  message : 'Hey again',
                  author : 'Me again'
              }
          )
      ).toEqual([
          {
              message :'Hey',
              author : 'Subha'
          },
          {
              message: 'Hey again',
              author : 'Me again'
          }
      ])
    })
})