//import React  from 'react'
import {screen, render} from '@testing-library/react'
import AddBox  from '../AddBox'
import Loading from '../../Components/Loading/Loading'
import Error from '../../Components/Error/Error'
import InsertForm from '../../Components/InserForm/InsertForm'
import {useSelector} from 'react-redux'

jest.mock('react-redux', () => ({
    useSelector: jest.fn()
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

jest.mock('../../Components/InserForm/InsertForm', () => () =>{
    const role= 'insertform-page'
  //return <MockName />;
  return(
      <div role={role}></div>
  )
})

const renderAddBoxPageAndCheckForAllIncludedPages = () => {
    render(<AddBox />)
    const loadingPage =screen.queryByRole('loading-page')
    const errorPage = screen.queryByRole('error-page')
    const insertformPage = screen.queryByRole('insertform-page')
    return [loadingPage,errorPage,insertformPage]
}

describe('AddeBox', () => {
   
    it('should render only loading page and should not render insertform and error page if Loading is true', () => {
        useSelector.mockReturnValue({
            loading: true, 
            error:''
        })
    
    const [loadingPage, errorPage, insertformPage] = renderAddBoxPageAndCheckForAllIncludedPages()
    expect(loadingPage).toBeInTheDocument()
    expect(errorPage).not.toBeInTheDocument()
    expect(insertformPage).not.toBeInTheDocument()
    })
    it('should render only error page if there isan error', () => {
        useSelector.mockReturnValue({
            loading: false, 
            error:'some error'
        })
        const [loadingPage, errorPage, insertformPage] = renderAddBoxPageAndCheckForAllIncludedPages()
        expect(loadingPage).not.toBeInTheDocument()
        expect(errorPage).toBeInTheDocument()
        expect(insertformPage).not.toBeInTheDocument()
    })
    it('should render only insertForm page if there is no error and loading is false', () => {
        useSelector.mockReturnValue({
            loading: false, 
            error:''
        })
        const [loadingPage, errorPage, insertformPage] = renderAddBoxPageAndCheckForAllIncludedPages()
        expect(loadingPage).not.toBeInTheDocument()
        expect(errorPage).not.toBeInTheDocument()
        expect(insertformPage).toBeInTheDocument()
    })
})