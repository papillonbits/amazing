import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './ListShowTemplate.prop'
import { useListShowState } from './ListShowTemplate.hook'
import styles from './ListShowTemplate.scss'

export function ListShowTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Dropdown: { Dropdown, dropdownState },
    Form: {
      Input: { Input, inputState },
    },
    Grid: { FlexGrid, flexGridState },
    Pagination: { PreviousNext, previousNextState },
  } = primer

  const {
    container,
    alert,
    content,
    contentDisplay,
    contentDisplaySearch,
    contentDisplaySearchPart,
    contentDisplaySearchPartField,
    contentDisplaySearchPartFieldDropdown,
    contentDisplaySearchPartFieldInput,
    contentDisplayGridListShows,
    contentDisplayPagination,
  } = styles

  const {
    alertTextListShows,
    pageContent: {
      listShow: { subheadHeadingLeft, subheadHeadingRight },
    },
    progress,
    currentPage,
    sort,
    search,
    paginatedRandomShowsObjectsNamesValues,
    searchGenresOnClick,
    searchRatingOnClick,
    searchNameOnChange,
    searchNameOnKeyUp,
    searchNameOnFocus,
    searchNameOnBlur,
    paginationOnClick,
    showsObjectsFlexGridOnClick,
    showsObjectsFlexGridOnDoubleClick,
  } = useListShowState()

  return (
    <div className={container}>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
      <Navigator headingLeft={subheadHeadingLeft} headingRight={subheadHeadingRight} />
      <div className={content}>
        <div className={contentDisplay}>
          <div className={contentDisplaySearch}>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Dropdown
                  className={contentDisplaySearchPartFieldDropdown}
                  summary={search?.genres?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.genres}
                  onClick={searchGenresOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Input
                  value={search.name || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type name to search."
                  ariaAttr={{ label: 'Type in name' }}
                  onChange={searchNameOnChange}
                  onKeyUp={searchNameOnKeyUp}
                  onFocus={searchNameOnFocus}
                  onBlur={searchNameOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Dropdown
                  className={contentDisplaySearchPartFieldDropdown}
                  summary={search?.rating?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.rating}
                  onClick={searchRatingOnClick}
                  state={progress.isLoading ? dropdownState.inactive : dropdownState.active}
                />
              </div>
            </div>
          </div>
          {paginatedRandomShowsObjectsNamesValues?.length === 0 && (
            <Alert className={alert} variant={alertVariant.warning}>
              {alertTextListShows.display.noShows}
            </Alert>
          )}
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Top' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <FlexGrid
            className={contentDisplayGridListShows}
            items={paginatedRandomShowsObjectsNamesValues}
            idIndex={0}
            sort={sort}
            onClick={showsObjectsFlexGridOnClick}
            onDoubleClick={showsObjectsFlexGridOnDoubleClick}
            state={progress.isLoading ? flexGridState.inactive : flexGridState.active}
          />
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Bottom' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
        </div>
      </div>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
    </div>
  )
}

ListShowTemplate.defaultProps = defaultProps

ListShowTemplate.propTypes = propTypes
