import drumerReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './drumerSlice';

describe('drum reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(drumerReducer(undefined, { type: 'unknown' })).toEqual({
      status: 'idle',
      power: true,
      bank: true,
    });
  });

  it('should handle increment', () => {
    const actual = drumerReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = drumerReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = drumerReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
