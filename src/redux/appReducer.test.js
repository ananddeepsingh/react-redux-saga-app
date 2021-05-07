import reducer from './appReducer';

describe('todo reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      [
        {
          id: 0.11,
          name: 'Apple'
        }
      ]
    )
  })

  it('should return the same state if action type not exists', () => {
    expect(reducer([], {
      action: "ADD_TODO",
      payload: {
        id: 222,
        name: "Not Exist"
      }
    })).toEqual([])
  })

  it('should return the ADD_TODO', () => {
    expect(reducer([], {
      type: "ADD_TODO_SAGA",
      payload: {
        id: 1,
        name: 'anand'
      }
    })).toEqual(
      [
        {
          id: 1,
          name: 'anand'
        }
      ]
    )
  })

  it('should add in the existing state when using ADD_TODO_SAGA', () => {
    expect(reducer([
      {
        id: 0,
        name: 'Use Redux'
      }
    ], {
      type: "ADD_TODO_SAGA",
      payload: {
        id: 1,
        name: 'Run the tests'
      }
    })).toEqual(
      [
        {
          id: 0,
          name: 'Use Redux'
        },
        {
          id: 1,
          name: 'Run the tests'
        }
      ]
    )
  })

  it('should delete the task when using DELETE_TODO_SAGA', () => {
    expect(reducer([{
      id: 1,
      name: 'Run the tests'
    }], {
      type: "DELETE_TODO_SAGA",
      payload: 1
    })).toEqual(
      [

      ]
    )
  })

  it('should return the single DELETE_TODO', () => {
    expect(reducer([{
      id: 1,
      name: 'Run the tests'
    },
    {
      id: 2,
      name: 'Delete the tests'
    }], {
      type: "DELETE_TODO_SAGA",
      payload: 2
    })).toEqual(
      [
        {
          id: 1,
          name: 'Run the tests'
        }
      ]
    )
  })

  it('should update the existing TODO', () => {
    expect(reducer([{
      id: 1,
      name: 'Run the tests'
    },
    {
      id: 2,
      name: 'Run my tests'
    }], {
      type: "UPDATE_TODO_SAGA",
      payload: {
        id: 2,
        name: "Update the test"
      }
    })).toEqual(
      [{
        id: 1,
        name: 'Run the tests'
      },
      {
        id: 2,
        name: 'Update the test'
      }]
    )
  })

})
