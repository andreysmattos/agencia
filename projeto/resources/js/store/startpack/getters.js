const getFromPaes = (state) => (payload) => {
    return state.paes.filter(pae => pae.name === payload)[0]
}

const getBaseURL = (state) => (payload) =>{
    return state.baseURL + '/'
}

const getRootPage = () => {
    let splits = window.location.href.split('/')
    let base = 3

    if(splits.indexOf('preview.wplay.com.br') > 0)
        base++

    if(splits.length <= base)
        return '/'
    else
        return splits[base]

}


const getTemperature = (state) => (payload) =>{
    return state.temperature;
}

const getConfig = (state) => (payload)=> {

    let aux = state.configurations.filter(config => config.tag === payload);

    return (aux.length > 0) ? aux[0].content : '';
}

const getMenus = (state) => (payload)=> {
    return state.menus;
}


const getBinds = (state) => (payload) => {
    return state.bindCategories[payload.label].binds
}
export default {
    getFromPaes,
    getBaseURL,
    getRootPage,
    getConfig,
    getTemperature,
    getBinds
}