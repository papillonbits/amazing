import {
  contextSetNavigationAction,
  contextSetProgressAction,
  uiSetListShowsEditAction,
  uiSetListShowsSortAction,
  uiSetListShowsSearchAction,
  uiSetListShowsPaginationAction,
  uiSetListShowsAction,
} from '../actionCreators'

describe('actionCreators', () => {
  const payload = { somePayload: 'fantastic-payload' }

  describe('context', () => {
    describe('navigation', () => {
      describe('contextSetNavigationAction()', () => {
        test('must return action with given payload', () => {
          expect(contextSetNavigationAction(payload)).toMatchObject({ type: 'CONTEXT_SET_NAVIGATION', payload })
        })
      })
    })

    describe('progress', () => {
      describe('contextSetProgressAction()', () => {
        test('must return action with given payload', () => {
          expect(contextSetProgressAction(payload)).toMatchObject({ type: 'CONTEXT_SET_PROGRESS', payload })
        })
      })
    })
  })

  describe('ui', () => {
    describe('listShows', () => {
      describe('uiSetListShowsEditAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListShowsEditAction(payload)).toMatchObject({ type: 'UI_SET_LIST_SHOWS_EDIT', payload })
        })
      })

      describe('uiSetListShowsSortAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListShowsSortAction(payload)).toMatchObject({ type: 'UI_SET_LIST_SHOWS_SORT', payload })
        })
      })

      describe('uiSetListShowsSearchAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListShowsSearchAction(payload)).toMatchObject({ type: 'UI_SET_LIST_SHOWS_SEARCH', payload })
        })
      })

      describe('uiSetListShowsPaginationAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListShowsPaginationAction(payload)).toMatchObject({ type: 'UI_SET_LIST_SHOWS_PAGINATION', payload })
        })
      })

      describe('uiSetListShowsAction()', () => {
        test('must return action with given payload', () => {
          expect(uiSetListShowsAction(payload)).toMatchObject({ type: 'UI_SET_LIST_SHOWS', payload })
        })
      })
    })

    describe('infoShows', () => {})
  })
})
