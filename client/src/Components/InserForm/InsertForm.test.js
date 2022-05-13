import {screen, render} from '@testing-library/react'
import InsertForm  from './InsertForm'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from '../../redux/reducers'

const reduxRender = component => {
    const store = createStore(reducers, compose(applyMiddleware(thunk)))
    render(
    <Provider store={store}>
        {component}
    </Provider>
    )
}


describe('InsertForm', () => {
    it('should render the Form', () => {
        reduxRender(<InsertForm />)
        const insertForm = screen.getByRole('form')
        expect(insertForm).toBeInTheDocument()
    })
})