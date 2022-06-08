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

//this could be called integration test as it s using the real store and rducers, but in the redux documentation, it was suggested to test the actual redux store. So that is why it is here
describe('InsertForm', () => {
    it('should render the Form', () => {
        reduxRender(<InsertForm />)
        const insertForm = screen.getByRole('form')
        expect(insertForm).toBeInTheDocument()
    })
})