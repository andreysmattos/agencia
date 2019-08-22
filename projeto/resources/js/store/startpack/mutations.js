const SET_PAGE = (state, obj) => {
    let newObj = []
    newObj[obj.name] = obj.element

    state.pages = {...state.pages, ...newObj}
    // state.pages = obj.list
}

const SET_INNER = (state, obj) => {
    state.inner = obj.inner
}

const SET_CONFIGS = (state, obj) =>{
    state.configurations = obj.list
}
const DEL_MENU = (state, item) =>{
    console.log('item na mutation', item);

    let pos = state.menus.indexOf(item)
    console.log('pos é ', pos);

    state.menus.splice(pos, 1);

}

const SET_MENUS = (state, obj) =>{
    state.menus = obj.list
}
const SET_SEARCH = (state, obj) => {
    state.search = obj
}

const SET_TEMPERATURE = (state, obj) =>{
    state.temperature = obj.temperature
}

const SET_BANNER = (state, obj) => {
    state.banner = obj.list
}

const SET_CONTESTS = (state, obj) => {
    console.log('OBJ NA MUTATION É: ', obj)
    state.contests = obj.contests
}

const SET_POSITIONS = (state, obj) => {
    console.log('OBJ NA MUTATION É: ', obj)
    state.positions = obj.positions
}

const SET_CANDIDATES = (state, obj) => {
    console.log('OBJ NA MUTATION É: ', obj)
    state.candidates = obj.candidates
}

const SET_DEPARTMENTS = (state, obj) => {
    state.departments = obj.departments
}

const SET_CONTRASTE = (state, value) => {
    console.log('value NA MUTATION É: ', value)
    state.contraste = value
}

const SET_GALLERIES = (state, obj) => {
    let newObj = []
    newObj[obj.name] = obj.element

    state.galleries = {...state.galleries, ...newObj}
    // state.galleries = obj.gallery
}

const SET_PAES = (state, obj) => {
    state.paes = state.paes.concat(obj.pae)
}

const SET_NEWS = (state, obj) => {
    state.news = obj.news
}

const SET_EVENTS = (state, obj) => {
    state.events = obj.events
}

const SET_SCHEDULES = (state, obj) => {
    state.schedules = obj.events
}

const SET_FILTERS = (state, obj) => {
    state.filters = obj.payload
}

const SET_STORE_STATE =(state, obj) => {
    state[obj.state] = obj.payload
}

const SET_TO_STATE =(state, obj) => {
    // console.log('state = ',obj.state)
    // console.log('label = ',obj.label)
    // console.dir('payload = ',obj.payload)
    console.log('-----------SET_TO_STATE')
    console.dir(obj)


    let tempState = state[obj.state]
    tempState[obj.label] = obj.payload

    // state[obj.state][obj.label] = {}
    state[obj.state] = tempState

}

const SET_INNER_GALLERIES = (state,obj) => {

    let newObj = []
    newObj[obj.name] = obj.gallery

    state.innerGalleries = {...state.innerGalleries, ...newObj}
}

const SET_CITIES = (state, obj) => {
    state.cities = obj.list
}

const SET_TOKEN = (state, string) => {
    state.token = string
}

const SET_CONTACTFORM = (state, bool) => {
    state.contact_form = bool
}

const SET_NEWSLETTER = (state, bool) => {
    state.newsletter = bool
}

const SET_BREADCRUMBS = (state, obj) => {
    state.breadcrumbs = obj
}

const SET_ACTION_RESPONSE = (state, obj) => {
    let newObj = []
    newObj[obj.id] = obj.element

    state.actionResponse = {...state.actionResponse, ...newObj}
}

export default {
    SET_PAGE,
    SET_INNER,
    SET_CONFIGS,
    SET_BANNER,
    SET_GALLERIES,
    SET_PAES,
    SET_NEWS,
    SET_EVENTS,
    SET_FILTERS,
    SET_STORE_STATE,
    SET_TO_STATE,
    SET_INNER_GALLERIES,
    SET_TEMPERATURE,
    SET_DEPARTMENTS,
    SET_CITIES,
    SET_TOKEN,
    SET_CONTACTFORM,
    SET_NEWSLETTER,
    SET_MENUS,
    SET_BREADCRUMBS,
    SET_CONTESTS,
    SET_POSITIONS,
    SET_CANDIDATES,
    SET_CONTRASTE,
    SET_SEARCH,
    SET_ACTION_RESPONSE,
    SET_SCHEDULES,
    DEL_MENU
}
