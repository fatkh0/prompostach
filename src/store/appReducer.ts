
const APP_IS_INITIALIZED = 'app/APP_IS_INITIALIZED'


type TInitialState = {
    isAppInitialized: boolean
}

const initialState: TInitialState = {
    isAppInitialized: false

}

type TAction = TSetIsAppInitialized


const appReducer = (state = initialState, action: TAction): TInitialState=> {
    switch (action.type) {
        case APP_IS_INITIALIZED:
            return {...state, isAppInitialized: true}

        default:
            return state
    }
}
export default appReducer



type TSetIsAppInitialized = {
    type: typeof APP_IS_INITIALIZED
    isAppInitialized: boolean
}
export const setIsAppInitialized = (isAppInitialized: boolean): 
    TSetIsAppInitialized => ({type: APP_IS_INITIALIZED, isAppInitialized})