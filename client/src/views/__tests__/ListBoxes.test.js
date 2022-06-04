import React from 'react'
import {screen, render} from '@testing-library/react'
import ListBoxes  from '../ListBoxes'
import {useSelector, useDispatch} from 'react-redux'

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}))

jest.mock('../../Components/Loading/Loading', () => () =>{
   const role = 'loading-page'
    return (
        <div role={role}></div>
    )
})
jest.mock('../../Components/Error/Error', () => () => {
 const role='error-page'
 return(
     <div role={role}></div>
 )
})

jest.mock('../../Components/shippingList/ShippingList', () => () =>{
    const role= 'shippingList-page'
  return(
      <div role={role}></div>
  )
})

const renderAddBoxPageAndCheckForAllIncludedPages = () => {
    render(<ListBoxes />)
    const loadingPage =screen.queryByRole('loading-page')
    const errorPage = screen.queryByRole('error-page')
    const shippingListPage = screen.queryByRole('shippingList-page')
    return [loadingPage,errorPage,shippingListPage]
}

describe('AddeBox', () => {
   beforeEach(() => {
       jest.spyOn(React,'useEffect').mockImplementationOnce(f => f())
       useDispatch.mockImplementation(f => jest.fn())
       //const dispatch = useDispatch()
   })
    it('should render only loading page if Loading is true', () => {
        useSelector.mockReturnValue({
            loading: true, 
            boxes:[{},{}],
            error:''
        })
    
    const [loadingPage, errorPage, shippingListPage] = renderAddBoxPageAndCheckForAllIncludedPages()
    expect(loadingPage).toBeInTheDocument()
    expect(errorPage).not.toBeInTheDocument()
    expect(shippingListPage).not.toBeInTheDocument()
    })
    it('should render only error page if there is an error', () => {
        useSelector.mockReturnValue({
            loading: false,
            boxes:[{},{}],
            error:'some error'
        })
        const [loadingPage, errorPage, shippingListPage] = renderAddBoxPageAndCheckForAllIncludedPages()
        expect(loadingPage).not.toBeInTheDocument()
        expect(errorPage).toBeInTheDocument()
        expect(shippingListPage).not.toBeInTheDocument()
    })
    it('should render only shipping list page if there is no error and loading is false', () => {
        useSelector.mockReturnValue({
            loading: false, 
            boxes:[{},{}],
            error:''
        })
        const [loadingPage, errorPage, shippingListPage] = renderAddBoxPageAndCheckForAllIncludedPages()
        expect(loadingPage).not.toBeInTheDocument()
        expect(errorPage).not.toBeInTheDocument()
        expect(shippingListPage).toBeInTheDocument()
        
    })
})